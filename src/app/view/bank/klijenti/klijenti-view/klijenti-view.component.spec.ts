import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentiViewComponent } from './klijenti-view.component';

describe('KlijentiViewComponent', () => {
  let component: KlijentiViewComponent;
  let fixture: ComponentFixture<KlijentiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlijentiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
