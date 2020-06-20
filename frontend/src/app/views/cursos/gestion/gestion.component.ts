
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from 'src/app/_services/cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseComponent } from '../add-course/add-course.component';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  cursos: any;
  checked = true;
  loading = false;

  addCourseForm = this.fb.group({
    name:  ['', Validators.required],
    year:  ['', Validators.required],
    semester:  ['', Validators.required],
    teacher:  ['', Validators.required]
  });

  addGuestTeacherForm = this.fb.group({
    course:  ['', Validators.required],
    guestTeacher:  ['', Validators.required]
  });

  addHelperForm = this.fb.group({
    course:  ['', Validators.required],
    helper:  ['', Validators.required]
  });

  constructor(
        private modalService: NgbModal,
        private toastr: ToastrService,
        private dialog: MatDialog,
        private cursosService: CursosService,
        private fb: FormBuilder,
	) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
      this.loading = true;
    this.cursosService.getAll().subscribe(
        (resp:any) => {
            this.cursos = resp;
            this.loading = false;
        }
    );
  }

  addCourse(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
            this.checked = true;
            var frm = this.addCourseForm.value;
            this.cursosService.insert(frm).subscribe((resp:any)=>{
            if(resp.errors){
                this.toastr.error('No se puede insertar el curso en la base de datos.', 'Notificación de error', { timeOut: 3000 });
                return;
            }
            this.toastr.success('Curso insertado correctamente', 'Notificación de inserción', { timeOut: 3000 });
            this.cleanForm();
            this.loadData();
        }, (error:any)=>{
            console.log(error);
        });
    }, (reason) => {
    });
  }

  cleanForm(){
    this.addCourseForm = this.fb.group({
        name:  ['', Validators.required],
        year:  ['', Validators.required],
        semester:  ['', Validators.required],
        teacher:  ['', Validators.required]
    });
  }

  addGuestTeacher(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  addHelper(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  openAddDialog(): void {
    let dialogRef = this.dialog.open(AddCourseComponent, {
        width: '850px',
        data: 'This text is passed into the dialog',
        disableClose: true,
        autoFocus: true
    });
    /*
    dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result;
        if (result == 'Confirm') {
            this.toastr.success('Proyecto agregado exitosamente', 'Notificación', { timeOut: 3000 });
            this.loadProjects();
        }
    })
    */
}

deleteData(id, modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
            this.cursosService.delete(id)
                .subscribe(res => {
                    this.toastr.success('Curso eliminado correctamente', 'Notificación de eliminación', { timeOut: 3000 });
                    this.loadData();
                })
        }, (reason) => {
        });
  }


  formatProfile(value){
    switch(value){
        case 'teacher':
            return 'Docente';
        case 'student':
            return 'Estudiante';
        case 'admin':
            return 'Administrador';
    }
  }

}
