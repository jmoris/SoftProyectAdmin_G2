(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-proyectos-proyectos-module"],{

/***/ "./src/app/_services/projects.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/projects.service.ts ***!
  \***********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






//import { environment as env } from "envi";
var ProjectsService = /** @class */ (function () {
    function ProjectsService(http) {
        this.http = http;
    }
    ProjectsService.prototype.insert = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/projects", data);
    };
    ProjectsService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/projects")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            console.log(result.msg);
            return result;
        }));
    };
    ProjectsService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/projects/" + id);
    };
    ProjectsService.ɵfac = function ProjectsService_Factory(t) { return new (t || ProjectsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ProjectsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });
    return ProjectsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/model-classes/project.ts":
/*!******************************************!*\
  !*** ./src/app/model-classes/project.ts ***!
  \******************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/views/proyectos/add-project/add-project.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/proyectos/add-project/add-project.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/projects.service */ "./src/app/_services/projects.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");












function AddProjectComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe ingresar un nombre para el proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe ingresar una descripci\u00F3n para el proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(dialogRef, data, projectService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.projectService = projectService;
        this.hide = true;
        this.hasError = function (controlName, errorName) {
            return _this.form.get(controlName).hasError(errorName);
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    AddProjectComponent.prototype.ngOnInit = function () {
    };
    AddProjectComponent.prototype.onCloseConfirm = function () {
        if (this.form.invalid) {
            Object.values(this.form.controls).forEach(function (control) {
                control.markAsTouched();
            });
            return;
        }
        var projectData = this.form.value;
        console.log('Info name: ' + projectData.name);
        this.dialogRef.close('Confirm');
        console.log('what wea pasa');
        var frm = this.form.value;
        this.projectService.insert(frm).subscribe(function (resp) {
            console.log(resp);
        });
        /*this.projectService.addProject(projectData).subscribe({
          next: result => {
            console.log(result);
            this.thisDialogRef.close('Confirm');
          },
          error: result => { }
        });*/
    };
    AddProjectComponent.prototype.onCloseCancel = function () {
        this.dialogRef.close("Cancel");
    };
    AddProjectComponent.ɵfac = function AddProjectComponent_Factory(t) { return new (t || AddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"])); };
    AddProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProjectComponent, selectors: [["app-add-project"]], decls: 26, vars: 3, consts: [["mat-dialog-title", ""], [3, "formGroup"], [1, "form-div"], ["appearance", "standard", 1, "input"], ["matInput", "", "placeholder", "Nombre del proyecto", "formControlName", "name", "maxlength", "20"], [4, "ngIf"], ["matInput", "", "placeholder", "Descripci\u00F3n proyecto", "formControlName", "description", "maxlength", "20"], ["mat-raised-button", "", 3, "click"]], template: function AddProjectComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agregar proyecto");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nombre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddProjectComponent_mat_error_11_Template, 2, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Descripci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AddProjectComponent_mat_error_18_Template, 2, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_button_click_22_listener() { return ctx.onCloseConfirm(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Agregar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_Template_button_click_24_listener() { return ctx.onCloseCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Cancelar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("name", "required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("description", "required"));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.form-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 15px;\n}\n\n.position-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Nb3Jpcy9Eb2N1bWVudHMvU29mdFByb3llY3RBZG1pbl9HMi9mcm9udGVuZC9zcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJveWVjdG9zL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5mb3JtLWRpdntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5mb3JtLWRpdiA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnBvc2l0aW9uLWZvcm17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZm9ybS1kaXYgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5wb3NpdGlvbi1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */"] });
    return AddProjectComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-project',
                templateUrl: './add-project.component.html',
                styleUrls: ['./add-project.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/proyectos/gestion/details-project/details-project.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/proyectos/gestion/details-project/details-project.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DetailsProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsProjectComponent", function() { return DetailsProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_model_classes_project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model-classes/project */ "./src/app/model-classes/project.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");








var DetailsProjectComponent = /** @class */ (function () {
    function DetailsProjectComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DetailsProjectComponent.prototype.ngOnInit = function () {
    };
    DetailsProjectComponent.prototype.onCloseCancel = function () {
        this.dialogRef.close('Cancel');
    };
    DetailsProjectComponent.ɵfac = function DetailsProjectComponent_Factory(t) { return new (t || DetailsProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    DetailsProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsProjectComponent, selectors: [["app-details-project"]], decls: 41, vars: 0, consts: [["mat-dialog-title", ""], ["fxLayout", "row", 1, "item"], ["fxFlex", "50"], [1, "desc"], ["mat-raised-button", "", 3, "click"]], template: function DetailsProjectComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Detalle proyectos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Resumen usuarios ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Jefe profecto:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Cantidad participantes:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Resumen proyecto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nombre: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Fecha creaci\u00F3n:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Fecha modificaci\u00F3n:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsProjectComponent_Template_button_click_39_listener() { return ctx.onCloseCancel(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cerrar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 100%;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px;\n}\n\n.my-form-container[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nmat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.button[_ngcontent-%COMP%] {\n  height: 10px;\n  padding: 40px;\n  background-color: maroon;\n}\n\n.input-div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  height: 30px;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.button-div[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Nb3Jpcy9Eb2N1bWVudHMvU29mdFByb3llY3RBZG1pbl9HMi9mcm9udGVuZC9zcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9nZXN0aW9uL2RldGFpbHMtcHJvamVjdC9kZXRhaWxzLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9nZXN0aW9uL2RldGFpbHMtcHJvamVjdC9kZXRhaWxzLXByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdFO0VBQ0UsWUFBQTtBQ0FKOztBREdFO0VBQ0Usa0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdBO0VBQ0Usa0JBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9nZXN0aW9uL2RldGFpbHMtcHJvamVjdC9kZXRhaWxzLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgXG4gIC5teS1mb3JtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG4gIFxuICBtYXQtcmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbi5idXR0b24ge1xuICAgIGhlaWdodDogMTBweDtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDAsIDApO1xufVxuXG4uaW5wdXQtZGl2IHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uYWN0aW9uLWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnV0dG9uLWRpdntcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm15LWZvcm0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG5tYXQtcmFkaW8tZ3JvdXAgbWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIGhlaWdodDogMTBweDtcbiAgcGFkZGluZzogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFyb29uO1xufVxuXG4uaW5wdXQtZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzBweDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59Il19 */"] });
    return DetailsProjectComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-details-project',
                templateUrl: './details-project.component.html',
                styleUrls: ['./details-project.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: src_app_model_classes_project__WEBPACK_IMPORTED_MODULE_2__["Project"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/proyectos/gestion/gestion.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/proyectos/gestion/gestion.component.ts ***!
  \**************************************************************/
/*! exports provided: GestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionComponent", function() { return GestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-project/add-project.component */ "./src/app/views/proyectos/add-project/add-project.component.ts");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/__ivy_ngcc__/fesm5/angular-notifier.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _details_project_details_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details-project/details-project.component */ "./src/app/views/proyectos/gestion/details-project/details-project.component.ts");
/* harmony import */ var src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services/projects.service */ "./src/app/_services/projects.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");

















function GestionComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    var _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_div_20_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); var item_r116 = ctx.$implicit; var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); return ctx_r118.deleteData(item_r116.id, _r114, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Jefe proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngb-progressbar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_div_20_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r120.open(_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ver detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_div_20_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r119); var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22); return ctx_r121.open(_r110); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ver proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r116 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r116.scrum_master);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r116.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);
} }
function GestionComponent_ng_template_21_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "* Todos los campos deben ser completados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GestionComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Detalles del proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_21_Template_button_click_3_listener() { var modal_r122 = ctx.$implicit; return modal_r122.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GestionComponent_ng_template_21_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126); var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r125.addUserOnSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Jefe de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cantidad de participantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fecha de creaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00DAltima modificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GestionComponent_ng_template_21_div_35_Template, 4, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_21_Template_button_click_37_listener() { var modal_r122 = ctx.$implicit; return modal_r122.close("Close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r111.addUserForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r111.checked);
} }
function GestionComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    var _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscar proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_23_Template_button_click_3_listener() { var modal_r128 = ctx.$implicit; return modal_r128.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buscar por jefe de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GestionComponent_ng_template_23_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r130.data.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buscar por nombre de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GestionComponent_ng_template_23_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r131); var ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r132.data.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_23_Template_button_click_19_listener() { var modal_r128 = ctx.$implicit; return modal_r128.close("Close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Buscar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_23_Template_button_click_21_listener() { var modal_r128 = ctx.$implicit; return modal_r128.close("Close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("ngModel", ctx_r113.data.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("ngModel", ctx_r113.data.lastName);
} }
function GestionComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eliminaci\u00F3n de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_25_Template_button_click_3_listener() { var modal_r135 = ctx.$implicit; return modal_r135.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BFEstas seguro de querer eliminar este proyecto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_25_Template_button_click_11_listener() { var modal_r135 = ctx.$implicit; return modal_r135.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_25_Template_button_click_13_listener() { var modal_r135 = ctx.$implicit; return modal_r135.close("Ok"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Borrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var GestionComponent = /** @class */ (function () {
    function GestionComponent(modalService, projectsService, toastr, fb, dialog, notifierService) {
        this.modalService = modalService;
        this.projectsService = projectsService;
        this.toastr = toastr;
        this.fb = fb;
        this.dialog = dialog;
        this.proyectos = [];
        this.dialogResult = "";
        this.data = {
            email: ''
        };
        this.notifier = notifierService;
    }
    GestionComponent.prototype.ngOnInit = function () {
        this.loadProjects();
        this.step2Form = this.fb.group({
            experience: [2]
        });
    };
    GestionComponent.prototype.onStep1Next = function (e) { };
    GestionComponent.prototype.onStep2Next = function (e) { };
    GestionComponent.prototype.onStep3Next = function (e) { };
    GestionComponent.prototype.onComplete = function (e) { };
    GestionComponent.prototype.open = function (content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })
            .result.then(function (result) {
            console.log(result);
        }, function (reason) {
            console.log('Err!', reason);
        });
    };
    GestionComponent.prototype.openAddDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__["AddProjectComponent"], {
            width: '500px',
            data: 'This text is passed into the dialog',
            disableClose: true,
            autoFocus: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog closed: " + result);
            _this.dialogResult = result;
            if (result == 'Confirm') {
                _this.toastr.success('Proyecto agregado exitosamente', 'Notificación', { timeOut: 3000 });
                _this.loadProjects();
            }
        });
    };
    GestionComponent.prototype.openDetails = function () {
        //let selected;
        //recorrer arreglo de proyecto y obtener el proyecto seleccionado.
        //selected = idProject;//
        //pasar item seleccionado al componente de detalles.
        this.dialog.open(_details_project_details_project_component__WEBPACK_IMPORTED_MODULE_7__["DetailsProjectComponent"], {
            width: '500px',
            data: 'This text is passed into the dialog' //selected
        });
    };
    //Método que actualiza los proyectos.
    GestionComponent.prototype.loadProjects = function () {
        var _this = this;
        this.projectsService.getAll().subscribe(function (proyectos) {
            _this.proyectos = proyectos;
        });
    };
    GestionComponent.prototype.deleteData = function (id, modal, event) {
        var _this = this;
        event.target.parentElement.parentElement.blur();
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true })
            .result.then(function (result) {
            _this.projectsService.delete(id)
                .subscribe(function (res) {
                _this.toastr.success('Proyecto eliminado correctamente', 'Notificación de eliminación', { timeOut: 3000 });
                _this.loadProjects();
            });
        }, function (reason) {
        });
    };
    GestionComponent.ɵfac = function GestionComponent_Factory(t) { return new (t || GestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"])); };
    GestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GestionComponent, selectors: [["app-gestion"]], decls: 27, vars: 1, consts: [[1, ""], [1, "row"], [1, "breadcrumb", "col-md-9"], ["href", ""], [1, "col-md-3", "text-right"], [1, "btn", "btn-primary", "btn-rounded", 3, "click"], [1, "fas", "fa-cloud"], [1, "btn", "btn-light", "btn-rounded", 2, "margin", "1px", 3, "click"], [1, "datatable-icon-search"], [1, "separator-breadcrumb", "border-top"], ["class", "col-lg-3 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], ["modalBasic", ""], ["modalBasic2", ""], ["deleteConfirmModal", ""], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "card", "card-profile-1", "mb-4"], [1, "card-body"], [1, "text-right"], ["href", "javascript:void(0)", "title", "Eliminar proyecto", 1, "pull-right", "text-danger", 3, "click"], [1, "i-Close-Window"], [1, "text-center"], [1, "avatar", "box-shadow-2", "mb-3"], ["src", "./assets/images/faces/6.jpg", "alt", ""], [1, "m-0"], [1, "mt-0"], [1, "card", "mb-4"], [1, "card-body", 2, "background-color", "rgb(245, 246, 252)"], [1, "mb-2", "text-muted"], [1, "mb-1", "text-22", "font-weight-light", 2, "font-size", "12px"], [1, "mb-1"], ["type", "warning", "height", "4px", 3, "value"], [1, "btn", "btn-primary", "btn-rounded", 2, "margin", "3px", 3, "click"], [1, "btn", "btn-danger", "btn-rounded", 2, "margin", "3px", 3, "click"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "table"], ["type", "text", "formControlName", "bossname", "ng-model", "data.bossname", "size", "25", "maxlength", "100", "required", ""], ["type", "text", "formControlName", "proyectoname", "ng-model", "dala.proyectoname", "size", "25", "maxlength", "100", "required", ""], ["type", "text", "formControlName", "email", "ng-model", "email.text", "size", "25", "maxlength", "100", "required", ""], ["type", "password", "formControlName", "password", "ng-model", "email.text", "size", "25", "maxlength", "100", "required", ""], ["type", "text", "formControlName", "rut", "ng-model", "email.text", "size", "25", "maxlength", "100", "required", ""], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-rounded", 3, "click"], [2, "color", "red"], [1, "form-group"], [1, "form-group", "col-md-12", "mb-3"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "Thomas Taylor", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "P\u00E1gina web aprodes", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded", 3, "click"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"]], template: function GestionComponent_Template(rf, ctx) { if (rf & 1) {
            var _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proyectos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Proyectos");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_Template_button_click_12_listener() { return ctx.openAddDialog(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " + Nuevo proyecto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r139); var _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24); return ctx.open(_r112); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Buscar proyecto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GestionComponent_div_20_Template, 25, 3, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GestionComponent_ng_template_21_Template, 39, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GestionComponent_ng_template_23_Template, 23, 4, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, GestionComponent_ng_template_25_Template, 15, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9nZXN0aW9uL2dlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });
    return GestionComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gestion',
                templateUrl: './gestion.component.html',
                styleUrls: ['./gestion.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: angular_notifier__WEBPACK_IMPORTED_MODULE_5__["NotifierService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/proyectos/proyectos-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/proyectos/proyectos-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProyectoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoRoutingModule", function() { return ProyectoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gestion/gestion.component */ "./src/app/views/proyectos/gestion/gestion.component.ts");





var routes = [
    {
        path: 'gestion',
        component: _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_2__["GestionComponent"]
    },
];
var ProyectoRoutingModule = /** @class */ (function () {
    function ProyectoRoutingModule() {
    }
    ProyectoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProyectoRoutingModule });
    ProyectoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProyectoRoutingModule_Factory(t) { return new (t || ProyectoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return ProyectoRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProyectoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectoRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/proyectos/proyectos.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/proyectos/proyectos.module.ts ***!
  \*****************************************************/
/*! exports provided: ProyectoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectoModule", function() { return ProyectoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm5/ngx-custom-validators.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm5/ngx-echarts.js");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/shared-components.module */ "./src/app/shared/components/shared-components.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proyectos-routing.module */ "./src/app/views/proyectos/proyectos-routing.module.ts");
/* harmony import */ var _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gestion/gestion.component */ "./src/app/views/proyectos/gestion/gestion.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/views/proyectos/add-project/add-project.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _gestion_details_project_details_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gestion/details-project/details-project.component */ "./src/app/views/proyectos/gestion/details-project/details-project.component.ts");















var ProyectoModule = /** @class */ (function () {
    function ProyectoModule() {
    }
    ProyectoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProyectoModule });
    ProyectoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProyectoModule_Factory(t) { return new (t || ProyectoModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"],
                _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProyectoRoutingModule"],
                ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]
            ]] });
    return ProyectoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProyectoModule, { declarations: [_gestion_gestion_component__WEBPACK_IMPORTED_MODULE_10__["GestionComponent"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_11__["AddProjectComponent"], _gestion_details_project_details_project_component__WEBPACK_IMPORTED_MODULE_13__["DetailsProjectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProyectoRoutingModule"],
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
        ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProyectoRoutingModule"],
                    ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
                    ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"]
                ],
                declarations: [_gestion_gestion_component__WEBPACK_IMPORTED_MODULE_10__["GestionComponent"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_11__["AddProjectComponent"], _gestion_details_project_details_project_component__WEBPACK_IMPORTED_MODULE_13__["DetailsProjectComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-proyectos-proyectos-module.js.map