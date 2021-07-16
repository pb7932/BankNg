import { ActivatedRoute, Router } from "@angular/router";
import { MyDataService } from "src/app/services/my-data.service";
import { MyBaseComponent } from "./my-base.component";

export abstract class MyBaseViewComponent extends MyBaseComponent {
    
    constructor(
        private routerView: Router,
        private routeView: ActivatedRoute,
        private myDataService: MyDataService,
        private routeCtxView: string
        )
    {
        super(routerView, routeView, routeCtxView);
    }

}