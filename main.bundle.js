webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add-employee/add-employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-employee/add-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-fluid\">\n  <form [formGroup]=\"employeeForm\">\n    <div class=\"form-group\">\n      <label for=\"addInputName\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"addInputName\" formControlName=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Name of Employee...\">\n      <small id=\"nameHelp\" *ngIf=\"!this.employeeForm.controls['name'].valid\" class=\"form-text text-danger\">Name is required</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addInputNumber\">Phone Number</label>\n      <input type=number class=\"form-control\" id=\"addInputNumber\" min=\"1000000000\" max=\"9999999999\" (keyup)=\"checkNumberLength()\" formControlName=\"phone\" aria-describedby=\"phoneHelp\" placeholder=\"Phone Number of Employee...\">\n      <small id=\"phoneHelp\" *ngIf=\"!this.employeeForm.controls['phone'].valid\" class=\"form-text text-danger\">Phone Required.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"addInputEmail\">Email address</label>\n      <input type=\"email\" class=\"form-control\" id=\"addInputEmail\" formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter E-mail...\">\n      <small id=\"emailHelp\" *ngIf=\"!this.employeeForm.controls['email'].valid && this.employeeForm.controls['email'].errors\" class=\"form-text text-danger\">Not a Valid email</small>      \n    </div>\n    <div class=\"form-group\">\n      <label for=\"addInputAddress\">Address</label>\n      <input type=\"text\" class=\"form-control\" id=\"addInputAddress\" formControlName=\"address\" aria-describedby=\"addressHelp\" placeholder=\"Address of Employee...\">\n      <small id=\"addressHelp\" *ngIf=\"!this.employeeForm.controls['address'].valid\" class=\"form-text text-danger\">Address is required</small>      \n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!employeeForm.valid\" (click)=\"submitEmployee()\">Submit</button>\n    <button type=\"submit\" class=\"btn btn-danger\" [routerLink]=\"['']\">Cancel</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add-employee/add-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employee_service__ = __webpack_require__("../../../../../src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(fb, service, route) {
        this.fb = fb;
        this.service = service;
        this.route = route;
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'phone': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].minLength(10)]],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].pattern("^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$")]],
            'address': [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            'id': [Math.floor(Math.random() * 100) + 1]
        });
    };
    AddEmployeeComponent.prototype.submitEmployee = function () {
        var _this = this;
        this.employeeForm.controls['name'];
        this.service.log(this.employeeForm.value);
        this.service.addEmployee(this.employeeForm.value)
            .then(function () {
            _this.route.navigateByUrl('');
        });
    };
    AddEmployeeComponent.prototype.checkNumberLength = function (ip) {
        this.service.log('in ip');
        if (this.employeeForm.controls['phone'].value < 9999999999 && this.employeeForm.controls['phone'].value > 1000000000)
            return true;
        else if (typeof this.employeeForm.controls['phone'].value !== typeof 10) {
            this.employeeForm.controls['phone'].setValue(0);
        }
        else
            this.employeeForm.controls['phone'].setValue(parseInt(this.employeeForm.controls['phone'].value.toString().slice(0, 10)));
    };
    return AddEmployeeComponent;
}());
AddEmployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* Component */])({
        selector: 'app-add-employee',
        template: __webpack_require__("../../../../../src/app/add-employee/add-employee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add-employee/add-employee.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__employee_service__["a" /* EmployeeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddEmployeeComponent);

var _a, _b, _c;
//# sourceMappingURL=add-employee.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12 col-md-12 col-sm-12\">\r\n      <div class=\"jumbotron jumbotron-fluid\">\r\n        <div class=\"container text-align-center\">\r\n          <h3 class=\"display-4\">Srijan's Employee Management</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_employee_add_employee_component__ = __webpack_require__("../../../../../src/app/add-employee/add-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employee_employee_component__ = __webpack_require__("../../../../../src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__employee_service__ = __webpack_require__("../../../../../src/app/employee.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: ' ', component: __WEBPACK_IMPORTED_MODULE_7__employee_employee_component__["a" /* EmployeeComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_6__add_employee_add_employee_component__["a" /* AddEmployeeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__employee_employee_component__["a" /* EmployeeComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__add_employee_add_employee_component__["a" /* AddEmployeeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__employee_employee_component__["a" /* EmployeeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__employee_service__["a" /* EmployeeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeService = (function () {
    function EmployeeService() {
        if (localStorage.getItem('employee')) {
            this.EmployeeMockDB = JSON.parse(localStorage.getItem('employee'));
        }
        else {
            this.EmployeeMockDB = [
                {
                    name: "Christian Mckee",
                    phone: "0638051176",
                    email: "sem.mollis@pharetrased.ca",
                    address: "P.O. Box 686, 3455 Dui, Rd.",
                    id: 28
                },
                {
                    name: "Craig Maynard",
                    phone: "0103328403",
                    email: "non.justo.Proin@sociisnatoque.org",
                    address: "Ap #405-1825 Posuere St.",
                    id: 17
                },
                {
                    name: "Lester Gilliam",
                    phone: "0492571446",
                    email: "lacus@ut.com",
                    address: "P.O. Box 420, 529 Felis Avenue",
                    id: 4
                },
                {
                    name: "Clarke Lawson",
                    phone: "0565589507",
                    email: "porttitor.eros.nec@cursusInteger.edu",
                    address: "8595 Nulla Rd.",
                    id: 94
                },
                {
                    name: "Marvin Roach",
                    phone: "0426719504",
                    email: "lacus.pede@atiaculisquis.edu",
                    address: "5732 Augue Rd.",
                    id: 6
                },
                {
                    name: "Holmes Barnes",
                    phone: "0137215825",
                    email: "libero.mauris.aliquam@enimgravidasit.co.uk",
                    address: "P.O. Box 168, 9498 Adipiscing Road",
                    id: 25
                },
                {
                    name: "Lee Carroll",
                    phone: "0689970649",
                    email: "sem@purusDuis.co.uk",
                    address: "Ap #910-2680 Aliquam, Ave",
                    id: 50
                },
                {
                    name: "Tanner Williamson",
                    phone: "0151888293",
                    email: "dui@temporarcuVestibulum.ca",
                    address: "Ap #204-3482 Ut Av.",
                    id: 85
                },
                {
                    name: "Kamal Farrell",
                    phone: "0579194704",
                    email: "ullamcorper@Nullam.ca",
                    address: "400-1982 Vitae, Rd.",
                    id: 100
                },
                {
                    name: "Jackson Ferguson",
                    phone: "0347926094",
                    email: "neque.tellus@enimcondimentumeget.co.uk",
                    address: "Ap #169-4939 Blandit Ave",
                    id: 20
                }
            ];
        }
    }
    EmployeeService.prototype.getEmployee = function () {
        var _this = this;
        return new Promise(function (resolve) { return resolve(_this.EmployeeMockDB); });
    };
    EmployeeService.prototype.addEmployee = function (employe) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.EmployeeMockDB.push(employe);
            localStorage.setItem('employee', JSON.stringify(_this.EmployeeMockDB));
            _this.log(_this.EmployeeMockDB, 'add');
            resolve(JSON.parse(localStorage.getItem('employee')));
        });
    };
    EmployeeService.prototype.updateEmployee = function (employe) {
        var _this = this;
        return new Promise(function (resolve) {
            var index = _this.EmployeeMockDB.findIndex(function (e) { return e.id == employe.id; });
            _this.EmployeeMockDB[index] = employe;
            localStorage.setItem('employee', JSON.stringify(_this.EmployeeMockDB));
            _this.log(_this.EmployeeMockDB, 'update');
            resolve(JSON.parse(localStorage.getItem('employee')));
        });
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var index = _this.EmployeeMockDB.findIndex(function (key) { return key.id == id; });
            _this.EmployeeMockDB.splice(index, 1);
            localStorage.setItem('employee', JSON.stringify(_this.EmployeeMockDB));
            _this.log(_this.EmployeeMockDB, 'deleted');
            resolve(JSON.parse(localStorage.getItem('employee')));
        });
    };
    EmployeeService.prototype.log = function (data, data2) {
        console.log(data, data2);
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EmployeeService);

//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .margin-bottom{\r\n      margin-bottom: 1em;\r\n  }\r\n  table{\r\n    background: aliceblue;\r\n  }\r\n  \r\n  .align-right{\r\n    text-align: right;\r\n    padding-bottom: 3%;\r\n    padding-right: 2%;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"align-right\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" [routerLink]=\"['add']\">Add</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <table class=\"table pad-5 table-hover table-responsive\">\n      <thead class=\"thead-inverse\">\n        <tr>\n          <th>#</th>\n          <th>Employee Name</th>\n          <th>Phone no.</th>\n          <th>E-mail</th>\n          <th>Address</th>\n          <th>Edit</th>\n          <th>Delete</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let emp of employees\">\n          <th scope=\"row\">{{emp.id}}</th>\n          <td>{{emp.name}}</td>\n          <td>{{emp.phone}}</td>\n          <td>{{emp.email}}</td>\n          <td>{{emp.address}}</td>\n          <td><button type=\"button\" class=\"btn btn-outline-primary\" data-toggle=\"modal\" data-target=\"#updateModal\" (click)=\"this.employeeForm.setValue(emp);\">Edit</button></td>\n          <td><button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"this.employeeForm.setValue(emp);\">Delete</button></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n  \n<!-- Modal for update -->\n<div class=\"modal fade\" id=\"updateModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"updateModalLabel\">Update Employee</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"employeeForm\">\n          <div class=\"form-group\">\n            <label for=\"updateInputName\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"updateInputName\" formControlName=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Name of Employee...\">\n            <small id=\"nameHelp\" *ngIf=\"!this.employeeForm.controls['name'].valid\" class=\"form-text text-danger\">Name is required</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"updateInputNumber\">Phone Number</label>\n            <input type=\"number\" class=\"form-control\" id=\"updateInputNumber\" min=\"1000000000\" max=\"9999999999\" (keyup)=\"checkNumberLength()\"\n              formControlName=\"phone\" aria-describedby=\"phoneHelp\" placeholder=\"Phone Number of Employee...\">\n            <small id=\"phoneHelp\" *ngIf=\"!this.employeeForm.controls['phone'].valid\" class=\"form-text text-danger\">Phone Required.</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"updateInputEmail\">Email address</label>\n            <input type=\"email\" class=\"form-control\" id=\"updateInputEmail\" formControlName=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter E-mail...\">\n            <small id=\"emailHelp\" *ngIf=\"!this.employeeForm.controls['email'].valid && this.employeeForm.controls['email'].errors\" class=\"form-text text-danger\">Not a Valid email</small>      \n          </div>\n          <div class=\"form-group\">\n            <label for=\"updateInputAddress\">Address</label>\n            <input type=\"text\" class=\"form-control\" id=\"updateInputAddress\" formControlName=\"address\" aria-describedby=\"addressHelp\"\n              placeholder=\"Address of Employee...\">\n            <small id=\"addressHelp\" *ngIf=\"!this.employeeForm.controls['address'].valid\" class=\"form-text text-danger\">Address is required</small>\n          </div>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"!employeeForm.valid && employeeForm.dirty\" (click)=\"updateEmployee();\" data-dismiss=\"modal\">Update</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Modal for delete conformation -->\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"deleteModalLabel\">Conform Delete?</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">     \n          <p>Are You Sure you want to delete <strong>{{this.employeeForm.controls['name'].value}}</strong>?</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"delete(emp)\" data-dismiss=\"modal\">Delete it</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_service__ = __webpack_require__("../../../../../src/app/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = (function () {
    function EmployeeComponent(service, route, fb) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.fb = fb;
        this.employees = [];
        this.service.getEmployee()
            .then(function (res) {
            _this.employees = res;
        });
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.employeeForm = this.fb.group({
            'name': [null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'phone': [null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].minLength(10)]],
            'email': [null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'address': [null, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'id': [Math.floor(Math.random() * 100) + 1]
        });
    };
    EmployeeComponent.prototype.delete = function () {
        var _this = this;
        this.service.deleteEmployee(this.employeeForm.controls['id'].value)
            .then(function (e) {
            _this.service.log(e, 'delete');
            _this.employees = e;
            _this.employeeForm.reset();
        });
    };
    EmployeeComponent.prototype.checkNumberLength = function (ip) {
        this.service.log('in ip');
        if (this.employeeForm.controls['phone'].value < 9999999999 && this.employeeForm.controls['phone'].value > 1000000000)
            return true;
        else if (typeof this.employeeForm.controls['phone'].value !== typeof 10) {
            this.employeeForm.controls['phone'].setValue(null);
        }
        else
            this.employeeForm.controls['phone'].setValue(parseInt(this.employeeForm.controls['phone'].value.toString().slice(0, 10)));
    };
    EmployeeComponent.prototype.updateEmployee = function () {
        var _this = this;
        this.service.updateEmployee(this.employeeForm.value)
            .then(function (e) {
            _this.service.log(e, 'update');
            _this.employees = e;
            _this.employeeForm.reset();
        });
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* Component */])({
        selector: 'app-employee',
        template: __webpack_require__("../../../../../src/app/employee/employee.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employee/employee.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__employee_service__["a" /* EmployeeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__employee_service__["a" /* EmployeeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], EmployeeComponent);

var _a, _b, _c;
//# sourceMappingURL=employee.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map