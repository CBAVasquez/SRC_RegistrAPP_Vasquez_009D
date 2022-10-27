import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../service/registroservice.service';
import { ToastController } from '@ionic/angular';

import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  //adentro del constructor estaba private alertController: AlertController
  constructor(private registroService: RegistroserviceService,
              private alertController: AlertController,
              private toast: ToastController,
              private fb:FormBuilder) {
                this.formularioRegistro = this.fb.group({
                  'nombre': new FormControl("", Validators.required),
                  'correo': new FormControl("", Validators.required),
                  'password': new FormControl("", Validators.required),
                  'confirmaPass': new FormControl("", Validators.required),
                  'tipo' :new FormControl("",Validators.required),
                })
               }

  ngOnInit() {
  }

  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
        this.alertError();
    }
    else{
    this.newUsuario.nomUsuario = form.nombre;
    this.newUsuario.correoUsuario = form.correo;
    this.newUsuario.passUsuario = form.password;
    this.newUsuario.repassUsuario = form.confirmaPass;
    this.newUsuario.tipo = form.tipo;

    this.registroService.addDatos(this.newUsuario).then(dato=>{
      this.newUsuario = <Usuario>{};
      this.showToast('Datos Agregados!');
    });
    this.formularioRegistro.reset();
  }
  }

  async alertError(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
      
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toast.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }
}



