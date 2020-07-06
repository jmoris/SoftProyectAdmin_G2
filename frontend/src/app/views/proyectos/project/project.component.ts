import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { echartStyles } from 'src/app/shared/echart-styles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataLayerService } from 'src/app/shared/services/data-layer.service';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/_services/projects.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AddUserRequirementComponent } from './add-user-requirement/add-user-requirement.component';


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
  constructor(
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private dl: DataLayerService,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private proyectoService : ProjectsService
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

  addUserRequeriment(modal, event){
        let dialogRef = this.dialog.open(AddUserRequirementComponent, {
            width: '750px',
            data: 'This text is passed into the dialog',
            disableClose: true,
            autoFocus: true
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog closed: ${result}`);
            this.dialogResult = result;
            if (result == 'Confirm') {
                this.toastr.success('Usuario agregado exitosamente', 'Notificación', { timeOut: 3000 });
            //this.cleanForm();
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



}
