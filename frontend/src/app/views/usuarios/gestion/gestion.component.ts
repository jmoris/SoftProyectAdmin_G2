import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { UsuariosService } from 'src/app/_services/usuarios.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
	usuarios: any;

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
}
