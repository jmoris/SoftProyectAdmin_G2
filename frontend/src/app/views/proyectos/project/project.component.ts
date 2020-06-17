import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectsService } from 'src/app/_services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {


  form: FormGroup;
  hide = true;


  constructor(
    private projectService: ProjectsService
  ) {
    
  }

  ngOnInit(): void {
  }


}
