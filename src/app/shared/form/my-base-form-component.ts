import { ThrowStmt } from "@angular/compiler";
import { Directive } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MyDataService } from "src/app/services/my-data.service";
import { MyBaseComponent } from "./my-base.component";

@Directive()
export abstract class MyBaseFormComponent extends MyBaseComponent {
    constructor (
        private routerForm: Router,
        private routeForm: ActivatedRoute,
        private myDataService : MyDataService,
        private routeCtxForm: string,
    )
    {
        super(routerForm, routeForm, routeCtxForm);

        this.isEdit = false;
        this.saved = false;
        this.errMsg = '';

        this.initForm();
        this.fetchData(`get${routeCtxForm}byid`);
    }

    public item: any; //item to create or edit
    public itemId: number; //items id in edit form
    public isEdit: false; //flag => is form for new item or for update 
    public saved: boolean; //when form is validated and item is succesfully saved or updated
    public errMsg: string; //error message

    //initialize new dto
    abstract initForm();

    //if form is in edit, fetch the item from repo and fill form with data, else do nothing
    public fetchData(name: string) {
        let id = this.getIdFromUrl();

        if(!id) return;

        this.myDataService.getById(name, id).subscribe(
            data => {
                this.item = data.item;

                this.fetchDataOK();
            }
        )
    }

    //if some forms need to get additional nested objects
    abstract fetchDataOK();

    //save new item, validate it first
    public saveForm() {
        if(this.validate()) {   
            this.myDataService.postRequest(`${this.routeCtxForm}save`, this.item).subscribe(
              res => {
                  if(res.status == 1) {
                    this.saved = true;

                    this.saveFormOK();
                  }
                  else {
                      this.errMsg = 'An error occured while saving data, please try again.'
                  }
                    
              }
          )
        }
    }

    abstract saveFormOK();

    //update edited item
    public editForm() {

    }

    //delete selected item
    public delete() {

    }

    //put form in initial state
    public reload() {
        this.initForm();
        this.fetchData(`get${this.routeCtxForm}byid`);
    }

    //validate form inputs before passing data to repo
    //tu se postavlja error message
    abstract validate();
    
    public getIdFromUrl(): number {
        this.routeForm.params.subscribe(params => {
            this.itemId = params.id
        })

        return this.itemId;
    }
}