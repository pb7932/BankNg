import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniciViewComponent } from './zaposlenici-view.component';

describe('ZaposleniciViewComponent', () => {
  let component: ZaposleniciViewComponent;
  let fixture: ComponentFixture<ZaposleniciViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniciViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniciViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
