import { Directive } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { BaseRequestDTO } from "src/app/model/DTO/base-request-DTO";
import { BaseResponseDTO } from "src/app/model/DTO/base-response-DTO";
import { MyPager } from "src/app/model/DTO/my-pager";
import { MySorter } from "src/app/model/DTO/my-sorter";
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
    public sorter: MySorter = new MySorter();
    public pager: MyPager = new MyPager();

    initForm() {
        this.items = [];
    }

    public fetchData(name: string): void {
        this.fetchData_INT(name);
    }

    private fetchData_INT(name: string): void {
        let req = new BaseRequestDTO();
        req.sorter = this.sorter;
        req.pager = this.pager;
       
        this.myDataService.postRequest(name, req)
            .subscribe(
                (res) => {
                    if(res.status == 0) {
                        this.items = res.items;
                        this.fetchDataOk();
                    }
                },
                (error) => {
                    //display error
                }
            )
    }

    public fetchDataById(name: string, id: number, obj?: any) {
        this.fetchDataById_INT(name + '/' + id, obj)
    }

    private fetchDataById_INT(method: string, obj: any) {
        this.myDataService.getRequest(method)
            .subscribe(
                (res) => {
                    if(res.status == 0) {
                        obj.child = res.item;
                    }
                    return; 
                },
                (error) => {
                    //display error
                }
            )
    }

    public fetchDataById2(name: string, id: number, obj?: any) {
        this.fetchDataById_INT2(name + '/' + id, obj)
    }

    private fetchDataById_INT2(method: string, obj: any) {
        this.myDataService.getRequest(method)
            .subscribe(
                (res) => {
                    if(res.status == 0) {
                        obj.data = res.item;
                    }
                    return; 
                },
                (error) => {
                    //display error
                }
            )
    }

    abstract fetchDataOk();

    abstract sort(event: any);
}