import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CustomFormsModule } from 'ngx-custom-validators';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { CursosRoutingmodule } from './cursos-routing.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { GestionComponent } from './gestion/gestion.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AddCursosComponent } from './add-cursos/add-cursos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    NgbModule,
    CursosRoutingmodule,
    CustomFormsModule,
    TagInputModule
  ],
  declarations: [GestionComponent, AddCursosComponent]
})
export class CursosModule { }
