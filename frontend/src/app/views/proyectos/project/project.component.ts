import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { echartStyles } from 'src/app/shared/echart-styles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/_services/projects.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { AddUserRequirementComponent } from './add-user-requirement/add-user-requirement.component';
import { UserRequirementService } from 'src/app/_services/userrequirements.service';
import { IncrementService } from 'src/app/_services/increments.service';
import { AddIncrementComponent } from './add-increment/add-increment.component';
import * as moment from 'moment/moment';
import { AddSoftwareRequirementComponent } from './add-software-requirement/add-software-requirement.component';
import { SoftwareRequirementsService } from 'src/app/_services/softwarerequirements.service';
import { ConfirmationDialogComponent } from '../../core/confirmation-dialog/confirmation-dialog.component';
import { EditProjectComponent } from '../edit-project/edit-project.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { NotifierService } from 'angular-notifier';
import { AddProjectComponent } from '../add-project/add-project.component';
import { TestCaseService } from 'src/app/_services/testcases.service';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { AddTestCaseComponent } from './add-test-case/add-test-case.component';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  private readonly notifier: NotifierService;

    active = 1;
    name="nombreProyecto";
    chartPie1: any;
    chartLineOption3: any;
    products$: any;
    dialogResult = "";
    items = ['Javascript', 'Typescript'];
    autocompletes$;
    tagsCtrl1 = new FormControl(this.items);
    loading: boolean = false;
    id : any;
    proyecto : any;
    equipo:any = [];
    userreqs: any = [];
    softreqs: any = [];
    testcases: any = [];
    infour : any = {};
    infosr: any = {};
    infotc: any = {};
    next_userreq_id :any;
    next_softreq_id :any;
    next_testcase_id: any;
    userRequerimentForm : FormGroup;
    softwareRequerimentForm : FormGroup;
    testCaseForm : FormGroup;
    incrementForm: FormGroup;
    increments: any = [];
    selectDocument;
    dataTestCases: any;
    salesChartPie: EChartOption;


    public Editor = DecoupledEditor;


    documents: any = [];
    d_requeriments: any = [];
    d_desing: any = [];
    d_implementation:any = [];
    d_testing: any = [];
    d_historical:any = [];

    show_data_document:any = [];

  


public constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dl: DataLayerService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private proyectoService : ProjectsService,
    private userReqService : UserRequirementService,
    private testCaseService : TestCaseService,
    private incrementsService: IncrementService,
    private softReqService: SoftwareRequirementsService
  ) {
    this.salesChartPie = {
        color: ['#263db5','#d22346'],
        tooltip: {
            show: true,
            backgroundColor: 'rgba(0, 0, 0, .8)'
        },

        xAxis: [{
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }

        ],
        yAxis: [{
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            }
        }
        ],
        series: [{
            name: 'Casos de prueba',
            type: 'pie',
            ...echartStyles.pieRing,
            radius: '75%',
            center: ['50%', '50%'],
            data: [
                { value: 0, name: 'Activo' },
                { value: 0, name: 'Inactivo' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
        ]
    };
      this.loading = true;
    this.id = this.route.snapshot.params['id'];
    proyectoService.get(this.id).subscribe((data) => {
        this.proyecto = data[0];
        this.proyectoService.getUsersFromProject(this.id).subscribe((data2) => {
            this.equipo = data2;
            this.loading = false;
        });
        this.infour.completos = 0;
        this.infour.incompletos = 0;
        this.userReqService.getAll(this.id).subscribe((resp: any) => {
            this.userreqs = resp;
            resp.forEach(element => {
                if(element.status == 0)
                    this.infour.incompletos++;
                else
                    this.infour.completos++;
            });
        });
        this.infotc.completos = 0;
        this.infotc.incompletos = 0;
        this.testCaseService.getAll(this.id).subscribe((resp:any) => {
            this.testcases = resp;
            resp.forEach(element => {
                if(element.status == 0)
                    this.infotc.incompletos++;
                else
                    this.infotc.completos++;
            });
            this.dataTestCases = {
                series: {
                    data: [
                        { value: this.infotc.completos, name: 'Exitosos' },
                        { value: this.infotc.incompletos, name: 'Fallidos' }
                    ]
                }
            };
        });
        this.infosr.completos = 0;
        this.infosr.incompletos = 0;
        this.softReqService.getAll(this.id).subscribe((resp: any ) => {
            this.softreqs = resp;
            resp.forEach(element => {
                if(element.status == 0)
                    this.infosr.incompletos++;
                else
                    this.infosr.completos++;
            });
        });

        this.incrementsService.getAll(this.id).subscribe((resp:any) => {
            this.increments = resp;
        });
        this.userReqService.getNextId(this.id).subscribe((resp:any) => {
            this.next_userreq_id = resp.next_id;
        });
        this.softReqService.getNextId(this.id).subscribe((resp:any) => {
            this.next_softreq_id = resp.next_id;
        });
        this.testCaseService.getNextId(this.id).subscribe((resp:any) => {
            this.next_testcase_id = resp.next_id;
        });

    });

    this.testCaseForm = new FormGroup({
      tcCode   : new FormControl(''),
      tcState   : new FormControl(''),
      urReference   : new FormControl(''),
      aResult   : new FormControl(''),
      oResult   : new FormControl('')
    });

    //Creamos el array con todos los documentos
    this.documents = ["Documento de requisitos","Documento de Diseño","Documento de Implementación","Documento de Pruebas","Documento Histórico"];

    //Sub items del documento de requerimientos
    this.d_requeriments = [
      "1.   Introducción",
      "1.1  Proposito del Sistema",
      "1.2  Alcance del Proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2.   Descripcion General",
      "2.1  Suposiciones y Dependencias",
      "2.2  Restricciones Generales",
      "3.   Requisitos de Usuario",
      "4.   Planificacion"
    ];
    //Sub items del documentos de diseño
    this.d_desing = [
      "1.   Introducción",
      "1.1  Proposito del Sistema",
      "1.2  Alcance del proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2.   Diseño Arquitectonico",
      "2.2  Arquitectura Logica",
      "2.3  Modelo de Datos",
      "3.   Diseño Detallado",
      "3.1  Diseño de Diagrama de Clases",
      "3.2  Diseño de Intergaz de Usuario"
    ];
    //Sub items del documento de implementacion
    this.d_implementation = [
      "1.   Introduccion",
      "1.2  Alcance del Proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2.   Implementacion del Proyecto",
      "2.1  Interfaces generales de modulos implementadas",
      "2.2  Interfaces de principales funcionalidades implementadas",
      "3.   Manual de instalacion de Software",
      "3.1  Requerimientos Tecnicos",
      "3.2  Instalacion paso a paso"
    ];
    //Sub items del documento de pruebas
    this.d_testing = [
      "1.   Introduccion",
      "1.1  Alcance del Sistema",
      "1.2  Alcance del Proyecto",
      "1.3  Contexto",
      "1.4  Referencias",
      "2    Casos de Prueba",
      "3    Matriz de Trazado",
      "3.1  Requisitos de Usuario / Casos de prueba",
      "3.2  Requisitos de Sistema / Casos de prueba"
    ];
    //Sub items de documentos historico
    this.d_historical = [
      "1.   Introducción",
      "1.1  Proposito",
      "1.2  Alcance",
      "1.3  Contexto",
      "1.4  Definiciones",
      "1.5  Referencias",
      "2.   Descripcion General",
      "2.1  Usuarios",
      "2.2  Productos",
      "2.3  Ambiente",
      "2.4  Proyectos Relacionados",
      "3.   Diseño",
      "3.1  Arquitectura Fisica",
      "3.2  Arquitectura Logica",
      "3.3  Modelo de Datos",
      "3.4  Detalle de Modulos",
      "3.5  Navegacion",
      "3.6  Interfaz",
      "4.   Requisitos del Sistema",
      "4.1  Requisitos de Usuario",
      "4.2  Requisitos de Software",
      "5.   Modulos",
      "6.   Casos de Prueba",
      "7.   Matrices de Trazado (RU/RS) (MD/RS) (RU/CP) (RS/CP)"
    ];
    //Seteamos el show_data_document para documento de requisitos
    this.show_data_document = this.d_requeriments;
    this.selectDocument = 'asdsd';
    
  }
  
  /**
   * 
   * @param e Cambiamos la seccion del documento
   */
  changed(e){
    if(e.localeCompare("Documento de requisitos")==0)
    {
      this.show_data_document = this.d_requeriments;
    }
    if(e.localeCompare("Documento de Diseño")==0)
    {
      this.show_data_document = this.d_desing;
    }
    if(e.localeCompare("Documento de Implementación")==0)
    {
      this.show_data_document = this.d_implementation;
    }
    if(e.localeCompare("Documento de Pruebas")==0)
    {
      this.show_data_document = this.d_testing;
    }
    if(e.localeCompare("Documento Histórico")==0)
    {
      this.show_data_document = this.d_historical;
    }

}



  loadData(){
    this.infour.completos = 0;
    this.infour.incompletos = 0;
    this.userReqService.getAll(this.id).subscribe((resp: any) => {
        this.userreqs = resp;
        resp.forEach(element => {
            if(element.status == 0)
                this.infour.incompletos++;
            else
                this.infour.completos++;
        });
    });
    this.infosr.completos = 0;
    this.infosr.incompletos = 0;
    this.softReqService.getAll(this.id).subscribe((resp: any ) => {
        this.softreqs = resp;
        resp.forEach(element => {
            if(element.status == 0)
                this.infosr.incompletos++;
            else
                this.infosr.completos++;
        });
    });
    this.infotc.completos = 0;
    this.infotc.incompletos = 0;
    this.testCaseService.getAll(this.id).subscribe((resp:any) => {
        this.testcases = resp;
        resp.forEach(element => {
            if(element.status == 0)
                this.infotc.incompletos++;
            else
                this.infotc.completos++;
        });
        this.dataTestCases = {
            series: {
                data: [
                    { value: this.infotc.completos, name: 'Exitosos' },
                    { value: this.infotc.incompletos, name: 'Fallidos' }
                ]
            }
        };
    });
    console.log(this.dataTestCases);
    this.incrementsService.getAll(this.id).subscribe((resp:any) => {
        this.increments = resp;
    });
    this.userReqService.getNextId(this.id).subscribe((resp:any) => {
        this.next_userreq_id = resp.next_id;
    });
    this.softReqService.getNextId(this.id).subscribe((resp:any) => {
        this.next_softreq_id = resp.next_id;
    });
    this.testCaseService.getNextId(this.id).subscribe((resp:any) => {
        this.next_testcase_id = resp.next_id;
    });

  }

  public onSelect(item) {
    console.log('tag selected: value is ' + item);
  }

  ngOnInit() {
  }

  formatUserReqColumns(data, type){
      let str = '';
      switch(type){
            case 'priority':
                if(data==0){
                    str = 'Deseable';
                }else if(data==1){
                    str = 'No deseable';
                }else{
                    str = 'Critica';
                }
                break;
            case 'stability':
                if(data==0){
                    str = 'Transable';
                }else{
                    str = 'Intransable';
                }
                break;
            case 'status':
                if(data==0){
                    str = 'Pendiente';
                }else{
                    str = 'Finalizado';
                }
                break;
      }
      return str;
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(AddProjectComponent, {
      width: '850px',
      data: 'This text is passed into the dialog',
      disableClose: true,
      autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
      // tslint:disable-next-line: triple-equals
      if (result == 'Confirm') {
          this.toastr.success('Proyecto agregado exitosamente', 'Notificación', { timeOut: 3000 });
      }
  });
  }

  formatStatusTestCase(data){
    if(data==0)
        return 'Exitoso';
    else
        return 'Fracaso';
  }

  addUserRequeriment(modal, event){
        let dialogRef = this.dialog.open(AddUserRequirementComponent, {
            width: '750px',
            data: {project_id: this.id, internalId: this.next_userreq_id},
            disableClose: true,
            autoFocus: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
            if (result == 'Confirm') {
                this.toastr.success('Requisito de usuario agregado exitosamente', 'Notificación', { timeOut: 3000 });
            this.loadData();
            }
        })
    }

    editUserRequeriment(modal, event){
        console.log(modal);
        let dialogRef = this.dialog.open(AddUserRequirementComponent, {
            width: '750px',
            data: {user_req:modal, project_id: this.id},
            disableClose: true,
            autoFocus: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
            if (result == 'Confirm') {
                this.toastr.success('Requisito de usuario modificado exitosamente', 'Notificación', { timeOut: 3000 });
            this.loadData();
            }
        })
    }


  addSoftwareRequeriment(modal, event)
  {
    let dialogRef = this.dialog.open(AddSoftwareRequirementComponent, {
        width: '750px',
        data: {project_id: this.id, internalId: this.next_softreq_id},
        disableClose: true,
        autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
        if (result == 'Confirm') {
            this.toastr.success('Requisito de usuario agregado exitosamente', 'Notificación', { timeOut: 3000 });
        this.loadData();
        }
    })
  }

  editSoftRequeriment(modal, event){
    let dialogRef = this.dialog.open(AddSoftwareRequirementComponent, {
        width: '750px',
        data: {soft_req:modal, project_id: this.id},
        disableClose: true,
        autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
        if (result == 'Confirm') {
            this.toastr.success('Requisito de software modificado exitosamente', 'Notificación', { timeOut: 3000 });
        this.loadData();
        }
    })
  }

addTestCase(modal, event)
  {
    let dialogRef = this.dialog.open(AddTestCaseComponent, {
        width: '750px',
        data: {project_id: this.id, internalId: this.next_testcase_id},
        disableClose: true,
        autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
        if (result == 'Confirm') {
            this.toastr.success('Caso de prueba agregado exitosamente', 'Notificación', { timeOut: 3000 });
        this.loadData();
        }
    })
  }

editTestCase(modal, event){
    console.log(modal);
    let dialogRef = this.dialog.open(AddTestCaseComponent, {
        width: '750px',
        data: {test_case:modal, project_id: this.id},
        disableClose: true,
        autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
        if (result == 'Confirm') {
            this.toastr.success('Caso de prueba modificado exitosamente', 'Notificación', { timeOut: 3000 });
        this.loadData();
        }
    })
}
deleteTestCase(id: string) {
    this.openDeletionConfirmationDialog('caso de prueba').afterClosed().subscribe(confirmation => {
      console.log(confirmation);
      if (confirmation.confirmed) {
        this.testCaseService.delete(id).subscribe({
          next: result => {
            console.log(result);
            this.loadData();
            this.toastr.success('Caso de prueba eliminado correctamente', 'Notificación', { timeOut: 3000 });
          },
          error: result => {
            console.log(result);
          }
        });
      }
    });
  }

  addIncrement(modal, event){
    let dialogRef = this.dialog.open(AddIncrementComponent, {
        width: '750px',
        height: '450px',
        data: {project_id: this.id},
        disableClose: true,
        autoFocus: true
    });
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
        if (result == 'Confirm') {
            this.toastr.success('Requisito de usuario agregado exitosamente', 'Notificación', { timeOut: 3000 });
        this.loadData();
        }
    })
  }

  deleteUserReq(id: string) {
    this.openDeletionConfirmationDialog('requisito de usuario').afterClosed().subscribe(confirmation => {
      console.log(confirmation);
      if (confirmation.confirmed) {
        this.userReqService.delete(id).subscribe({
          next: result => {
            console.log(result);
            this.loadData();
            this.toastr.success('Requisito de usuario eliminado correctamente', 'Notificación', { timeOut: 3000 });
          },
          error: result => {
            console.log(result);
          }
        });
      }
    });
  }

  deleteSoftReq(id: string) {
    this.openDeletionConfirmationDialog('requisito de software').afterClosed().subscribe(confirmation => {
      console.log(confirmation);
      if (confirmation.confirmed) {
        this.softReqService.delete(id).subscribe({
          next: result => {
            console.log(result);
            this.loadData();
            this.toastr.success('Requisito de software eliminado correctamente', 'Notificación', { timeOut: 3000 });
          },
          error: result => {
            console.log(result);
          }
        });
      }
    });
  }

  openDeletionConfirmationDialog(title) {
    var deletionDialogConfig = this.getDialogConfig();
    deletionDialogConfig.data = { message: '¿Desea eliminar este ' + title + '?' };
    return this.dialog.open(ConfirmationDialogComponent, deletionDialogConfig);
  }

  getDialogConfig() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    return dialogConfig;
  }

  formatDate(date){
    return moment(date).format('DD-MM-YYYY');
  }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
}


}
