import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CursosService } from 'src/app/_services/cursos.service';

@Component({
  selector: 'app-add-cursos',
  templateUrl: './add-cursos.component.html',
  styleUrls: ['./add-cursos.component.scss']
})
export class AddCursosComponent implements OnInit {
  cursos: any;
  checked = true;
  cargando = false;
  form: FormGroup;
  hide = true;
  usuarios: any;


  constructor(    public dialogRef: MatDialogRef<AddCursosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
    private usersService: CursosService) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      year: new FormControl("", [Validators.required]),
      semester: new FormControl("", [Validators.required, Validators.email]),
      teacher: new FormControl("", [Validators.required]),
    });}


    ngOnInit(): void {
      this.loadData();
    }

    loadData() {
      this.usersService.getAll().subscribe(
        (resp: any) => {
          this.usuarios = resp;
        }
      );
    }
  

    onCloseConfirm() {
      if (this.form.invalid) {
        (<any>Object).values(this.form.controls).forEach(control => {
          control.markAsTouched();
        });
        return;
      }
  
      let userData = this.form.value;
      console.log('nombre: ' + cursoData.name);
      console.log('year: ' + cursoData.year);
      console.log('semester: '+ cursoData.semester);
      console.log('teacher: '+ cursoData.teacher);
  
      this.usersService.insert(userData).subscribe({
        next: result => {
          console.log(result);
          this.dialogRef.close('Confirm');
        },
        error: result => {
          console.log('Error: ' + result);
        }
      });
    }
  
    onCloseCancel() {
      this.dialogRef.close("Cancel");
    }
  
    public hasError = (controlName: string, errorName: string) => {
      return this.form.get(controlName).hasError(errorName);
    };
  
  }

}
