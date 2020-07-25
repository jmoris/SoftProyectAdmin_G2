import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { echartStyles } from 'src/app/shared/echart-styles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/_services/projects.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddUserRequirementComponent } from './add-user-requirement/add-user-requirement.component';
import { UserRequirementService } from 'src/app/_services/userrequirements.service';
import { IncrementService } from 'src/app/_services/increments.service';
import { AddIncrementComponent } from './add-increment/add-increment.component';
import * as moment from 'moment/moment';
import { AddSoftwareRequirementComponent } from './add-software-requirement/add-software-requirement.component';
import { SoftwareRequirementsService } from 'src/app/_services/softwarerequirements.service';
import { ConfirmationDialogComponent } from '../../core/confirmation-dialog/confirmation-dialog.component';
import { TestCaseService } from 'src/app/_services/testcases.service';
import { AddTestCaseComponent } from './add-test-case/add-test-case.component';
import { EChartOption } from 'echarts';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {

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
    dataTestCases: any;
    salesChartPie: EChartOption;

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


}
