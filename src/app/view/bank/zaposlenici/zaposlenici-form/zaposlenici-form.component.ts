import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjestaHelper, MjestoDTO } from 'src/app/model/bank/mjesta/mjesta';
import { OsobaDTO, OsobeHelper } from 'src/app/model/bank/osobe/osobe';
import { ZaposleniciHelper } from 'src/app/model/bank/zaposlenici/zaposlenici';
import { ZavodDTO, ZavodiHelper, ZavodRequestDTO } from 'src/app/model/bank/zavodi/zavodi';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseFormComponent } from 'src/app/shared/form/my-base-form-component';

@Component({
  selector: 'app-zaposlenici-form',
  templateUrl: './zaposlenici-form.component.html',
  styleUrls: ['./zaposlenici-form.component.css']
})
export class ZaposleniciFormComponent extends MyBaseFormComponent {

  constructor(
    private routerForm1: Router,
    private routeForm1: ActivatedRoute,
    private myDataService1: MyDataService,
  ) { 
    super(routerForm1, routeForm1, myDataService1, ZaposleniciHelper.routeName);
  }

  public osobe: OsobaDTO[];
  public selectedOsoba: OsobaDTO;
  public zavodi: ZavodDTO[];
  public selectedZavod: ZavodDTO;
  public mjesta: MjestoDTO[];
  
  myNgOnInit() { 
    this.getOsobeSelect();
    this.getZavodiSelect();
    this.getMjestaSelect();
  }

  initForm() {
    this.item = new ZavodRequestDTO();
    this.item.data = new ZavodDTO();

    this.selectedOsoba = new OsobaDTO();
    this.selectedZavod = new ZavodDTO();
  }

  getOsobeSelect() {
    this.myDataService1.getRequest('get' + OsobeHelper.routeName).subscribe(
      res => {
        this.osobe = res.items;
      }
    )
  }
  
  getZavodiSelect() {
    this.myDataService1.getRequest('get' + ZavodiHelper.routeName).subscribe(
      res => {
        this.zavodi = res.items;
      }
    )
  }

  getMjestaSelect() {
    this.myDataService1.getRequest('get' + MjestaHelper.routeName).subscribe(
      res => {
        this.mjesta = res.items;
      }
    )
  }

  saveFormOK() {

  }

  fetchDataOK() { }

  validate() {
    if(!this.item.data.id_osoba || !this.item.data.id_zavod) {
      this.errMsg = 'Molim unesite sve podatke.';
      return false;
    }
    return true;
  }

  //fill out the view with osoba data
  onSelectOsoba() {
    let osoba = new OsobaDTO();
    osoba = this.osobe.find(o => o.id == this.item.data.id_osoba);

    this.selectedOsoba.ime = osoba.ime;
    this.selectedOsoba.prezime = osoba.prezime;
    this.selectedOsoba.adresa = osoba.adresa;
    this.selectedOsoba.pbr = osoba.pbr;
  }

  onSelectZavod() {
    let zavod = new ZavodDTO();
    zavod = this.zavodi.find(o => o.id == this.item.data.id_zavod);

    this.selectedZavod.naziv = zavod.naziv;
    this.selectedZavod.sif_zavod = zavod.sif_zavod;
  }
}
