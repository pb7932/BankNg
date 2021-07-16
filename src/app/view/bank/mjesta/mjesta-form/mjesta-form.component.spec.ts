import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjestaFormComponent } from './mjesta-form.component';

describe('MjestaFormComponent', () => {
  let component: MjestaFormComponent;
  let fixture: ComponentFixture<MjestaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjestaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MjestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
