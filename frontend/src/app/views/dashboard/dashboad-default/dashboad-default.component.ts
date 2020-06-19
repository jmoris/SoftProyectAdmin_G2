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
    salesChartPie: EChartOption;

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

        
        this.salesChartPie = {
            color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
            tooltip: {
                show: true,
                backgroundColor: 'rgba(0, 0, 0, .8)'
            },

            xAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }

            ],
            yAxis: [{
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }
            ],
            series: [{
                name: 'Sales by Country',
                type: 'pie',
                radius: '75%',
                center: ['50%', '50%'],
                data: [
                    { value: 535, name: 'Activo' },
                    { value: 310, name: 'Inactivo' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
            ]
        };
    }

}
