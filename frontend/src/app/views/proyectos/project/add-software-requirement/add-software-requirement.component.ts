import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SoftwareRequirementsService } from 'src/app/_services/softwarerequirements.service';
import { UserRequirementService } from 'src/app/_services/userrequirements.service';

@Component({
  selector: 'app-add-software-requirement',
  templateUrl: './add-software-requirement.component.html',
  styleUrls: ['./add-software-requirement.component.scss']
})
export class AddSoftwareRequirementComponent implements OnInit {

    form : FormGroup;
    userRequirements: any = [];
    edit: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<AddSoftwareRequirementComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private srService: SoftwareRequirementsService,
        private urService: UserRequirementService
    ) {
        if(this.data.soft_req){
            console.log(this.data.soft_req)
            this.edit = true;
            this.form = new FormGroup({
                priority: new FormControl(this.data.soft_req.priority, [Validators.required]),
                stability: new FormControl(this.data.soft_req.stability, [Validators.required]),
                status: new FormControl(this.data.soft_req.status, [Validators.required]),
                cost: new FormControl(this.data.soft_req.cost, [Validators.required]),
                code: new FormControl(this.data.soft_req.id, [Validators.required]),
                description: new FormControl(this.data.soft_req.description, [Validators.required]),
                user_requirement_id: new FormControl(this.data.soft_req.user_requirement_id, [Validators.required]),
                project_id: new FormControl(this.data.project_id)
            });
        }else{
            this.form = new FormGroup({
                priority: new FormControl("", [Validators.required]),
                stability: new FormControl("", [Validators.required]),
                status: new FormControl("", [Validators.required]),
                cost: new FormControl(1, [Validators.required]),
                code: new FormControl(this.data.internalId, [Validators.required]),
                description: new FormControl("", [Validators.required]),
                user_requirement_id: new FormControl("", [Validators.required]),
                project_id: new FormControl(this.data.project_id)
            });
        }

        this.urService.getAll(this.data.project_id).subscribe((data:any) => {
            this.userRequirements = data;
        });

    }

    ngOnInit(): void {
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
        if(this.edit){
            console.log(userData);
            this.srService.update(userData, userData.code).subscribe({
                next: result => {
                  console.log(result);
                  this.dialogRef.close('Confirm');
                },
                error: result => {
                  console.log('Error: ' + result);
                }
              });
        }else{
            this.srService.insert(userData).subscribe({
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

}
