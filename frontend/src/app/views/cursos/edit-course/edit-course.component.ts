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

  constructor(
    public dialogRef: MatDialogRef<EditCourseComponent>,
    private courseService: CursosService,
    @Inject(MAT_DIALOG_DATA) private data) {
    this.title = "Editar curso";
  }

  form = new FormGroup({
    name: new FormControl("", [Validators.required]),
    teacher_id: new FormControl("", [Validators.required]),
    year: new FormControl(this.currentYear, [Validators.required]),
    semester: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
  }

  getUserData() {
    this.loading = true;
    this.courseService.get(this.data).subscribe({
      next: result => {
        this.form.get('name').setValue(result.name);
        this.form.get('teacher_id').setValue(result.teacher_id);
        this.form.get('year').setValue(result.year);
        this.form.get('semester').setValue(result.semester);
        this.loading = false;
      }, error: result => {
        console.log(result);
      }
    });
  }

}
