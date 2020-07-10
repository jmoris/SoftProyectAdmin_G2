import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { echartStyles } from 'src/app/shared/echart-styles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/_services/projects.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddUserRequirementComponent } from './add-user-requirement/add-user-requirement.component';
import { UserRequirementService } from 'src/app/_services/userrequirements.service';


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
    infour : any = {};
userRequerimentForm : FormGroup;
softwareRequerimentForm : FormGroup;
testCaseForm : FormGroup;
public constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dl: DataLayerService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private proyectoService : ProjectsService,
    private userReqService : UserRequirementService
  ) {
      this.loading = true;
    this.id = this.route.snapshot.params['id'];
    proyectoService.get(this.id).subscribe((data) => {
        this.proyecto = data[0];
        console.log(this.proyecto);
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
    });

    this.userRequerimentForm = new FormGroup({
      urInputCode   : new FormControl(''),
      urPriority    : new FormControl(''),
      urStability  : new FormControl(''),
      urState      : new FormControl(''),
      urCost        : new FormControl(''),
      urDescription : new FormControl('')
    });

    this.softwareRequerimentForm = new FormGroup({
      srInputCode   : new FormControl(''),
      srPriority    : new FormControl(''),
      srStability  : new FormControl(''),
      srState      : new FormControl(''),
      srCost        : new FormControl(''),
      srDescription : new FormControl(''),
      userRequerimentReference : new FormControl('')
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

  addUserRequeriment(modal, event){
        let dialogRef = this.dialog.open(AddUserRequirementComponent, {
            width: '750px',
            data: {project_id: this.id, internalId: this.userreqs.length + 1},
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
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }

  addTestCase(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });

  }

  addIncrement(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }

  editIncrement(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }

  deleteIncrement(modal, event)
  {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
  }


  imprimirtc()
  {
    console.log(this.testCaseForm.value);
  }

  imprimirur()
  {
    console.log(this.userRequerimentForm.value);

  }

  imprimirsr()
  {
    console.log(this.softwareRequerimentForm.value);
  }



}
