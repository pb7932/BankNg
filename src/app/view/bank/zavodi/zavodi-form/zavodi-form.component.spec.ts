import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavodiFormComponent } from './zavodi-form.component';

describe('ZavodiFormComponent', () => {
  let component: ZavodiFormComponent;
  let fixture: ComponentFixture<ZavodiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavodiFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavodiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
