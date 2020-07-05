import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/_services/usuarios.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  
  title: String;
  hide = true;
  loading: boolean;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
    rut: new FormControl(''),
    enrollment: new FormControl('', [Validators.required]),
    profile: new FormControl('', [Validators.required])
  });

  constructor(
    public dialogRef: MatDialogRef<EditUserComponent>,
    private userService: UsuariosService,
    @Inject(MAT_DIALOG_DATA) private data) { 
      this.title = "Editar usuario";
    }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.loading = true;
    this.userService.getUserById(this.data).subscribe({
      next: result => {
        this.form.get('name').setValue(result.name);
        this.form.get('surname').setValue(result.surname);
        this.form.get('email').setValue(result.email);
        this.form.get('password').setValue("");
        this.form.get('rut').setValue(result.rut);
        this.form.get('enrollment').setValue(result.enrollment);
        this.form.get('profile').setValue(result.profile);
        this.loading = false;
      }, error: result => {
        console.log(result);
      }
    });
  }

  onCloseCancel(): void {
    this.dialogRef.close('Cancel');
  }

  onCloseConfirm() {
    if (this.form.invalid) {
      (<any>Object).values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    let userData = this.form.value;


    this.userService.updateUser(this.data, userData).subscribe({
      next: result => {
        console.log(result);
        this.dialogRef.close('Confirm');

      },
      error: result => {
        console.log(result);
      }
    });

  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.get(controlName).hasError(errorName);
  };

}
