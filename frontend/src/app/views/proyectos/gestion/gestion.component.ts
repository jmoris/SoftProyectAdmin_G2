import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { AddProjectComponent } from '../add-project/add-project.component';
import { NotifierService } from 'angular-notifier';
import { ToastrService } from 'ngx-toastr';

import { DetailsProjectComponent } from './details-project/details-project.component';
import { ProjectsService } from 'src/app/_services/projects.service';



@Component({
    selector: 'app-gestion',
    templateUrl: './gestion.component.html',
    styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
    private readonly notifier: NotifierService;

    proyectos: any = [];
    isCompleted: boolean;
    dialogResult = "";
    data: any = {
        email: ''
    };
    step2Form: FormGroup;

    constructor(private modalService: NgbModal,
        private projectsService: ProjectsService,
        private toastr: ToastrService,
        private fb: FormBuilder,
        private dialog: MatDialog,
        notifierService: NotifierService) {
        this.notifier = notifierService;
    }

    ngOnInit() {
        this.loadProjects();
        this.step2Form = this.fb.group({
            experience: [2]
        });
    }

    onStep1Next(e) { }
    onStep2Next(e) { }
    onStep3Next(e) { }
    onComplete(e) { }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then((result) => {
                console.log(result);
            }, (reason) => {
                console.log('Err!', reason);
            });
    }

    openAddDialog(): void {
        let dialogRef = this.dialog.open(AddProjectComponent, {
            width: '500px',
            data: 'This text is passed into the dialog',
            disableClose: true,
            autoFocus: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
            if (result == 'Confirm') {
                this.toastr.success('Proyecto agregado exitosamente', 'Notificación', { timeOut: 3000 });
                this.loadProjects();
            }
        })
    }

    openDetails(): void {
        //let selected;
        //recorrer arreglo de proyecto y obtener el proyecto seleccionado.
        //selected = idProject;//
        //pasar item seleccionado al componente de detalles.
        this.dialog.open(DetailsProjectComponent, {
            width: '500px',
            data: 'This text is passed into the dialog'//selected
        });
    }

    //Método que actualiza los proyectos.
    loadProjects() {
        this.projectsService.getAll().subscribe((proyectos:any) => {
            this.proyectos = proyectos;
        });
    }


}
