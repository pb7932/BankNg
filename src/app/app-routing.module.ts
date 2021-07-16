import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZavodiRoutes } from './view/bank/zavodi/zavodi-routing';

const routes: Routes = [
  //login
  {
    path: 'login', pathMatch: 'full', loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule)
  },

  //bank
  ...ZavodiRoutes,

  {
    path: '',
    redirectTo: 'zavodi-view', pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
