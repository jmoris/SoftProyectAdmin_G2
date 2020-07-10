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
  edit = false;
  constructor(
    public dialogRef: MatDialogRef<AddUserRequirementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usersService: UserRequirementService) {

    if(this.data.user_req){
        this.edit = true;
        this.form = new FormGroup({
            source: new FormControl(this.data.user_req.source, [Validators.required]),
            //type: new FormControl("", [Validators.required]),
            priority: new FormControl(this.data.user_req.priority, [Validators.required]),
            stability: new FormControl(this.data.user_req.stability, [Validators.required]),
            status: new FormControl(this.data.user_req.status, [Validators.required]),
            cost: new FormControl(this.data.user_req.cost, [Validators.required]),
            code: new FormControl(this.data.user_req.internalId, [Validators.required]),
            description: new FormControl(this.data.user_req.description, [Validators.required]),
            project_id: new FormControl(this.data.project_id)
          });
    }else{
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
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

  }

  onCloseConfirm() {
    let userData = this.form.value;
    if (this.form.invalid) {
      (<any>Object).values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    if(this.edit){
        console.log(userData);
        this.usersService.update(userData, userData.code).subscribe({
            next: result => {
              console.log(result);
              this.dialogRef.close('Confirm');
            },
            error: result => {
              console.log('Error: ' + result);
            }
          });
    }else{
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
  }

  onCloseCancel() {
    this.dialogRef.close("Cancel");
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.get(controlName).hasError(errorName);
  };

}
