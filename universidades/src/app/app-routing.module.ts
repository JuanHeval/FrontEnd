import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloqueComponent } from './Universidad/bloque/bloque.component';
import { FacultadComponent } from './Universidad/facultad/facultad.component';
import { LaboratorioComponent } from './Universidad/laboratorio/laboratorio.component';


const routes: Routes = [

{path:'bloque',component:BloqueComponent},
{path:'facultad',component:FacultadComponent},
{path:'laboratorio',component:LaboratorioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
