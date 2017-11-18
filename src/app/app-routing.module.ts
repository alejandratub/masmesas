import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerEmpleadoComponent} from './empleado/ver_empleado/empleado.component';
import {PrincipalComponent} from './principal/principal.component';
import {EmpleadosComponent} from './empleado/empleados/empleados.component';
import {CanActivateTeam} from './guards/canactivateteam';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: 'ver-empleados', component: VerEmpleadoComponent, canActivate: [CanActivateTeam]
  },
  {path: 'principal', component: PrincipalComponent, canActivate: [CanActivateTeam]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'empleados', component: EmpleadosComponent, canActivate: [CanActivateTeam]
  },
  {path: 'login', component: LoginComponent}


];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
