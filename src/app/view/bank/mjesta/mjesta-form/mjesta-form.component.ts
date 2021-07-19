import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjestaHelper, MjestoDTO, MjestoRequestDTO } from 'src/app/model/bank/mjesta/mjesta';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseFormComponent } from 'src/app/shared/form/my-base-form-component';

@Component({
  selector: 'app-mjesta-form',
  templateUrl: './mjesta-form.component.html',
  styleUrls: ['./mjesta-form.component.css']
})
export class MjestaFormComponent extends MyBaseFormComponent {
  
  constructor(
    private routerForm1: Router,
    private routeForm1: ActivatedRoute,
    private myDataService1: MyDataService,
  ) { 
    super(routerForm1, routeForm1, myDataService1, MjestaHelper.routeName)
  }

  myNgOnInit() {
  
  }

  fetchDataOK() { }

  initForm() {
    this.item = new MjestoRequestDTO();
    this.item.data = new MjestoDTO();
  }

  validate() {
    return true;
  }
}
