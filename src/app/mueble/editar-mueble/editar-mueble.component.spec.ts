import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMuebleComponent } from './editar-mueble.component';

describe('EditarMuebleComponent', () => {
  let component: EditarMuebleComponent;
  let fixture: ComponentFixture<EditarMuebleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMuebleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
