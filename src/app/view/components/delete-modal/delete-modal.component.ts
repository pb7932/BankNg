import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
  @Output() event: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  accept() {
    this.event.emit(true);
  }

  decline() {
    this.event.emit(false);
  }

}
