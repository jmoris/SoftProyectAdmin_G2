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

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent implements OnInit {
  private readonly notifier: NotifierService;

  active = 1;
  name = 'nombreProyecto';
  chartPie1: any;
  chartLineOption3: any;
  products$: any;
  dialogResult = "";
  items = ['Javascript', 'Typescript'];
  autocompletes$: any;
  tagsCtrl1 = new FormControl(this.items);
  loading: boolean = false;
    id : any;
    proyecto : any;
    equipo:any = [];
    userreqs: any = [];
    softreqs: any = [];
    infour : any = {};
    infosr: any = {};
    next_userreq_id :any;
    next_softreq_id :any;
    userRequerimentForm : FormGroup;
    softwareRequerimentForm : FormGroup;
    testCaseForm : FormGroup;
    incrementForm: FormGroup;
    increments: any = [];


public constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dl: DataLayerService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private proyectoService : ProjectsService,
    private userReqService : UserRequirementService,
    private incrementsService: IncrementService,
    private softReqService: SoftwareRequirementsService
  ) {
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
    this.incrementsService.getAll(this.id).subscribe((resp:any) => {
        this.increments = resp;
    });


    this.userReqService.getNextId(this.id).subscribe((resp:any) => {
        this.next_userreq_id = resp.next_id;
    });
    this.softReqService.getNextId(this.id).subscribe((resp:any) => {
        this.next_softreq_id = resp.next_id;
    });

  }

  public onSelect(item) {
    console.log('tag selected: value is ' + item);
  }

  ngOnInit() {
    this.chartPie1 = {
      ...echartStyles.defaultOptions, ...{
        legend: {
          show: true,
          bottom: 0,
        },
        series: [{
          type: 'pie',
          ...echartStyles.pieRing,

          label: echartStyles.pieLabelCenterHover,
          data: [{
            name: 'Exitosos',
            value: 80,
            itemStyle: {
              color: '#663399',
            }
          }, {
            name: 'Fallidos',
            value: 20,
            itemStyle: {
              color: '#ced4da',
            }
          }]
        }]
      }
    };
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
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });

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
