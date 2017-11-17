import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VerEmpleadoComponent} from './ver_empleado/empleado.component';
import {PrincipalComponent} from './principal/principal.component';
import {EmpleadosComponent} from './empleados/empleados.component';


const routes: Routes = [
  {path: 'ver-empleados', component: VerEmpleadoComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: '', redirectTo: '/principal', pathMatch: 'full'},
  {path: 'empleados', component: EmpleadosComponent}

];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
