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

  addUserForm = this.fb.group({
    name:  ['', Validators.required],
    surname:['', Validators.required],
    email:['', Validators.required],
    password:['', Validators.required],
    rut:['', Validators.required],
    profile:['', Validators.required],
    enrollment: ['', Validators.required]
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

  deleteData(id, modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
            this.usuariosService.delete(id)
                .subscribe(res => {
                    this.toastr.success('Usuario eliminado correctamente', 'Notificación de eliminación', { timeOut: 3000 });
                    this.loadData();
                })
        }, (reason) => {
        });
  }

  cleanForm(){
      this.addUserForm = this.fb.group({
        name:  ['', Validators.required],
        surname:['', Validators.required],
        email:['', Validators.required],
        password:['', Validators.required],
        rut:['', Validators.required],
        profile:['', Validators.required],
        enrollment: ['', Validators.required]
      });
  }

  addUser(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
            this.checked = true;
            var frm = this.addUserForm.value;
            this.usuariosService.insert(frm).subscribe((resp:any)=>{
                if(resp.errors){
                    this.toastr.error('No se puede insertar el usuario en la base de datos.', 'Notificación de error', { timeOut: 3000 });
                    return;
                }
                this.toastr.success('Usuario insertado correctamente', 'Notificación de inserción', { timeOut: 3000 });
                this.cleanForm();
                this.loadData();
            }, (error:any)=>{
                console.log(error);
            });
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
