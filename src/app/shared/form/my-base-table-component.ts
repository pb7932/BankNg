import { Directive } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseResponseDTO } from "src/app/model/DTO/base-response-DTO";
import { MyDataService } from "src/app/services/my-data.service";
import { MyBaseComponent } from "./my-base.component";

@Directive()
export abstract class MyBaseTableComponent extends MyBaseComponent {
    constructor(
        public router1: Router,
        public route1: ActivatedRoute,
        public routeCtx1: string,
        public myDataService: MyDataService
    ) {
        super(router1, route1, routeCtx1);
    }

    public items: any;

    initForm() {
        this.items = [];
    }

    public fetchData(name: string) {
        setTimeout(() => {
            this.fetchData_INT(name);
        }, 100)
    }

    private fetchData_INT(name: string) {
        this.myDataService.getRequest(name)
            .subscribe(
                (res) => {
                    if(res.status == 0) {
                        this.items = res.items;
                    }
                    return;
                },
                (error) => {
                    //display error
                }
            )
    }
}