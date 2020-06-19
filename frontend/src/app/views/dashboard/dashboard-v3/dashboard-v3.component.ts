import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from 'src/app/_services/cursos.service';

@Component({
	selector: 'app-dashboard-v3',
	templateUrl: './dashboard-v3.component.html',
	styleUrls: ['./dashboard-v3.component.scss']
})
export class DashboardV3Component implements OnInit {
	cursos: any;
	checked = true;
	cargando = false;
  
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
		this.cargando = true;
	  this.cursosService.getAll().subscribe(
		  (resp:any) => {
			  this.cursos = resp;
			  this.cargando = false;
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
  
	deleteData() {
		
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