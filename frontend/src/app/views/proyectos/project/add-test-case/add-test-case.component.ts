import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserRequirementService } from 'src/app/_services/userrequirements.service';
import { TestCaseService } from 'src/app/_services/testcases.service';

@Component({
  selector: 'app-add-test-case',
  templateUrl: './add-test-case.component.html',
  styleUrls: ['./add-test-case.component.scss']
})
export class AddTestCaseComponent implements OnInit {

    form : FormGroup;
    userRequirements: any = [];
    edit: boolean = false;

    constructor(
        public dialogRef: MatDialogRef<AddTestCaseComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private urService: UserRequirementService,
        private tcService: TestCaseService
    ) {
        if(this.data.test_case){
            this.edit = true;
            this.form = new FormGroup({
                code: new FormControl(this.data.test_case.id, [Validators.required]),
                status: new FormControl(this.data.test_case.status, [Validators.required]),
                description: new FormControl(this.data.test_case.description, [Validators.required]),
                //user_requirement_id: new FormControl(this.data.test_case.user_requirement_id, [Validators.required]),
                acceptableResult: new FormControl(this.data.test_case.acceptableResult, [Validators.required]),
                optimumResult: new FormControl(this.data.test_case.optimumResult, [Validators.required]),
                project_id: new FormControl(this.data.project_id)
            });
        }else{
            this.form = new FormGroup({
                code: new FormControl(this.data.internalId, [Validators.required]),
                status: new FormControl('', [Validators.required]),
                description: new FormControl('', [Validators.required]),
                //user_requirement_id: new FormControl('', [Validators.required]),
                acceptableResult: new FormControl('', [Validators.required]),
                optimumResult: new FormControl('', [Validators.required]),
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

    if (this.form.invalid) {
      (<any>Object).values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    if(this.edit){
        this.tcService.update(userData, userData.code).subscribe({
            next: result => {
              console.log(result);
              this.dialogRef.close('Confirm');
            },
            error: result => {
              console.log('Error: ' + result);
            }
          });
    }else{
        this.tcService.insert(userData).subscribe({
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
