import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {


  form: FormGroup;
  hide = true;


  constructor(public thisDialogRef: MatDialogRef<AddProjectComponent>, @Inject(MAT_DIALOG_DATA) public data: String) {
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  onCloseConfirm() {
    if (this.form.invalid) {
      (<any>Object).values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    let projectData = this.form.value;
    console.log('Info name: ' + projectData.name);
    this.thisDialogRef.close('Confirm');
    //Abajo va la función que añade con el service de project.
    /*this.projectService.addProject(projectData).subscribe({
      next: result => {
        console.log(result);
        this.thisDialogRef.close('Confirm');
      },
      error: result => { }
    });*/
  }

  onCloseCancel() {
    this.thisDialogRef.close("Cancel");
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.form.get(controlName).hasError(errorName);
  };


}
