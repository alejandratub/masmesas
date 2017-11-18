import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerEmpleadoComponent} from './empleado/ver_empleado/empleado.component';
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


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent, canActivate: [CanActivateTeam]},
  // empleados
  {path: 'empleados', component: EmpleadosComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-empleados', component: AgregarEmpleadoComponent, canActivate: [CanActivateTeam]},
  {path: 'ver-empleados', component: VerEmpleadoComponent, canActivate: [CanActivateTeam]},
  // clientes
  {path: 'clientes', component: ClienteComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-cliente', component: AgregarClienteComponent, canActivate: [CanActivateTeam]},
  {path: 'editar-cliente', component: EditarClienteComponent, canActivate: [CanActivateTeam]},
  {path: 'ver-cliente', component: VerClienteComponent, canActivate: [CanActivateTeam]},
  // eventos
  {path: 'cliente-evento', component: ClienteEventoComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-evento', component: AgregarEventoComponent, canActivate: [CanActivateTeam]},
  {path: 'editar-evento', component: EditarEventoComponent, canActivate: [CanActivateTeam]}




];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
