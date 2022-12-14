import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

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
