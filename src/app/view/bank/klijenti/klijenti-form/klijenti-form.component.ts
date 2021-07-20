import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KlijentDTO, KlijentiHelper, KlijentRequestDTO } from 'src/app/model/bank/klijenti/klijenti';
import { MjestaHelper, MjestoDTO } from 'src/app/model/bank/mjesta/mjesta';
import { OsobaDTO, OsobaRequestDTO, OsobeHelper } from 'src/app/model/bank/osobe/osobe';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseFormComponent } from 'src/app/shared/form/my-base-form-component';
import { MyDateHelper } from 'src/app/shared/myDateHelper';
declare var jQuery: any;

@Component({
  selector: 'app-klijenti-form',
  templateUrl: './klijenti-form.component.html',
  styleUrls: ['./klijenti-form.component.css']
})
export class KlijentiFormComponent extends MyBaseFormComponent {

  constructor(
    private routerForm1: Router,
    private routeForm1: ActivatedRoute,
    private myDataService1: MyDataService,
  ) { 
    super(routerForm1, routeForm1, myDataService1, KlijentiHelper.routeName);
  }

  public mjesta: MjestoDTO[];
  public osobe: OsobaDTO[];
  public selectedOsoba: OsobaDTO;
  
  myNgOnInit() { 
    jQuery('.ui.calendar').calendar({
      type: 'date'
    });

    this.getMjestaSelect();
    this.getOsobeSelect();
  }

  initForm() {
    this.item = new KlijentRequestDTO();
    this.item.data = new KlijentDTO();

    this.selectedOsoba = new OsobaDTO();
  }

  getMjestaSelect() {
    this.myDataService1.getRequest('get' + MjestaHelper.routeName).subscribe(
      res => {
        this.mjesta = res.items;
      }
    )
  }

  getOsobeSelect() {
    this.myDataService1.getRequest('get' + OsobeHelper.routeName).subscribe(
      res => {
        this.osobe = res.items;
      }
    )
  }

  saveFormOK() {

  }

  fetchDataOK() { }

  validate() {
    return true;
  }

  //fill out the view with osoba data
  onSelect() {
    let osoba = new OsobaDTO();
    osoba = this.osobe.find(o => o.id == this.item.data.id_osoba);

    this.selectedOsoba.ime = osoba.ime;
    this.selectedOsoba.prezime = osoba.prezime;
    this.selectedOsoba.adresa = osoba.adresa;
    this.selectedOsoba.pbr = osoba.pbr;
  }

  //make sure the date is in proper form
  onDateSelect(target) {
    let date = target.value;

    this.item.data.datum_rod = MyDateHelper.transformFomanticDate(date);
  } 

}
