import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/_services/usuarios.service';
import { UserRequirementService } from 'src/app/_services/userrequirements.service';

@Component({
  selector: 'app-add-user-requirement',
  templateUrl: './add-user-requirement.component.html',
  styleUrls: ['./add-user-requirement.component.scss']
})
export class AddUserRequirementComponent implements OnInit {

  form: FormGroup;
  hide = true;
  cargando = false;
  usuarios: any;

  constructor(
    public dialogRef: MatDialogRef<AddUserRequirementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: String,
    private usersService: UserRequirementService) {
    this.form = new FormGroup({
      source: new FormControl("", [Validators.required]),
      //type: new FormControl("", [Validators.required]),
      priority: new FormControl("", [Validators.required]),
      stability: new FormControl("", [Validators.required]),
      status: new FormControl("", [Validators.required]),
      cost: new FormControl(1, [Validators.required]),
      code: new FormControl(this.data.internalId, [Validators.required]),
      description: new FormControl("", [Validators.required]),
      project_id: new FormControl(this.data.project_id)
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

  }

  onCloseConfirm() {
    let userData = this.form.value;
    console.log(userData);
    if (this.form.invalid) {
      (<any>Object).values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }



    this.usersService.insert(userData, this.data.project_id).subscribe({
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
