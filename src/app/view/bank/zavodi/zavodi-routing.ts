import { Routes } from '@angular/router';

export const ZavodiRoutes: Routes = [
    {
        path: 'zavodi-view', loadChildren: () => import('../zavodi/zavodi-view/zavodi-view.module').then(m => m.ZavodiViewModule)
    },
    {
        path: 'zavodi-form-new', loadChildren: () => import('../zavodi/zavodi-form/zavodi-form.module').then(m => m.ZavodiFormModule)
    },
    {
        path: 'zavodi-form-edit/:id', loadChildren: () => import('../zavodi/zavodi-form/zavodi-form.module').then(m => m.ZavodiFormModule)
    }
];