import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPagoComponent } from './ver-pago.component';

describe('VerPagoComponent', () => {
  let component: VerPagoComponent;
  let fixture: ComponentFixture<VerPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
