import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZavodiViewComponent } from './zavodi-view.component';

describe('ZavodiViewComponent', () => {
  let component: ZavodiViewComponent;
  let fixture: ComponentFixture<ZavodiViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZavodiViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZavodiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
