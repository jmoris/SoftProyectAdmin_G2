import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CursosRoutingModule } from './cursos-routing.module';
import { GestionComponent } from './gestion/gestion.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { MaterialModule } from 'src/app/material.module';
import { FormWizardModule } from 'src/app/shared/components/form-wizard/form-wizard.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    NgbModule,
    CursosRoutingModule,
    CustomFormsModule,
    FormWizardModule,
    TagInputModule,
    MaterialModule,
  ],
  declarations: [GestionComponent, AddCourseComponent]
})
export class CursosModule { }
