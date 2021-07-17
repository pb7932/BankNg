import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniciTableComponent } from './zaposlenici-table.component';

describe('ZaposleniciTableComponent', () => {
  let component: ZaposleniciTableComponent;
  let fixture: ComponentFixture<ZaposleniciTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniciTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniciTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
