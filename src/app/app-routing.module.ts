import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerEmpleadoComponent} from './ver_empleado/empleado.component';
import {PrincipalComponent} from './principal/principal.component';
import {EmpleadosComponent} from './empleados/empleados.component';
import {CanActivateTeam} from './guards/canactivateteam';


const routes: Routes = [
  {
    path: 'ver-empleados', component: VerEmpleadoComponent, canActivate: [CanActivateTeam]
  },
  {path: 'principal', component: PrincipalComponent},
  {path: '', redirectTo: '/principal', pathMatch: 'full'},
  {
    path: 'empleados', component: EmpleadosComponent, canActivate: [CanActivateTeam]
  }

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
