import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyPager } from 'src/app/model/DTO/my-pager';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  public page: number = 1;

  @Input() pager: MyPager;
  @Output() event: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increasePager() {
    this.pager.start = this.pager.start + this.pager.rowsNum;

    this.event.emit(1);

    this.page = this.page + 1;
  }

  decreasePager() {
    if(this.page > 1) {
      this.pager.start = this.pager.start - this.pager.rowsNum;
      
      this.event.emit(0);

      this.page = this.page - 1;
    }
  }
}
