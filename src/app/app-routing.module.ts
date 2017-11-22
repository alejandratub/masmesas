import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PrincipalComponent} from './principal/principal.component';
import {EmpleadosComponent} from './empleado/empleados/empleados.component';
import {CanActivateTeam} from './guards/canactivateteam';
import {LoginComponent} from './login/login.component';
import {ClienteComponent} from './cliente/clientes/cliente.component';
import {AgregarClienteComponent} from './cliente/agregar-cliente/agregar-cliente.component';
import {AgregarEmpleadoComponent} from './empleado/agregar-empleado/agregar-empleado.component';
import {EditarClienteComponent} from './cliente/editar-cliente/editar-cliente.component';
import {VerClienteComponent} from './cliente/ver-cliente/ver-cliente.component';
import {ClienteEventoComponent} from './evento/cliente-evento/cliente-evento.component';
import {AgregarEventoComponent} from './evento/agregar-evento/agregar-evento.component';
import {EditarEventoComponent} from './evento/editar-evento/editar-evento.component';
import {EventosComponent} from './evento/eventos/eventos.component';
import {NuevaCotizacionComponent} from './cotizacion/nueva-cotizacion/nueva-cotizacion.component';
import {EditarEmpleadoComponent} from './empleado/editar-empleado/editar-empleado.component';
import {MueblesComponent} from './mueble/muebles/muebles.component';
import {AgregarMuebleComponent} from './mueble/agregar-mueble/agregar-mueble.component';
import {EditarMuebleComponent} from './mueble/editar-mueble/editar-mueble.component';
import {EditarDecoracionComponent} from './decoracion/editar-decoracion/editar-decoracion.component';
import {AgregarDecoracionComponent} from './decoracion/agregar-decoracion/agregar-decoracion.component';
import {DecoracionesComponent} from './decoracion/decoraciones/decoraciones.component';
import {PagosComponent} from './pago/pagos/pagos.component';
import {AgregarPagoComponent} from './pago/agregar-pago/agregar-pago.component';
import {CotizacionComponent} from "./cotizacion/cotizaciones/cotizacion.component";


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent, canActivate: [CanActivateTeam]},
  // empleados
  {path: 'empleados', component: EmpleadosComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-empleados', component: AgregarEmpleadoComponent, canActivate: [CanActivateTeam]},
  {path: 'editar-empleado', component: EditarEmpleadoComponent, canActivate: [CanActivateTeam]},
  // clientes
  {path: 'clientes', component: ClienteComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-cliente', component: AgregarClienteComponent, canActivate: [CanActivateTeam]},
  {path: 'editar-cliente', component: EditarClienteComponent, canActivate: [CanActivateTeam]},
  {path: 'ver-cliente', component: VerClienteComponent, canActivate: [CanActivateTeam]},
  // eventos
  {path: 'eventos', component: EventosComponent, canActivate: [CanActivateTeam]},
  {path: 'cliente-evento', component: ClienteEventoComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-evento', component: AgregarEventoComponent, canActivate: [CanActivateTeam]},
  {path: 'editar-evento', component: EditarEventoComponent, canActivate: [CanActivateTeam]},
  // cotizaciones
  {path: 'nueva-cotizacion', component: NuevaCotizacionComponent, canActivate: [CanActivateTeam]},
  {path: 'cotizacion', component: CotizacionComponent, canActivate: [CanActivateTeam]},
  // muebles
  {path: 'muebles', component: MueblesComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-mueble', component: AgregarMuebleComponent, canActivate: [CanActivateTeam]},
  {path: 'editar-mueble', component: EditarMuebleComponent, canActivate: [CanActivateTeam]},
  // decoracion
  {path: 'agregar-decoracion', component: AgregarDecoracionComponent, canActivate: [CanActivateTeam]},
  {path: 'editar-decoracion', component: EditarDecoracionComponent, canActivate: [CanActivateTeam]},
  {path: 'decoracion', component: DecoracionesComponent, canActivate: [CanActivateTeam]},
  // pagos
  {path: 'pagos', component: PagosComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-pago', component: AgregarPagoComponent, canActivate: [CanActivateTeam]}




];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
