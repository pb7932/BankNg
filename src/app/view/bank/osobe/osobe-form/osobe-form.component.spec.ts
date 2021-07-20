import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OsobeFormComponent } from './osobe-form.component';

describe('OsobeFormComponent', () => {
  let component: OsobeFormComponent;
  let fixture: ComponentFixture<OsobeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OsobeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OsobeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
