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
    ProjectsService.prototype.getRoles = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/roles");
    };
    ProjectsService.prototype.insertComplete = function (data) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/projects/createmass", data);
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

/***/ "./src/app/shared/components/form-wizard/form-wizard.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/form-wizard.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardModule", function() { return FormWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wizard/wizard.component */ "./src/app/shared/components/form-wizard/wizard/wizard.component.ts");
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wizard-step/wizard-step.component */ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts");





var FormWizardModule = /** @class */ (function () {
    function FormWizardModule() {
    }
    FormWizardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FormWizardModule });
    FormWizardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FormWizardModule_Factory(t) { return new (t || FormWizardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]] });
    return FormWizardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormWizardModule, { declarations: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormWizardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]],
                exports: [_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_2__["WizardComponent"], _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_3__["WizardStepComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts ***!
  \************************************************************************************/
/*! exports provided: WizardStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardStepComponent", function() { return WizardStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var _c0 = ["*"];
var WizardStepComponent = /** @class */ (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrev = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    WizardStepComponent.ɵfac = function WizardStepComponent_Factory(t) { return new (t || WizardStepComponent)(); };
    WizardStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardStepComponent, selectors: [["wizard-step"]], inputs: { title: "title", hidden: "hidden", isValid: "isValid", showNext: "showNext", showPrev: "showPrev", isActive: "isActive" }, outputs: { onNext: "onNext", onPrev: "onPrev", onComplete: "onComplete" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function WizardStepComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isActive);
        } }, encapsulation: 2 });
    return WizardStepComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'wizard-step',
                template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isValid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showPrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onPrev: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], isActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['isActive']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/form-wizard/wizard/wizard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/form-wizard/wizard/wizard.component.ts ***!
  \**************************************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wizard-step/wizard-step.component */ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




var _c0 = function (a0, a1, a2, a3) { return { "active": a0, "enabled": a1, "disabled": a2, "completed": a3 }; };
function WizardComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardComponent_li_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r296); var step_r294 = ctx.$implicit; var ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r295.goToStep(step_r294); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var step_r294 = ctx.$implicit;
    var ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](2, _c0, step_r294.isActive, !step_r294.isDisabled, step_r294.isDisabled, ctx_r293.isCompleted));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](step_r294.title);
} }
var _c1 = ["*"];
var WizardComponent = /** @class */ (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(); };
    WizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WizardComponent, selectors: [["form-wizard"]], contentQueries: function WizardComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__["WizardStepComponent"], false);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wizardSteps = _t);
        } }, outputs: { onStepChanged: "onStepChanged" }, ngContentSelectors: _c1, decls: 13, vars: 7, consts: [[1, "card"], [1, "card-header"], [1, "nav", "nav-justified"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "card-block"], [1, "card-footer", 3, "hidden"], ["type", "button", 1, "btn", "btn-rounded", "btn-secondary", "float-left", 3, "hidden", "click"], ["type", "button", 1, "btn", "btn-rounded", "btn-secondary", "float-right", 3, "disabled", "hidden", "click"], [1, "nav-item", 3, "ngClass"], [3, "click"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WizardComponent_li_3_Template, 3, 7, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_7_listener() { return ctx.previous(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Atras");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_9_listener() { return ctx.next(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Siguiente");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WizardComponent_Template_button_click_11_listener() { return ctx.complete(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Finalizar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.steps);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isCompleted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.hasPrevStep || !ctx.activeStep.showPrev);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.activeStep.isValid)("hidden", !ctx.hasNextStep || !ctx.activeStep.showNext);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.activeStep.isValid)("hidden", ctx.hasNextStep);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 0;\n  font-size: 1.25rem;\n}\n\n.card-block[_ngcontent-%COMP%] {\n  overflow-y: auto;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-top: 0 none;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  padding: 1rem 0rem;\n  border-bottom: 0.5rem solid #ccc;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: black;\n  border-bottom-color: #1976D2 !important;\n}\n\n.enabled[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom-color: #58a2ea;\n}\n\n.disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n\n.completed[_ngcontent-%COMP%] {\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Nb3Jpcy9Eb2N1bWVudHMvU29mdFByb3llY3RBZG1pbl9HMi9mcm9udGVuZC9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0td2l6YXJkL3dpemFyZC93aXphcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0td2l6YXJkL3dpemFyZC93aXphcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBUSxZQUFBO0FDRVI7O0FEREE7RUFBZSxzQkFBQTtFQUF3QixVQUFBO0VBQVksa0JBQUE7QUNPbkQ7O0FETkE7RUFBYyxnQkFBQTtBQ1VkOztBRFRBO0VBQWUsc0JBQUE7RUFBd0Isa0JBQUE7QUNjdkM7O0FEYkE7RUFBWSxrQkFBQTtFQUFvQixnQ0FBQTtBQ2tCaEM7O0FEakJBO0VBQVUsaUJBQUE7RUFBbUIsWUFBQTtFQUFjLHVDQUFBO0FDdUIzQzs7QUR0QkE7RUFBVyxlQUFBO0VBQWlCLDRCQUFBO0FDMkI1Qjs7QUQxQkE7RUFBWSxXQUFBO0FDOEJaOztBRDdCQTtFQUFhLGVBQUE7QUNpQ2IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb3JtLXdpemFyZC93aXphcmQvd2l6YXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQgeyBoZWlnaHQ6IDEwMCU7IH1cbi5jYXJkLWhlYWRlciB7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7IHBhZGRpbmc6IDA7IGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuLmNhcmQtYmxvY2sgeyBvdmVyZmxvdy15OiBhdXRvOyB9XG4uY2FyZC1mb290ZXIgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyBib3JkZXItdG9wOiAwIG5vbmU7IH1cbi5uYXYtaXRlbSB7IHBhZGRpbmc6IDFyZW0gMHJlbTsgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkICNjY2M7IH1cbi5hY3RpdmUgeyBmb250LXdlaWdodDogYm9sZDsgY29sb3I6IGJsYWNrOyBib3JkZXItYm90dG9tLWNvbG9yOiAjMTk3NkQyICFpbXBvcnRhbnQ7IH1cbi5lbmFibGVkIHsgY3Vyc29yOiBwb2ludGVyOyBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoODgsIDE2MiwgMjM0KTsgfVxuLmRpc2FibGVkIHsgY29sb3I6ICNjY2M7IH1cbi5jb21wbGV0ZWQgeyBjdXJzb3I6IGRlZmF1bHR9IiwiLmNhcmQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmNhcmQtYmxvY2sge1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wOiAwIG5vbmU7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkICNjY2M7XG59XG5cbi5hY3RpdmUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMTk3NkQyICFpbXBvcnRhbnQ7XG59XG5cbi5lbmFibGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNThhMmVhO1xufVxuXG4uZGlzYWJsZWQge1xuICBjb2xvcjogI2NjYztcbn1cblxuLmNvbXBsZXRlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */"] });
    return WizardComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'form-wizard',
                templateUrl: './wizard.component.html',
                styleUrls: ['./wizard.component.scss']
            }]
    }], function () { return []; }, { wizardSteps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_1__["WizardStepComponent"]]
        }], onStepChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/usuarios.service */ "./src/app/_services/usuarios.service.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/collections.js");
/* harmony import */ var _shared_components_form_wizard_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/form-wizard/wizard/wizard.component */ "./src/app/shared/components/form-wizard/wizard/wizard.component.ts");
/* harmony import */ var _shared_components_form_wizard_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/form-wizard/wizard-step/wizard-step.component */ "./src/app/shared/components/form-wizard/wizard-step/wizard-step.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-custom-validators */ "./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm5/ngx-custom-validators.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");



























var _c0 = ["sort1"];
var _c1 = ["sort2"];
var _c2 = ["paginator"];
var _c3 = ["paginator2"];
function AddProjectComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe ingresar un nombre para el proyecto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe ingresar una descripcion para el proyecto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_mat_error_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe seleccionar un semestre para el proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe ingresar un a\u00F1o para el proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    var _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddProjectComponent_th_44_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195); var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r194.masterToggle() : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r171.selection.hasValue() && ctx_r171.isAllSelected())("indeterminate", ctx_r171.selection.hasValue() && !ctx_r171.isAllSelected());
} }
function AddProjectComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_td_45_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); return $event.stopPropagation(); })("change", function AddProjectComponent_td_45_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r198); var row_r196 = ctx.$implicit; var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); $event ? ctx_r199.selection.toggle(row_r196) : null; return ctx_r199.seleccionar(row_r196); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r196 = ctx.$implicit;
    var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r172.selection.isSelected(row_r196));
} }
function AddProjectComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r200 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r200.name, " ");
} }
function AddProjectComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Apellido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r201 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r201.surname, " ");
} }
function AddProjectComponent_th_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_td_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r202 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r202.email, " ");
} }
function AddProjectComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
function AddProjectComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
} }
function AddProjectComponent_th_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_td_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r204.name, " ");
} }
function AddProjectComponent_th_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Apellido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_td_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r205 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r205.surname, " ");
} }
function AddProjectComponent_th_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_td_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var element_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r206.email, " ");
} }
function AddProjectComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddProjectComponent_td_74_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    var _r212 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddProjectComponent_td_74_mat_option_5_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r212); var rol_r209 = ctx.$implicit; var element_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r210.selectRol(element_r207, rol_r209); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var rol_r209 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", rol_r209.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rol_r209.name);
} }
function AddProjectComponent_td_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seleccione un rol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AddProjectComponent_td_74_mat_option_5_Template, 2, 2, "mat-option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r190.roles);
} }
function AddProjectComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 35);
} }
function AddProjectComponent_tr_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
} }
var _c4 = function () { return [5]; };
var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(dialogRef, data, projectService, userService, formBuilder) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.projectService = projectService;
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.hide = true;
        this.currentYear = new Date().getFullYear();
        this.roles = [];
        this.estudiantes = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"]();
        this.selected = [];
        this.displayedColumns = ["select", "name", "surname", "email"];
        this.displayedColumns2 = ["name", "surname", "email", "rol"];
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["ColumnMode"];
        this.SelectionType = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["SelectionType"];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
        this.hasError = function (controlName, errorName) {
            return _this.form.get(controlName).hasError(errorName);
        };
        this.userService.getStudents().subscribe(function (data) {
            if (!data) {
                return;
            }
            _this.estudiantes = data;
            _this.dataSource.data = _this.estudiantes;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            _this.isDataLoading = false;
        });
        this.projectService.getRoles().subscribe(function (data) {
            _this.roles = data;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            year: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.currentYear, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            semester: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
        this.seleccionarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            usuarios: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)])
        });
        this.asignarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            usuarios: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.dataSource2.data.length)])
        });
    }
    ;
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
        this.projectService.insert(projectData).subscribe({
            next: function (result) {
                console.log(result);
            },
            error: function (result) { }
        });
    };
    AddProjectComponent.prototype.onCloseCancel = function () {
        this.dialogRef.close("Cancel");
    };
    AddProjectComponent.prototype.onStep1Next = function (e) { };
    AddProjectComponent.prototype.onStep2Next = function (e) {
        this.dataSource2.data = this.selection.selected;
        this.dataSource2.sort = this.sort2;
        this.dataSource2.paginator = this.paginator2;
        this.asignarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            usuarios: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(this.dataSource2.data.length)])
        });
    };
    AddProjectComponent.prototype.onComplete = function (e) {
        var _this = this;
        var frm = this.form.value;
        frm.students = this.asignarForm.value.usuarios;
        this.projectService.insertComplete(frm).subscribe(function (data) {
            console.log(data);
            _this.dialogRef.close('Confirm');
        });
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AddProjectComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected == numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AddProjectComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.isAllSelected()) {
            this.seleccionarForm.controls.usuarios.setValue([]);
            this.selection.clear();
        }
        else {
            var usersControl_1 = this.seleccionarForm.controls.usuarios;
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
            this.estudiantes.forEach(function (element) {
                usersControl_1.push(_this.formBuilder.group({ user_id: element.id }));
            });
        }
    };
    AddProjectComponent.prototype.seleccionar = function (row) {
        var usersControl = this.seleccionarForm.controls.usuarios;
        var selected = this.selection.isSelected(row);
        if (selected) {
            usersControl.push(this.formBuilder.group({ user_id: row.id }));
        }
        else {
            usersControl.removeAt(usersControl.value.findIndex(function (student) { return student.id === row.id; }));
        }
    };
    AddProjectComponent.prototype.searchById = function (id) {
        var usuarios = this.seleccionarForm.controls.usuarios.value;
        var search = null;
        usuarios.forEach(function (element) {
            if (element.user_id == id) {
                search = element;
            }
        });
        return search;
        ;
    };
    AddProjectComponent.prototype.selectRol = function (user, rol) {
        var searched = this.searchById(user.id);
        searched.role_id = rol.id;
        var usersControl = this.asignarForm.controls.usuarios;
        usersControl.push(this.formBuilder.group({
            user_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](searched.user_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            role_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](searched.role_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        }));
    };
    AddProjectComponent.ɵfac = function AddProjectComponent_Factory(t) { return new (t || AddProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
    AddProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddProjectComponent, selectors: [["app-add-project"]], viewQuery: function AddProjectComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort2 = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator2 = _t.first);
        } }, decls: 79, vars: 24, consts: [["mat-dialog-title", ""], [3, "title", "isValid", "onNext"], [3, "formGroup"], [1, "form-div"], ["appearance", "standard", 1, "input"], ["matInput", "", "placeholder", "Nombre del proyecto", "formControlName", "name", "maxlength", "20"], [4, "ngIf"], ["matInput", "", "placeholder", "Descripcion del proyecto", "formControlName", "description", "maxlength", "20"], ["formControlName", "semester"], [3, "value"], ["matInput", "", "type", "number", "placeholder", "A\u00F1o del proyecto", "formControlName", "year", "min", "2000", "max", "2100"], [2, "width", "50vh!important", 3, "title", "isValid", "onNext"], [1, "col-md-12"], ["mat-table", "", "matSort", "", "matSortActive", "run", "matSortDirection", "asc", "matSortDisableClear", "", 1, "mat-elevation-z8", 2, "width", "100%", 3, "dataSource"], ["sort", "matSort"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "surname"], ["matColumnDef", "email"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["paginator", ""], [3, "title", "isValid", "onComplete"], ["sort2", "matSort"], ["matColumnDef", "rol"], ["paginator2", ""], ["mat-header-cell", ""], [3, "checked", "indeterminate", "change"], ["mat-cell", ""], [3, "checked", "click", "change"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", ""], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]], template: function AddProjectComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Agregar proyecto");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form-wizard");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "wizard-step", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNext", function AddProjectComponent_Template_wizard_step_onNext_6_listener($event) { return ctx.onStep1Next($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AddProjectComponent_mat_error_13_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Descripcion");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AddProjectComponent_mat_error_19_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Semestre");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Primavera ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Oto\u00F1o ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddProjectComponent_mat_error_30_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "A\u00F1o");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddProjectComponent_mat_error_36_Template, 2, 0, "mat-error", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "wizard-step", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onNext", function AddProjectComponent_Template_wizard_step_onNext_38_listener($event) { return ctx.onStep2Next($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](43, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddProjectComponent_th_44_Template, 2, 2, "th", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddProjectComponent_td_45_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](46, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, AddProjectComponent_th_47_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, AddProjectComponent_td_48_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](49, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, AddProjectComponent_th_50_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, AddProjectComponent_td_51_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](52, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AddProjectComponent_th_53_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AddProjectComponent_td_54_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, AddProjectComponent_tr_55_Template, 1, 0, "tr", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, AddProjectComponent_tr_56_Template, 1, 0, "tr", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "mat-paginator", 24, 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "wizard-step", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onComplete", function AddProjectComponent_Template_wizard_step_onComplete_59_listener($event) { return ctx.onComplete($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "table", 13, 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](63, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AddProjectComponent_th_64_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AddProjectComponent_td_65_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](66, 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, AddProjectComponent_th_67_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, AddProjectComponent_td_68_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](69, 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AddProjectComponent_th_70_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AddProjectComponent_td_71_Template, 2, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](72, 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, AddProjectComponent_th_73_Template, 2, 0, "th", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, AddProjectComponent_td_74_Template, 6, 1, "td", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AddProjectComponent_tr_75_Template, 1, 0, "tr", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, AddProjectComponent_tr_76_Template, 1, 0, "tr", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "mat-paginator", 24, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Informaci\u00F3n b\u00E1sica")("isValid", ctx.form.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("name", "required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("description", "required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("semester", "required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("year", "required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Buscar estudiantes")("isValid", ctx.seleccionarForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.seleccionarForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c4));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Asignar roles")("isValid", ctx.asignarForm.valid);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c4));
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _shared_components_form_wizard_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__["WizardComponent"], _shared_components_form_wizard_wizard_step_wizard_step_component__WEBPACK_IMPORTED_MODULE_11__["WizardStepComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__["ɵbq"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__["ɵbo"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.form-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 15px;\n}\n\n.position-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Nb3Jpcy9Eb2N1bWVudHMvU29mdFByb3llY3RBZG1pbl9HMi9mcm9udGVuZC9zcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvcHJveWVjdG9zL2FkZC1wcm9qZWN0L2FkZC1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5mb3JtLWRpdntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5mb3JtLWRpdiA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnBvc2l0aW9uLWZvcm17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZm9ybS1kaXYgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5wb3NpdGlvbi1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */"] });
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
            }] }, { type: src_app_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }, { type: src_app_services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sort1']
        }], sort2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sort2']
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['paginator']
        }], paginator2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['paginator2']
        }] }); })();


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
    var _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_div_20_Template_a_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225); var item_r222 = ctx.$implicit; var ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r220 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27); return ctx_r224.deleteData(item_r222.id, _r220, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Jefe proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "ngb-progressbar", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_div_20_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225); var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r226.openDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Ver detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_div_20_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r225); var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx_r227.open(_r216); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Ver proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r222 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r222.scrum_master);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r222.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 25);
} }
function GestionComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GestionComponent_ng_template_22_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "* Todos los campos deben ser completados.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GestionComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    var _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Detalles del proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_22_Template_button_click_3_listener() { var modal_r228 = ctx.$implicit; return modal_r228.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function GestionComponent_ng_template_22_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r232); var ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r231.addUserOnSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Jefe de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Nombre de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cantidad de participantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Fecha de creaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u00DAltima modificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GestionComponent_ng_template_22_div_35_Template, 4, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_22_Template_button_click_37_listener() { var modal_r228 = ctx.$implicit; return modal_r228.close("Close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r217.addUserForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r217.checked);
} }
function GestionComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    var _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Buscar proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_24_Template_button_click_3_listener() { var modal_r234 = ctx.$implicit; return modal_r234.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Buscar por jefe de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GestionComponent_ng_template_24_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237); var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r236.data.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Buscar por nombre de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GestionComponent_ng_template_24_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237); var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r238.data.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_24_Template_button_click_19_listener() { var modal_r234 = ctx.$implicit; return modal_r234.close("Close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Buscar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_24_Template_button_click_21_listener() { var modal_r234 = ctx.$implicit; return modal_r234.close("Close"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("ngModel", ctx_r219.data.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("ngModel", ctx_r219.data.lastName);
} }
function GestionComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Eliminaci\u00F3n de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_26_Template_button_click_3_listener() { var modal_r241 = ctx.$implicit; return modal_r241.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00BFEstas seguro de querer eliminar este proyecto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_26_Template_button_click_11_listener() { var modal_r241 = ctx.$implicit; return modal_r241.dismiss("cancel"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_ng_template_26_Template_button_click_13_listener() { var modal_r241 = ctx.$implicit; return modal_r241.close("Ok"); });
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
        this.projects = [];
        this.dialogResult = "";
        this.data = {
            email: ''
        };
        this.loading = false;
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
            width: '850px',
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
        var selected;
        //recorrer arreglo de proyecto y obtener el proyecto seleccionado.
        //pasar item seleccionado al componente de detalles.
        this.dialog.open(_details_project_details_project_component__WEBPACK_IMPORTED_MODULE_7__["DetailsProjectComponent"], {
            width: '500px',
            data: 'This text is passed into the dialog' //selected
        });
    };
    //Método que actualiza los proyectos.
    GestionComponent.prototype.loadProjects = function () {
        var _this = this;
        this.loading = true;
        this.projectsService.getAll().subscribe(function (projects) {
            _this.projects = projects;
            _this.loading = false;
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
    GestionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GestionComponent, selectors: [["app-gestion"]], decls: 28, vars: 2, consts: [[1, ""], [1, "row"], [1, "breadcrumb", "col-md-9"], ["href", ""], [1, "col-md-3", "text-right"], [1, "btn", "btn-primary", "btn-rounded", 3, "click"], [1, "fas", "fa-cloud"], [1, "btn", "btn-light", "btn-rounded", 2, "margin", "1px", 3, "click"], [1, "datatable-icon-search"], [1, "separator-breadcrumb", "border-top"], ["class", "col-lg-3 col-md-6 col-sm-6", 4, "ngFor", "ngForOf"], ["class", "module-loader", 4, "ngIf"], ["modalBasic", ""], ["modalBasic2", ""], ["deleteConfirmModal", ""], [1, "col-lg-3", "col-md-6", "col-sm-6"], [1, "card", "card-profile-1", "mb-4"], [1, "card-body"], [1, "text-right"], ["href", "javascript:void(0)", "title", "Eliminar proyecto", 1, "pull-right", "text-danger", 3, "click"], [1, "i-Close-Window"], [1, "text-center"], [1, "avatar", "box-shadow-2", "mb-3"], ["src", "./assets/images/faces/6.jpg", "alt", ""], [1, "m-0"], [1, "mt-0"], [1, "card", "mb-4"], [1, "card-body", 2, "background-color", "rgb(245, 246, 252)"], [1, "mb-2", "text-muted"], [1, "mb-1", "text-22", "font-weight-light", 2, "font-size", "12px"], [1, "mb-1"], ["type", "warning", "height", "4px", 3, "value"], [1, "btn", "btn-primary", "btn-rounded", 2, "margin", "3px", 3, "click"], [1, "btn", "btn-danger", "btn-rounded", 2, "margin", "3px", 3, "click"], [1, "module-loader"], [1, "spinner", "spinner-bubble", "spinner-bubble-primary", "mr-3"], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "table"], ["type", "text", "formControlName", "bossname", "ng-model", "data.bossname", "size", "25", "maxlength", "100", "required", ""], ["type", "text", "formControlName", "proyectoname", "ng-model", "dala.proyectoname", "size", "25", "maxlength", "100", "required", ""], ["type", "text", "formControlName", "email", "ng-model", "email.text", "size", "25", "maxlength", "100", "required", ""], ["type", "password", "formControlName", "password", "ng-model", "email.text", "size", "25", "maxlength", "100", "required", ""], ["type", "text", "formControlName", "rut", "ng-model", "email.text", "size", "25", "maxlength", "100", "required", ""], [4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", "btn-rounded", 3, "click"], [2, "color", "red"], [1, "form-group"], [1, "form-group", "col-md-12", "mb-3"], ["for", "firstName"], ["type", "text", "id", "firstName", "name", "firstName", "placeholder", "Thomas Taylor", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "placeholder", "P\u00E1gina web aprodes", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded", 3, "click"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-rounded", 3, "click"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-wide", "btn-danger", "btn-rounded", 3, "click"]], template: function GestionComponent_Template(rf, ctx) { if (rf & 1) {
            var _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GestionComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245); var _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); return ctx.open(_r218); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Buscar proyecto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, GestionComponent_div_20_Template, 25, 3, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, GestionComponent_div_21_Template, 2, 0, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GestionComponent_ng_template_22_Template, 39, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, GestionComponent_ng_template_24_Template, 23, 4, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, GestionComponent_ng_template_26_Template, 15, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9nZXN0aW9uL2dlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });
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

/***/ "./src/app/views/proyectos/project/project.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/proyectos/project/project.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/echart-styles */ "./src/app/shared/echart-styles.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/data-layer.service */ "./src/app/shared/services/data-layer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm5/ngx-echarts.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm5/swimlane-ngx-datatable.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};












function ProjectComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Requerimientos de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "50%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngb-progressbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h6", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Requerimientos de sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "50%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ngb-progressbar", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Equipo de trabajo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Jefe de proyecto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Jesus Moris.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " + Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Scrum Master");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Jesus Moris.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " + Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Programador + Arquitecto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Jesus Moris.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " + Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Dise\u00F1ador ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Jesus Moris.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " + Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h6", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Tester ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Jesus Moris.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " + Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Casos de prueba");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r247.chartPie1)("autoResize", true);
} }
function ProjectComponent_ng_template_18_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Codigo ");
} }
function ProjectComponent_ng_template_18_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    var value_r262 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", value_r262, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_ng_template_18_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Descripci\u00F3n ");
} }
function ProjectComponent_ng_template_18_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Categoria ");
} }
function ProjectComponent_ng_template_18_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Estatus ");
} }
function ProjectComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Finalizados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Requerimiento de Usuario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_ng_template_18_Template_button_click_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265); var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29); return ctx_r264.addUserRequeriment(_r251, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-datatable", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngx-datatable-column", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProjectComponent_ng_template_18_ng_template_39_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProjectComponent_ng_template_18_ng_template_40_Template, 1, 1, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable-column", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProjectComponent_ng_template_18_ng_template_42_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ngx-datatable-column", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProjectComponent_ng_template_18_ng_template_44_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngx-datatable-column", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProjectComponent_ng_template_18_ng_template_46_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("limit", 10)("rows", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 11, ctx_r248.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 600);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
} }
function ProjectComponent_ng_template_22_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Codigo ");
} }
function ProjectComponent_ng_template_22_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    var value_r272 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", value_r272, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_ng_template_22_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Descripci\u00F3n ");
} }
function ProjectComponent_ng_template_22_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Req - Usuario ");
} }
function ProjectComponent_ng_template_22_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Categoria ");
} }
function ProjectComponent_ng_template_22_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Estatus ");
} }
function ProjectComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    var _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Finalizados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pendientes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Requerimiento de Software ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_ng_template_22_Template_button_click_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275); var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx_r274.addSoftwareRequeriment(_r253, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-datatable", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngx-datatable-column", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProjectComponent_ng_template_22_ng_template_39_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProjectComponent_ng_template_22_ng_template_40_Template, 1, 1, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable-column", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProjectComponent_ng_template_22_ng_template_42_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ngx-datatable-column", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProjectComponent_ng_template_22_ng_template_44_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngx-datatable-column", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProjectComponent_ng_template_22_ng_template_46_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ngx-datatable-column", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProjectComponent_ng_template_22_ng_template_48_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("limit", 10)("rows", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 11, ctx_r249.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
} }
function ProjectComponent_ng_template_26_ng_template_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Codigo ");
} }
function ProjectComponent_ng_template_26_ng_template_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 55);
} if (rf & 2) {
    var value_r281 = ctx.value;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", value_r281, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_ng_template_26_ng_template_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Descripcion ");
} }
function ProjectComponent_ng_template_26_ng_template_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Fecha ");
} }
function ProjectComponent_ng_template_26_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Estatus ");
} }
function ProjectComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    var _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Total Realizados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Exitosos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Fracasados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Caso de prueba ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_ng_template_26_Template_button_click_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r284); var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); return ctx_r283.addTestCase(_r255, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ngx-datatable", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ngx-datatable-column", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProjectComponent_ng_template_26_ng_template_39_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProjectComponent_ng_template_26_ng_template_40_Template, 1, 1, "ng-template", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ngx-datatable-column", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProjectComponent_ng_template_26_ng_template_42_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ngx-datatable-column", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ProjectComponent_ng_template_26_ng_template_44_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ngx-datatable-column", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProjectComponent_ng_template_26_ng_template_46_Template, 1, 0, "ng-template", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", 60)("scrollbarV", true)("limit", 10)("rows", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 11, ctx_r250.products$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("maxWidth", 150);
} }
function ProjectComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nuevo requerimiento de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_ng_template_28_Template_button_click_3_listener() { var modal_r285 = ctx.$implicit; return modal_r285.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RU");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Prioridad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Estabilidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Incompleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nuevo requerimiento de Software");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_ng_template_30_Template_button_click_3_listener() { var modal_r287 = ctx.$implicit; return modal_r287.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Prioridad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Estabilidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Option 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Incompleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Costo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Referencia Requerimiento de usuario ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "RU001");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "RU002");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "RU003");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    var _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nuevo caso de prueba ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_ng_template_32_Template_button_click_3_listener() { var modal_r289 = ctx.$implicit; return modal_r289.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Codigo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TESTECASE-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Incompleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Requerimiento de usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "RU001");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "RU002");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Resultado Aceptable ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Resultado optimo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "textarea", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_ng_template_32_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); var ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r291.imprimir(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(modalService, dl) {
        this.modalService = modalService;
        this.dl = dl;
        this.active = 1;
        this.name = "nombreProyecto";
        this.items = ['Javascript', 'Typescript'];
        this.tagsCtrl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.items);
    }
    ProjectComponent.prototype.onSelect = function (item) {
        console.log('tag selected: value is ' + item);
    };
    ProjectComponent.prototype.ngOnInit = function () {
        this.chartPie1 = __assign(__assign({}, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].defaultOptions), {
            legend: {
                show: true,
                bottom: 0,
            },
            series: [__assign(__assign({ type: 'pie' }, src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieRing), { label: src_app_shared_echart_styles__WEBPACK_IMPORTED_MODULE_1__["echartStyles"].pieLabelCenterHover, data: [{
                            name: 'Exitosos',
                            value: 80,
                            itemStyle: {
                                color: '#663399',
                            }
                        }, {
                            name: 'Fallidos',
                            value: 20,
                            itemStyle: {
                                color: '#ced4da',
                            }
                        }] })]
        });
    };
    ProjectComponent.prototype.addUserRequeriment = function (modal, event) {
        event.target.parentElement.parentElement.blur();
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
    };
    ProjectComponent.prototype.addSoftwareRequeriment = function (modal, event) {
        event.target.parentElement.parentElement.blur();
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
    };
    ProjectComponent.prototype.addTestCase = function (modal, event) {
        event.target.parentElement.parentElement.blur();
        this.modalService.open(modal, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' });
    };
    ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_3__["DataLayerService"])); };
    ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 34, vars: 7, consts: [[1, "breadcrumb"], [1, "separator-breadcrumb", "border-top"], [1, "row"], [1, "col-md-12"], ["ngbNav", "", 1, "nav-tabs", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", 3, "ngbNavOutlet"], ["userRequerimentConfirmModal", ""], ["softwareRequerimentConfirmModal", ""], ["testCaseConfirmModal", ""], [1, "col-lg-12", "col-md-12"], [1, "card", "o-hidden", "mb-4"], [1, "col-md-6"], [1, "card", "mb-4", "mt-4", "ml-4"], [1, "card-body"], [1, "mb-2", "text-muted"], [1, "mb-2", "text-24", "font-weight-light", "text-title"], [1, "mb-1"], ["type", "success", "height", "10px", 3, "value"], [1, "card", "mb-4", "mt-4", "mr-4"], [1, "col-lg-6", "col-md-12"], [1, "card", "mb-4", "ml-4"], [1, "card-title"], [1, "d-flex", "align-items-center", "border-bottom-dotted-dim", "pb-3", "mb-3"], ["src", "./assets/images/faces/2.jpg", "alt", "", 1, "avatar-md", "rounded", "mr-3"], [1, "flex-grow-1"], [1, "m-0"], [1, "m-0", "text-small", "text-muted"], [1, "btn", "btn-outline-primary", "btn-rounded", "btn-sm"], [1, "col-lg-6", "col-sm-12"], [1, "card", "mb-4", "mr-4"], ["echarts", "", 2, "height", "200px", 3, "options", "autoResize"], [1, "col-md-2"], [1, "card", "o-hidden", "mb-4", "mt-4", "ml-4"], [1, "card-body", "text-center"], [1, "content"], [1, "text-primary", "text-40", "line-height-1", "m-0"], [1, "text-success", "text-40", "line-height-1", "m-0"], [1, "text-danger", "text-40", "line-height-1", "m-0"], [1, "card", "o-hidden", "mb-4", "ml-4"], [1, "i-Add-User"], [1, "text-muted", "mt-2", "mb-0"], ["_ngcontent-tkm-c169", "", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], [1, "col-md-10"], [1, "card", "o-hidden", "mb-4", "mt-4", "mr-4"], [1, "material", "fullscreen", 2, "height", "calc(100vh - 270px)", "box-shadow", "none", 3, "columnMode", "headerHeight", "footerHeight", "rowHeight", "scrollbarV", "limit", "rows"], ["name", "photo", 3, "maxWidth"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "name", 3, "width"], ["name", "category", 3, "maxWidth"], ["name", "subtitle", 3, "maxWidth"], ["height", "32px", "width", "32px", "alt", "", 2, "border-radius", "4px", 3, "src"], ["name", "subtitle"], ["name", "name", 3, "maxWidth"], [1, "modal-header"], ["id", "modal-title", 1, "modal-title"], ["type", "button", "aria-label", "Close button", "aria-describedby", "modal-title", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-md-4", "form-group", "mb-0"], ["for", "firstName"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], ["id", "basic-addon3", 1, "input-group-text"], ["type", "number", "id", "basic-url", "aria-describedby", "basic-addon3", 1, "form-control"], [1, "form-control"], [1, "col-md-4", "form-group", "mb-3"], ["type", "number", "id", "firstName", "placeholder", "1", 1, "form-control"], [1, "col-md-12", "form-group", "mb-3"], [1, "input-group"], [1, "input-group-text"], ["aria-label", "With textarea", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-primary", "m-1"], ["type", "button", 1, "btn", "btn-secondary", "m-1"], ["type", "button", 1, "btn", "btn-outline-primary", "m-1", 3, "click"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Proyecto ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function ProjectComponent_Template_ul_activeIdChange_9_listener($event) { return ctx.active = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Avances - Informaci\u00F3n ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProjectComponent_ng_template_14_Template, 85, 4, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Requerimientos de Usuario");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProjectComponent_ng_template_18_Template, 47, 13, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Requerimientos de Software");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProjectComponent_ng_template_22_Template, 49, 13, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Casos de prueba ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ProjectComponent_ng_template_26_Template, 47, 13, "ng-template", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProjectComponent_ng_template_28_Template, 60, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ProjectComponent_ng_template_30_Template, 72, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ProjectComponent_ng_template_32_Template, 50, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavItem", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r246);
        } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbProgressbar"], ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnHeaderDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["DataTableColumnCellDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.form-div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.form-div[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-left: 15px;\n}\n\n.position-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Nb3Jpcy9Eb2N1bWVudHMvU29mdFByb3llY3RBZG1pbl9HMi9mcm9udGVuZC9zcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3Byb3llY3Rvcy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcHJveWVjdG9zL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5mb3JtLWRpdntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gIC5mb3JtLWRpdiA+ICoge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbi5pbnB1dHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnBvc2l0aW9uLWZvcm17XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSIsIi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY29udGFpbmVyID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uZm9ybS1kaXYgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5wb3NpdGlvbi1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */"] });
    return ProjectComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: src_app_shared_services_data_layer_service__WEBPACK_IMPORTED_MODULE_3__["DataLayerService"] }]; }, null); })();


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
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/views/proyectos/project/project.component.ts");






var routes = [
    {
        path: 'gestion',
        component: _gestion_gestion_component__WEBPACK_IMPORTED_MODULE_2__["GestionComponent"]
    },
    {
        path: 'gestion/proyecto',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
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
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./project/project.component */ "./src/app/views/proyectos/project/project.component.ts");
/* harmony import */ var src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/components/form-wizard/form-wizard.module */ "./src/app/shared/components/form-wizard/form-wizard.module.ts");

















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
                src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_15__["FormWizardModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
            ]] });
    return ProyectoModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProyectoModule, { declarations: [_gestion_gestion_component__WEBPACK_IMPORTED_MODULE_10__["GestionComponent"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_11__["AddProjectComponent"], _gestion_details_project_details_project_component__WEBPACK_IMPORTED_MODULE_13__["DetailsProjectComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentsModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _proyectos_routing_module__WEBPACK_IMPORTED_MODULE_9__["ProyectoRoutingModule"],
        ngx_custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomFormsModule"],
        src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_15__["FormWizardModule"],
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
                    src_app_shared_components_form_wizard_form_wizard_module__WEBPACK_IMPORTED_MODULE_15__["FormWizardModule"],
                    ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                ],
                declarations: [_gestion_gestion_component__WEBPACK_IMPORTED_MODULE_10__["GestionComponent"], _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_11__["AddProjectComponent"], _gestion_details_project_details_project_component__WEBPACK_IMPORTED_MODULE_13__["DetailsProjectComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_14__["ProjectComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-proyectos-proyectos-module.js.map