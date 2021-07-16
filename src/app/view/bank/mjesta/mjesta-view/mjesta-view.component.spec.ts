import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjestaViewComponent } from './mjesta-view.component';

describe('MjestaViewComponent', () => {
  let component: MjestaViewComponent;
  let fixture: ComponentFixture<MjestaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MjestaViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MjestaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
