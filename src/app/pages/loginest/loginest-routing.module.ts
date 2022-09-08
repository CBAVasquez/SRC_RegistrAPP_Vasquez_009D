import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginestPage } from './loginest.page';

const routes: Routes = [
  {
    path: '',
    component: LoginestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginestPageRoutingModule {}
