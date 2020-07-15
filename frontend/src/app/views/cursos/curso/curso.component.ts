import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from 'src/app/_services/cursos.service';
import { NgbTab, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
    selector: 'app-curso',
    templateUrl: './curso.component.html',
    styleUrls: ['./curso.component.scss']
})
export class CursoComponent implements OnInit {

    displayedColumns: string[] = ["enrollment", "name", "rut", "email", "profile"];
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
    id: any;
    loading: boolean;
    curso: any;
    users: any = [];
    fileToUpload: File = null;
    carga: any;
    @ViewChild('infoImportModal') modalRef: TemplateRef<any>;
    stats: any = {
        students: 0,
        teachers: 1,
        supports: 0
    };



    constructor(
        private route: ActivatedRoute,
        private cursoService: CursosService,
        private modalService: NgbModal,
        private toastr: ToastrService,
    ) {
        //this.dataSource.sortingDataAccessor = this.sortingCustomAccesor;
        ////
        this.loading = true;
        this.id = this.route.snapshot.params['id'];
        this.cursoService.get(this.id).subscribe((data: any) => {
            this.curso = data;
            this.cursoService.usersList(this.id).subscribe((userData: any) => {

                userData.forEach(element => {
                    if (element.profile == 'student')
                        this.stats.students++;
                    else if (element.profile == 'teacher')
                        this.stats.teachers++;
                });

                if (!userData) {
                    return;
                }
                console.log("datos", userData);
                this.users.push(this.curso.user);
                this.users = this.users.concat(userData);
                this.dataSource.data = this.users;
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
                ////

                this.loading = false;
            })
        });
    }

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    sortingCustomAccesor = (item, property) => {
        switch (property) {
            case 'run': return item.rut;
            case 'name': return item.name;
            case 'surname': return item.surname;
            case 'email': return item.email;
            case 'profile': return item.profile;
            default: return item[property];
        }
    };

    public doFilter = (value: string) => {
        this.dataSource.filter = value.trim().toLocaleLowerCase();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
    }

    loadData() {
        this.loading = true;
        this.users = [];
        this.stats = {
            students: 0,
            teachers: 1,
            supports: 0
        };
        this.cursoService.usersList(this.id).subscribe((userData: any) => {
            userData.forEach(element => {
                if (element.profile == 'student')
                    this.stats.students++;
                else if (element.profile == 'teacher')
                    this.stats.teachers++;
            });

            console.log("datos", userData);
            this.users.push(this.curso.user);
            this.users = this.users.concat(userData);
            this.dataSource.data = this.users;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            ////
            this.stats.students = userData.length;
            //this.users.push(this.curso.user);
            //this.users = this.users.concat(userData);
            this.loading = false;
        })
    }

    handleFileInput(files: FileList, modal) {
        this.fileToUpload = files.item(0);
        this.cursoService.uploadFile(this.fileToUpload, this.id).subscribe((data: any) => {
            this.fileToUpload = null;
            if (!data.success) {
                this.toastr.error(data.msg, 'Notificación de error', { timeOut: 3000 });
                return;
            }
            this.toastr.success(data.msg, 'Notificación de exito', { timeOut: 3000 });
            this.carga = data;
            this.modalService.open(this.modalRef, { backdropClass: 'light-blue-backdrop' });
            this.loadData();
        });
    }

    ngOnInit(): void {
    }

    formatProfile(value) {
        switch (value) {
            case 'teacher':
                return 'Docente';
            case 'student':
                return 'Estudiante';
            case 'admin':
                return 'Administrador';
        }
    }

}
