import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMuebleComponent } from './agregar-mueble.component';

describe('AgregarMuebleComponent', () => {
  let component: AgregarMuebleComponent;
  let fixture: ComponentFixture<AgregarMuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarMuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarMuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
