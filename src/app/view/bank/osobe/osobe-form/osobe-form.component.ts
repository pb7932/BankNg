import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MjestaHelper, MjestoDTO } from 'src/app/model/bank/mjesta/mjesta';
import { OsobaDTO, OsobaRequestDTO, OsobeHelper } from 'src/app/model/bank/osobe/osobe';
import { MyDataService } from 'src/app/services/my-data.service';
import { MyBaseFormComponent } from 'src/app/shared/form/my-base-form-component';
import {Location} from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { SelectMultipleControlValueAccessor } from '@angular/forms';

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
    private myDataService1: MyDataService,
    private location: Location
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

  //dohvati mjesta za select na formi
  getMjestaSelect() {
    this.myDataService1.getRequest('get' + MjestaHelper.routeName).subscribe(
      res => {
        this.mjesta = res.items;
      }
    )
  }

  //cekaj da se spremi forma pa se vrati natrag s forme s koje se doslo tu
  return() {
    for(let i = 0; i < 5; i++) {
      setTimeout( () => {
        if(this.saved) {
          this.setRouteParamAndNavigate();
        }
      },500);
    }
  }

  //saznaj s koje se forme doslo, vrati se tamo i postavi id u query params
  setRouteParamAndNavigate() {
    let startForm = this.routeForm1.snapshot.paramMap.get('f');

    //ako smo dosli s zaposlenik forme
    if(startForm == 'z') {
      this.routerForm1.navigate(['/zaposlenici-form-new', { io: this.itemId }])
    }
    //ako smo dosli s klijent forme
    else if (startForm == 'k') {
      this.routerForm1.navigate(['/klijenti-form-new', { io: this.itemId}])
    }
    else {
      this.location.back();
    }
  }
}
