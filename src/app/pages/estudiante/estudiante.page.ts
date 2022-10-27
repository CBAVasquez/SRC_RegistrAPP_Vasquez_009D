import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  constructor(private menuController: MenuController,private navController:NavController) { }

  ngOnInit() {
  }
  
  mostrarMenu(){
    this.menuController.open('first');
  }
  logout(){
    localStorage.clear();
    this.navController.navigateRoot('login')
  }

}
