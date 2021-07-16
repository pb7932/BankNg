import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjestaTableComponent } from './mjesta-table.component';

describe('MjestaTableComponent', () => {
  let component: MjestaTableComponent;
  let fixture: ComponentFixture<MjestaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjestaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MjestaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
