import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CursosService } from 'src/app/_services/cursos.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

  title: String;
  hide = true;
  loading: boolean;
  currentYear: number = new Date().getFullYear();;
  semesters: string[] = ['Primavera', 'Verano'];
  teacher:String;

  constructor(
    public dialogRef: MatDialogRef<EditCourseComponent>,
    private courseService: CursosService,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.title = "Editar curso";
  }

  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    teacher_id: new FormControl("", [Validators.required]),
    year: new FormControl('', [Validators.required]),
    semester: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.loading = true;
    this.courseService.get(this.data).subscribe({
      next: result => {
        console.log(result);
        this.form.get('name').setValue(result.name);
        this.teacher = result.user.name;
        console.log('usuario', this.teacher);
        this.form.get('teacher_id').setValue(this.teacher);
        this.form.get('year').setValue(result.year);
        this.form.get('semester').setValue(this.formatSemester(result.semester));
        this.semesters = result.semester;
       
        this.loading = false;
      }, error: result => {
        console.log(result);
      }
    });
  }

  onCloseCancel(): void {
    this.dialogRef.close('Cancel');

  }

  onCloseConfirm(): void {


  }

  formatSemester(value) {
    switch (value) {
      case '1':
        return 'Otoño';
      case '2':
        return 'Primavera';
    }
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.form.get(controlName).hasError(errorName);
  };

}
