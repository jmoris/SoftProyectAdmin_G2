import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/_services/projects.service';
import { UsuariosService } from 'src/app/_services/usuarios.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {


  form: FormGroup;
  seleccionarForm: FormGroup;
  hide = true;
  isCompleted: boolean;
  asignarForm: FormGroup;
  currentYear: number = new Date().getFullYear();;
  roles:any = [];
  estudiantes: any = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  isDataLoading: boolean;
  selected = [];
  displayedColumns: string[] = [ "select", "name", "surname", "email"];
  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  selection = new SelectionModel<any>(true, []);


  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<AddProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
    private projectService: ProjectsService,
    private userService: UsuariosService,
    private formBuilder: FormBuilder
  ) {
    this.userService.getStudents().subscribe((data) => {
        if (!data) {
            return;
          }
          this.estudiantes = data;
          this.dataSource.data = this.estudiantes;
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
          console.log(this.paginator);
          this.isDataLoading = false;
    });
    this.projectService.getRoles().subscribe((data) => {
        this.roles = data;
        console.log(data);
    });
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      year: new FormControl(this.currentYear, [Validators.required]),
      semester: new FormControl("", [Validators.required]),
    });
    this.seleccionarForm = new FormGroup({
        usuarios: new FormArray([], [Validators.required, Validators.minLength(1)])
    });
    this.asignarForm = new FormGroup({
        usuarios: new FormArray([])
      });
  }


  ngOnInit(): void {
  }

  onCloseConfirm() {
    if (this.form.invalid) {
      (<any>Object).values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    let projectData = this.form.value;
    console.log('Info name: ' + projectData.name);
    this.projectService.insert(projectData).subscribe({
      next: result => {
        console.log(result);
        this.dialogRef.close('Confirm');
      },
      error: result => { }
    });
  }

  onCloseCancel() {
    this.dialogRef.close("Cancel");
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.get(controlName).hasError(errorName);
  };

  onStep1Next(e) {}
  onStep2Next(e) {}
  onComplete(e) {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected == numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  seleccionar(row){
    let usersControl = <FormArray>this.seleccionarForm.controls.usuarios;
    let selected = this.selection.isSelected(row);
    if(selected){
        usersControl.push(this.formBuilder.group({user_id: row.id}));
    }else{
        usersControl.removeAt(usersControl.value.findIndex(student => student.id === row.id))
    }
    console.log(usersControl.value);
  }




}
