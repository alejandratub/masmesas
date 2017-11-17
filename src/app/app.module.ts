import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VerEmpleadoComponent } from './ver_empleado/empleado.component';
import { AppRoutingModule } from './/app-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    VerEmpleadoComponent,
    PrincipalComponent,
    EditarEmpleadoComponent,
    EmpleadosComponent,
    AgregarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
