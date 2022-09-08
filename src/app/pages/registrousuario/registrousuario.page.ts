import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.page.html',
  styleUrls: ['./registrousuario.page.scss'],
})
export class RegistrousuarioPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async Saludo() {
    const alert = await this.alertController.create({
      message: '¡Registro de usuario exitoso!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
