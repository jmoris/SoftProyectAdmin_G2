import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { UsuariosService } from 'src/app/_services/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';




@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  usuarios: any;
  
  addUserForm = new FormGroup({
    name: new FormControl('name'),
    surname: new FormControl('surname'),
    email: new FormControl('email'),
    password: new FormControl('password'),
    rut: new FormControl('rut'),
    profile: new FormControl('profile')
  });

  constructor(
        private modalService: NgbModal,
        private toastr: ToastrService,
		private usuariosService: UsuariosService
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

  addUser(modal, event) {
    event.target.parentElement.parentElement.blur();
    this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
        .result.then((result) => {
            
                
        }, (reason) => {
        });
  }

  addUserOnSubmit()
  {
    console.log('se supone que aca se deberia agregar o no c xd');
  }

}
