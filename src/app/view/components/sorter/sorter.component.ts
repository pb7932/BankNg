import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MySorter } from 'src/app/model/DTO/my-sorter';

@Component({
  selector: 'app-sorter',
  templateUrl: './sorter.component.html',
  styleUrls: ['./sorter.component.css']
})
export class SorterComponent implements OnInit {
  @Input() sorter: MySorter;
  @Input() title: string;
  @Input() field: string;
  @Input() init: boolean = false;

  @Output() event = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.init == true? this.updateSorterAsc() : {};
  }

  updateSorterDesc() {
    MySorter.updateSorter(this.sorter, this.field, 1);

    this.event.emit(true)
  }

  updateSorterAsc() {
    MySorter.updateSorter(this.sorter, this.field, 0);

    this.event.emit(true)
  }

}
