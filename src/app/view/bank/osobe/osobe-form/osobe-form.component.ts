import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjestaHelper, MjestoDTO } from 'src/app/model/bank/mjesta/mjesta';
import { OsobaDTO, OsobaRequestDTO, OsobeHelper } from 'src/app/model/bank/osobe/osobe';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseFormComponent } from 'src/app/shared/form/my-base-form-component';

@Component({
  selector: 'app-osobe-form',
  templateUrl: './osobe-form.component.html',
  styleUrls: ['./osobe-form.component.css']
})
export class OsobeFormComponent extends MyBaseFormComponent {
  
  public mjesta: MjestoDTO[];

  constructor(
    private routerForm1: Router,
    private routeForm1: ActivatedRoute,
    private myDataService1: MyDataService
  ) 
  {
    super(routerForm1, routeForm1, myDataService1, OsobeHelper.routeName);
  }

  myNgOnInit() { 
    this.getMjestaSelect();
  }

  initForm() {
    this.item = new OsobaRequestDTO();
    this.item.data = new OsobaDTO();
  }

  fetchDataOK() { }

  saveFormOK() { }

  validate() {
    if(!this.item.data.ime ||
       !this.item.data.prezime ||
       !this.item.data.adresa ||
       !this.item.data.pbr ||
       !this.item.data.oib) {

        this.errMsg = 'Molim unesite sve podatke.'
        return false;
       }

    return true;
  }

  getMjestaSelect() {
    this.myDataService1.getRequest('get' + MjestaHelper.routeName).subscribe(
      res => {
        this.mjesta = res.items;
      }
    )
  }
  

}
