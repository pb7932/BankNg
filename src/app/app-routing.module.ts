import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlijentiRoutes } from './view/bank/klijenti/klijenti-routing';
import { MjestaRoutes } from './view/bank/mjesta/mjesta-routing';
import { OsobeRoutes } from './view/bank/osobe/osobe-routing';
import { ZaposleniciRoutes } from './view/bank/zaposlenici/zaposlenici-routing';
import { ZavodiRoutes } from './view/bank/zavodi/zavodi-routing';

const routes: Routes = [
  //login
  {
    path: 'login', pathMatch: 'full', loadChildren: () => import('./view/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home', pathMatch: 'full', redirectTo: 'zavodi-view'
  },

  //bank
  ...ZavodiRoutes,
  ...MjestaRoutes,
  ...KlijentiRoutes,
  ...ZaposleniciRoutes,
  ...OsobeRoutes,

  //default route
  {
    path: '',
    redirectTo: 'login'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
