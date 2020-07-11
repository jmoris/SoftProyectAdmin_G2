import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncrementService } from 'src/app/_services/increments.service';

@Component({
  selector: 'app-add-increment',
  templateUrl: './add-increment.component.html',
  styleUrls: ['./add-increment.component.scss']
})
export class AddIncrementComponent implements OnInit {

    incrementForm : FormGroup;

    constructor(
        public dialogRef: MatDialogRef<AddIncrementComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private incrementService: IncrementService
    ) {

        this.incrementForm = new FormGroup({
            description   : new FormControl('', [Validators.required]),
            initDate    : new FormControl('', [Validators.required]),
            endDate  : new FormControl('', [Validators.required]),
            project_id: new FormControl(this.data.project_id)
        });

    }

    ngOnInit(): void {
    }
    onCloseCancel() {
        this.dialogRef.close("Cancel");
    }

    onCloseConfirm() {
        let userData = this.incrementForm.value;
        if (this.incrementForm.invalid) {
            (<any>Object).values(this.incrementForm.controls).forEach(control => {
                control.markAsTouched();
            });
            return;
        }
        console.log(userData);
        this.incrementService.insert(userData).subscribe((data:any) => {
            console.log(data);
        });
        this.dialogRef.close("Confirm");
    }
}
