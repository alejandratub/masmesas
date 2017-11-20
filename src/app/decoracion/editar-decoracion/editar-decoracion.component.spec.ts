import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDecoracionComponent } from './editar-decoracion.component';

describe('EditarDecoracionComponent', () => {
  let component: EditarDecoracionComponent;
  let fixture: ComponentFixture<EditarDecoracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDecoracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDecoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
