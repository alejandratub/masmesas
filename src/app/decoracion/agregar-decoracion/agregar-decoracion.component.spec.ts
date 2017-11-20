import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarDecoracionComponent } from './agregar-decoracion.component';

describe('AgregarDecoracionComponent', () => {
  let component: AgregarDecoracionComponent;
  let fixture: ComponentFixture<AgregarDecoracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarDecoracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDecoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
