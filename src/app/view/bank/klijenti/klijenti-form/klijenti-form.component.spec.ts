import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlijentiFormComponent } from './klijenti-form.component';

describe('KlijentiFormComponent', () => {
  let component: KlijentiFormComponent;
  let fixture: ComponentFixture<KlijentiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlijentiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlijentiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
