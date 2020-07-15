import { Component, OnInit } from '@angular/core';
import { SharedAnimations } from 'src/app/shared/animations/shared-animations';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouteConfigLoadStart, ResolveStart, RouteConfigLoadEnd, ResolveEnd } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [SharedAnimations]
})
export class SigninComponent implements OnInit {
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
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    signin() {
        this.loading = true;
        this.loadingText = 'Conectando...';
        let f = this.signinForm.value;
        this.auth.login(f.email, f.password)
            .pipe(first())
            .subscribe(
                data => {
                    if(!data.success){
                        this.msgError = data.message;
                        this.check = false;
                        this.loading = false;
                    }else{
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
