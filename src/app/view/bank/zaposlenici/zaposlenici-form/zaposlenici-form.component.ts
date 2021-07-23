import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjestaHelper, MjestoDTO } from 'src/app/model/bank/mjesta/mjesta';
import { OsobaDTO, OsobeHelper } from 'src/app/model/bank/osobe/osobe';
import { ZaposleniciHelper, ZaposlenikDTO, ZaposlenikRequestDTO } from 'src/app/model/bank/zaposlenici/zaposlenici';
import { ZavodDTO, ZavodiHelper, ZavodRequestDTO } from 'src/app/model/bank/zavodi/zavodi';
import { BaseRequestDTO } from 'src/app/model/DTO/base-request-DTO';
import { MySorter } from 'src/app/model/DTO/my-sorter';
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
  
  myNgFormOnInit() {
    if(!this.isEdit) {
      this.getOsobeSelect();
      this.getZavodiSelect();
      this.getMjestaSelect();
    }
  }

  initForm() {
    this.item = new ZaposlenikRequestDTO();
    this.item.data = new ZaposlenikDTO();

    this.selectedOsoba = new OsobaDTO();
    this.selectedZavod = new ZavodDTO();
  }

  getOsobeSelect() {
    let req = this.configureRequestObject('ime');

    this.myDataService1.postRequest('get' + OsobeHelper.routeName, req).subscribe(
      res => {
        this.osobe = res.items;
        console.log(this.osobe)
        this.getOsobeIdFromRoute();
      }
    )
  }
  
  getZavodiSelect() {
    let req = this.configureRequestObject('sif_zavod');

    this.myDataService1.postRequest('get' + ZavodiHelper.routeName, req).subscribe(
      res => {
        this.zavodi = res.items;

        this.getZavodiIdFromRoute();
      }
    )
  }

  getMjestaSelect() {
    let req = this.configureRequestObject('pbr');

    this.myDataService1.postRequest('get' + MjestaHelper.routeName, req).subscribe(
      res => {
        this.mjesta = res.items;
      }
    )
  }

  getOsobeIdFromRoute() {
    let idOsoba = this.routeForm1.snapshot.paramMap.get('io');

    if(idOsoba) {
      this.item.data.id_osoba = +idOsoba;
    }
    this.onSelectOsoba();
  }

  getZavodiIdFromRoute() {
    let idZavod = this.routeForm1.snapshot.paramMap.get('iz');

    if(idZavod) {
      this.item.data.id_zavod = +idZavod;
    }

    this.onSelectZavod();
  }

  saveFormOK() {

  }

  fetchDataOK() {
    this.getOsobeSelect();
    this.getZavodiSelect();
    this.getMjestaSelect();
   }

  validate() {
    if(this.itemId && this.itemId != this.item.data.id_osoba) {
      this.errMsg = 'Ne mozete mijenjati osobu, samo njen zavod.'
      return false;
    }

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
