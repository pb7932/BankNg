import { ThrowStmt } from "@angular/compiler";
import { Directive } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseRequestDTO } from "src/app/model/DTO/base-request-DTO";
import { MySorter } from "src/app/model/DTO/my-sorter";
import { MyDataService } from "src/app/services/my-data.service";
import { MyBaseComponent } from "./my-base.component";

declare var jQuery: any;

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

        this.checkIsEdit();
        this.initForm();
        this.setOperation();  
    }

    public myNgOnInit() {
        this.fetchData(`get${this.routeCtxForm}byid`);

        if(this.isEdit) {
            jQuery('.ui.basic.modal').modal();
        }

        this.myNgFormOnInit();
    }

    ngOnDestroy(): void {
        jQuery('.ui.basic.modal').remove();
    }
    
    public item: any; //item to create or edit
    public itemId: number; //items id in edit form
    public isEdit: boolean; //flag => is form for new item or for update 
    public saved: boolean = false; //when form is validated and item is succesfully saved or updated
    public errMsg: string = ''; //error message
    public requiredMsg: string = 'Molimo unesite podatak.' //message for not inputed data
    public changed: boolean = false; //if data is not changed dont disable Spremi button

    //initialize new dto
    abstract initForm();

    abstract myNgFormOnInit();
    
    //if form is in edit, fetch the item from repo and fill form with data, else do nothing
    public fetchData(name: string) {
        let id = this.getIdFromUrl();

        if(!id) return;

        this.myDataService.getById(name, id).subscribe(
            data => {
                this.item.data = data.item;
                
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

                    //save the id bcs it might be used for query params
                    if(res.id) this.itemId = res.id;

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

    //put form in initial state
    public reload() {
        this.initForm();
        this.fetchData(`get${this.routeCtxForm}byid`);
        this.saved = false;
        this.changed = false;
        this.errMsg = '';
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

    //here we fill the base-request-dto with all object it needs
    configureRequestObject(pField: string): BaseRequestDTO {
        let req = new BaseRequestDTO();
        let sorter = new MySorter();
        MySorter.updateSorter(sorter, pField, 0);
        req.sorter = sorter;

        return req;
    }

    checkIsEdit() {
        if(this.routerForm.url.includes('edit')) {
            this.isEdit = true;
        }
        else {
            this.isEdit = false;
        }
    }

    onInputChange() {
        this.changed = true;
    }

    //sets the operation to post, update or delete
    setOperation() {
        if(this.isEdit) {
          this.item.op = 'u'
        }
        else {
            this.item.op = 'c'
        }
    }

    showDeleteModal() {
        jQuery('.ui.basic.modal').modal('show');
    } 
    
    onAccept(event: any) {
      if(event) {
        this.item.op = 'd';
        this.saveForm();
      }
    }
}