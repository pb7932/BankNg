import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaposleniciFormComponent } from './zaposlenici-form.component';

describe('ZaposleniciFormComponent', () => {
  let component: ZaposleniciFormComponent;
  let fixture: ComponentFixture<ZaposleniciFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZaposleniciFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaposleniciFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
