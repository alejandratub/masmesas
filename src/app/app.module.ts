import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { EmpleadosComponent } from './empleado/empleados/empleados.component';
import { AgregarEmpleadoComponent } from './empleado/agregar-empleado/agregar-empleado.component';
import {ApiService} from './services/api.service';
import {EmpleadosService} from './services/empleados.service';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './services/auth.service';
import {CanActivateTeam} from './guards/canactivateteam';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import {TokenInterceptor} from './guards/tokeninterceptor';
import { ClienteComponent } from './cliente/clientes/cliente.component';
import {EventosService} from './services/eventos.service';
import {CotizacionService} from './services/cotizacion.service';
import {MueblesService} from './services/muebles.service';
import {DecoracionsService} from './services/decoracion.service';
import {PagoService} from './services/pago.service';
import {ClienteService} from './services/cliente.service';
import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { VerClienteComponent } from './cliente/ver-cliente/ver-cliente.component';
import { EventosComponent } from './evento/eventos/eventos.component';
import { AgregarEventoComponent } from './evento/agregar-evento/agregar-evento.component';
import { EditarEventoComponent } from './evento/editar-evento/editar-evento.component';
import { ClienteEventoComponent } from './evento/cliente-evento/cliente-evento.component';
import { NuevaCotizacionComponent } from './cotizacion/nueva-cotizacion/nueva-cotizacion.component';
import { MueblesComponent } from './mueble/muebles/muebles.component';
import { AgregarMuebleComponent } from './mueble/agregar-mueble/agregar-mueble.component';
import { EditarMuebleComponent } from './mueble/editar-mueble/editar-mueble.component';
import { DecoracionesComponent } from './decoracion/decoraciones/decoraciones.component';
import { AgregarDecoracionComponent } from './decoracion/agregar-decoracion/agregar-decoracion.component';
import { EditarDecoracionComponent } from './decoracion/editar-decoracion/editar-decoracion.component';
import { PagosComponent } from './pago/pagos/pagos.component';
import { AgregarPagoComponent } from './pago/agregar-pago/agregar-pago.component';
import { EditarPagoComponent } from './pago/editar-pago/editar-pago.component';
import { VerPagoComponent } from './pago/ver-pago/ver-pago.component';
import { PagoCotizacionComponent } from './pago/pago-cotizacion/pago-cotizacion.component';
import { AmChartsModule } from '@amcharts/amcharts3-angular';
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    EditarEmpleadoComponent,
    EmpleadosComponent,
    AgregarEmpleadoComponent,
    LoginComponent,
    ClienteComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    VerClienteComponent,
    EventosComponent,
    AgregarEventoComponent,
    EditarEventoComponent,
    ClienteEventoComponent,
    NuevaCotizacionComponent,
    MueblesComponent,
    AgregarMuebleComponent,
    EditarMuebleComponent,
    DecoracionesComponent,
    AgregarDecoracionComponent,
    EditarDecoracionComponent,
    PagosComponent,
    AgregarPagoComponent,
    EditarPagoComponent,
    VerPagoComponent,
    PagoCotizacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AmChartsModule
  ],
  providers: [
    ApiService,
    EmpleadosService,
    AuthService,
    ClienteService,
    EventosService,
    CotizacionService,
    MueblesService,
    DecoracionsService,
    PagoService,
    CanActivateTeam

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
