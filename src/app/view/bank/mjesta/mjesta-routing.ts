import { Routes } from "@angular/router";

export const MjestaRoutes: Routes = [
    {
        path: 'mjesta-view', loadChildren: () => import('../mjesta/mjesta-view/mjesta-view.module').then(m => m.MjestaViewModule)
    },
    {
        path: 'mjesta-form-new', loadChildren: () => import('../mjesta/mjesta-form/mjesta-form.module').then(m => m.MjestaFormModule)
    },
    {
        path: 'mjesta-form-edit/:id', loadChildren: () => import('../mjesta/mjesta-form/mjesta-form.module').then(m => m.MjestaFormModule)
    }
];