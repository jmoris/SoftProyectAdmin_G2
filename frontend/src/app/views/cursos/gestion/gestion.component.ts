import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { UsuariosService } from 'src/app/_services/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  usuarios: any;
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
        private usuariosService: UsuariosService,
        private fb: FormBuilder,
	) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(){
    this.usuariosService.getAll().subscribe(
        (resp:any) => {
            this.usuarios = resp;
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
