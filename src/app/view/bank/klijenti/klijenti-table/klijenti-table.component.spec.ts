import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentiTableComponent } from './klijenti-table.component';

describe('KlijentiTableComponent', () => {
  let component: KlijentiTableComponent;
  let fixture: ComponentFixture<KlijentiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlijentiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
