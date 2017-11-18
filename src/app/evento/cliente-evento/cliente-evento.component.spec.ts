import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteEventoComponent } from './cliente-evento.component';

describe('ClienteEventoComponent', () => {
  let component: ClienteEventoComponent;
  let fixture: ComponentFixture<ClienteEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
