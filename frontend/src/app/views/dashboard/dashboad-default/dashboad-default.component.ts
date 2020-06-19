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
            console.log(data.cursos[1].inactivos);
        });
    }

    ngOnInit() {

    }

}
