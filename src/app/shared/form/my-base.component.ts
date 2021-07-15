import { Directive, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Directive()
export abstract class MyBaseComponent implements OnInit{
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private routeCtx: string
    ) {
        this.newFormRoute = '/' + routeCtx + '-form-new';
        this.editFormRoute = '/' + routeCtx + '-form-edit';
    }

    ngOnInit(): void {
        //globalna akcija

        this.myNgOnInit();
    }

    abstract myNgOnInit();

    public newFormRoute: string;
    public editFormRoute: string;
}