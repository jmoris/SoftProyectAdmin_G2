import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/_services/usuarios.service';

@Component({
    selector: 'app-dashboad-default',
    templateUrl: './dashboad-default.component.html',
    styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {

    info : any;

    constructor(private userService: UsuariosService) {
        this.userService.infoDash().subscribe((data) => {
            this.info = data;
            let info2 = null;
            data.usuarios.forEach(element => {
                info2 = {
                        admin: 0,
                        student: 0,
                        teacher: 0
                };
                if(element.profile === 'admin'){
                    info2.admin = element.count;
                }else if(element.profile === 'student'){
                    info2.student = element.count;
                }else if(element.profile === 'teacher'){
                    info2.teacher = element.count;
                }
            });
            this.info.usuarios = info2;
        });
    }

    ngOnInit() {

    }

}
