import { Routes } from "@angular/router";

export const ZaposleniciRoutes: Routes = [
    {
        path: 'zaposlenici-view', loadChildren: () => import('../zaposlenici/zaposlenici-view/zaposlenici-view.module').then(m => m.ZaposleniciViewModule)
    },
    {
        path: 'zaposlenici-form-new', loadChildren: () => import('../zaposlenici/zaposlenici-form/zaposlenici-form.module').then(m => m.ZaposleniciFormModule)
    },
    {
        path: 'zaposlenici-form-edit/:id', loadChildren: () => import('../zaposlenici/zaposlenici-form/zaposlenici-form.module').then(m => m.ZaposleniciFormModule)
    },
]