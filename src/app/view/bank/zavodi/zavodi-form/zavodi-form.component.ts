import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ZavodDTO, ZavodiHelper, ZavodRequestDTO } from 'src/app/model/bank/zavodi/zavodi';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseFormComponent } from 'src/app/shared/form/my-base-form-component';

@Component({
  selector: 'app-zavodi-form',
  templateUrl: './zavodi-form.component.html',
  styleUrls: ['./zavodi-form.component.css']
})
export class ZavodiFormComponent extends MyBaseFormComponent {

  constructor(
    private routerForm1: Router,
    private routeForm1: ActivatedRoute,
    private myDataService1: MyDataService,
  ) { 
    super(routerForm1, routeForm1, myDataService1, ZavodiHelper.routeName)
  }

  myNgOnInit() { }

  initForm() {
    this.item = new ZavodRequestDTO();
    this.item.data = new ZavodDTO();
  }

  saveFormOK() { }

  fetchDataOK() { }

  validate() {
    return true;
  }

  return() {
    for(let i = 0; i < 5; i++) {
      setTimeout( () => {
        this.setQueryParamAndNavigateBack();
      },500); 
    }
  }

  setQueryParamAndNavigateBack() {
    this.routerForm1.navigate(['/zaposlenici-form-new', {iz: this.itemId}])
  }
}
