import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavodiTableComponent } from './zavodi-table.component';

describe('ZavodiTableComponent', () => {
  let component: ZavodiTableComponent;
  let fixture: ComponentFixture<ZavodiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavodiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavodiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
