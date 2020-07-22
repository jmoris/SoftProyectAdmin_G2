import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [SharedAnimations]
})
export class SignupComponent implements OnInit {
    loading: boolean;
    loadingText: string;
    signinForm: FormGroup;
    check:boolean = true;
    msgError: string;
    constructor(
        private fb: FormBuilder,
        private auth: AuthenticationService,
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
                this.loadingText = 'Cargando modulos...';

                this.loading = true;
            }
            if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
                this.loading = false;
            }
        });

        this.signinForm = this.fb.group({
            rut: ['', Validators.required],
            enrollment: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    updateInfo() {
        this.loading = true;
        this.loadingText = 'Conectando...';
        let f = this.signinForm.value;
        this.auth.updateInfo(f.rut, f.enrollment, f.password)
            .pipe(first())
            .subscribe(
                data => {
                    if(!data.success){
                        this.msgError = data.message;
                        this.check = false;
                        this.loading = false;
                    }else{
                        this.auth.logout();
                        this.router.navigateByUrl('/dashboard/v1');
                    }
                },
                error => {
                    //this.error = error;
                    if(error === 'Unknown Error'){
                        this.msgError = 'No se puede conectar al servidor.';
                        this.check = false;
                        this.loading = false;
                    }
                    this.msgError = error.message;
                    this.check = false;
                    this.loading = false;
                });
    }
}
