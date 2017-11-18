import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerEmpleadoComponent} from './empleado/ver_empleado/empleado.component';
import {PrincipalComponent} from './principal/principal.component';
import {EmpleadosComponent} from './empleado/empleados/empleados.component';
import {CanActivateTeam} from './guards/canactivateteam';
import {LoginComponent} from './login/login.component';
import {ClienteComponent} from './cliente/clientes/cliente.component';
import {AgregarClienteComponent} from './cliente/agregar-cliente/agregar-cliente.component';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'principal', component: PrincipalComponent, canActivate: [CanActivateTeam]},
  {path: 'empleados', component: EmpleadosComponent, canActivate: [CanActivateTeam]},
  {path: 'ver-empleados', component: VerEmpleadoComponent, canActivate: [CanActivateTeam]},
  {path: 'clientes', component: ClienteComponent, canActivate: [CanActivateTeam]},
  {path: 'agregar-cliente', component: AgregarClienteComponent, canActivate: [CanActivateTeam]}


];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
