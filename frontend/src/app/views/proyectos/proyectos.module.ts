import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomFormsModule } from 'ngx-custom-validators';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TagInputModule } from 'ngx-chips';

import { NgxEchartsModule } from 'ngx-echarts';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProyectoRoutingModule } from './proyectos-routing.module';
import { GestionComponent } from './gestion/gestion.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { MaterialModule } from 'src/app/material.module';
import { DetailsProjectComponent } from './gestion/details-project/details-project.component';
import { ProjectComponent } from './project/project.component';
import { FormWizardModule } from 'src/app/shared/components/form-wizard/form-wizard.module';
import { AddUserRequirementComponent } from './project/add-user-requirement/add-user-requirement.component';
import { AddIncrementComponent } from './project/add-increment/add-increment.component';
import { AddSoftwareRequirementComponent } from './project/add-software-requirement/add-software-requirement.component';
import { AddTestCaseComponent } from './project/add-test-case/add-test-case.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    NgxEchartsModule,
    NgxDatatableModule,
    NgbModule,
    ProyectoRoutingModule,
    CustomFormsModule,
    FormWizardModule,
    TagInputModule,
    MaterialModule,
    CKEditorModule
  ],
  declarations: [GestionComponent, AddProjectComponent, DetailsProjectComponent,ProjectComponent, AddUserRequirementComponent, AddIncrementComponent, AddSoftwareRequirementComponent, AddTestCaseComponent]
})
export class ProyectoModule { }

