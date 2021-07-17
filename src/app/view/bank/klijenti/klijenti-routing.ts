import { Routes } from "@angular/router";
import { KlijentiViewComponent } from "./klijenti-view/klijenti-view.component";

export const KlijentiRoutes: Routes = [
    {
        path: 'klijenti-view', loadChildren: () => import('../klijenti/klijenti-view/klijenti-view.module').then(m => m.KlijentiViewModule)
    },
    {
        path: 'klijenti-form-new', loadChildren: () => import('../klijenti/klijenti-form/klijenti-form.module').then(m => m.KlijentiFormModule)
    }
]