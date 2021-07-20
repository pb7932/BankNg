import { Routes } from "@angular/router";

export const OsobeRoutes: Routes = [
    {
        path: 'osobe-form-new', loadChildren: () => import('../osobe/osobe-form/osobe-form.module').then(m => m.OsobeFormModule)
    }
]