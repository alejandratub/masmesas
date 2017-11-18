import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VerEmpleadoComponent } from './empleado/ver_empleado/empleado.component';
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
import {DecoracionService} from './services/decoracion.service';
import {PagoService} from './services/pago.service';
import {ClienteService} from './services/cliente.service';
import { AgregarClienteComponent } from './cliente/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { VerClienteComponent } from './cliente/ver-cliente/ver-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    VerEmpleadoComponent,
    PrincipalComponent,
    EditarEmpleadoComponent,
    EmpleadosComponent,
    AgregarEmpleadoComponent,
    LoginComponent,
    ClienteComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    VerClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    EmpleadosService,
    AuthService,
    ClienteService,
    EventosService,
    CotizacionService,
    MueblesService,
    DecoracionService,
    PagoService,
    CanActivateTeam,
    TokenInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
