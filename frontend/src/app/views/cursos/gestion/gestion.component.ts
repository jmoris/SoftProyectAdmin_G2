import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from 'src/app/_services/cursos.service';




@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  cursos: any;
  checked = true;

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
        private cursosService: CursosService,
        private fb: FormBuilder,
	) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.cursosService.getAll().subscribe(
        (resp:any) => {
            this.cursos = resp;
        }
    );
  }

  addCourse(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  addGuestTeacher(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
  }

  addHelper(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true });
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
