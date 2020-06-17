import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {
    path: 'gestion',
    component: GestionComponent
  },
  {
    path: 'gestion/proyecto',
    component: ProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectoRoutingModule { }
