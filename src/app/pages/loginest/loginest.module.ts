import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginestPageRoutingModule } from './loginest-routing.module';

import { LoginestPage } from './loginest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginestPageRoutingModule
  ],
  declarations: [LoginestPage]
})
export class LoginestPageModule {}
