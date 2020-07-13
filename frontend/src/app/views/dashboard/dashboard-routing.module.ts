import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboadDefaultComponent } from './dashboad-default/dashboad-default.component';
import { DashboadEstudianteComponent } from './dashboad-estudiante/dashboad-estudiante.component';


const routes: Routes = [
  {
    path: 'v1',
    component: DashboadDefaultComponent,
  },
  {
    path: 'v2',
    component: DashboadEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
