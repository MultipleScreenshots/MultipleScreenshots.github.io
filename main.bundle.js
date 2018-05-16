webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".screenshots-container {\r\n    min-height: 200px;\r\n    border: 1px solid #aaa;\r\n    padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<full-screen-image *ngIf = \"openImage\" [imageData] = \"openedImageData\"></full-screen-image>\n<div class = \"screenshots-container\" (paste) = onPaste($event)>\n    <screenshot-container *ngFor = \"let imageData of imagesData\"\n                          [imageData] = \"imageData\"></screenshot-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__ = __webpack_require__("../../../../../src/app/services/pubSub.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(psService) {
        var _this = this;
        this.psService = psService;
        this.imagesData = [];
        this.imageIndex = 0;
        this.reader = new FileReader();
        this.openImage = false;
        psService.openFullImage.subscribe(function (imageData) { return (_this.openImage = true, _this.openedImageData = imageData); });
        psService.closeFullImage.subscribe(function (imagesData) { return _this.openImage = false; });
        this.reader.onloadend = function () { return _this.imagesData.unshift({ index: _this.imageIndex++, dataBase64: _this.reader.result }); };
    }
    AppComponent.prototype.onPaste = function (e) {
        var pastingItem = e.clipboardData.items[0];
        if (pastingItem.type === 'image/png') {
            this.reader.readAsDataURL(pastingItem.getAsFile());
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__["a" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__["a" /* PubSubService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__screenshot_container_screenshot_container_component__ = __webpack_require__("../../../../../src/app/components/screenshot-container/screenshot-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__full_screen_image_full_screen_image_component__ = __webpack_require__("../../../../../src/app/components/full-screen-image/full-screen-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_pubSub_service__ = __webpack_require__("../../../../../src/app/services/pubSub.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_ng_for_of_numbers_pipe__ = __webpack_require__("../../../../../src/app/pipes/ng-for-of-numbers.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// COMPONENTS



// Services

// PIPES

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__screenshot_container_screenshot_container_component__["a" /* ScreenshotContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_4__full_screen_image_full_screen_image_component__["a" /* FullScreenImageComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_ng_for_of_numbers_pipe__["a" /* ForOfNumberPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_pubSub_service__["a" /* PubSubService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/full-screen-image/full-screen-image.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-image-container,\r\n.full-image-background,\r\n.full-image {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n.full-image-container {\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n    z-index: 10;\r\n}\r\n.full-image-background {\r\n    background-color: rgba(0, 0, 50, 0.75);\r\n    z-index: 900;\r\n}\r\n.full-image {\r\n    z-index: 1000;\r\n    background-size: cover;\r\n    margin: auto;\r\n}\r\n.close-button {\r\n    display: block;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n    z-index: 1100;\r\n    position: absolute;\r\n    right: 0;\r\n    font-size: 50px;\r\n    color: rgba(212, 212, 212, 0.1);\r\n}\r\n.close-button:hover {\r\n    color: rgba(212, 212, 212, 0.8)\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/full-screen-image/full-screen-image.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"full-image-container\">\r\n    <span class = \"fa fa-close close-button\" (click) = close()></span>\r\n    <div class = \"full-image-background\"></div>\r\n    <div #fullImage class = \"full-image\" [style.background-image] = \"'url(' + imageData.dataBase64 + ')'\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/full-screen-image/full-screen-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__ = __webpack_require__("../../../../../src/app/services/pubSub.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullScreenImageComponent = (function () {
    function FullScreenImageComponent(psService, renderer) {
        this.psService = psService;
        this.renderer = renderer;
    }
    FullScreenImageComponent.prototype.ngOnInit = function () {
        var img = new Image();
        img.src = this.imageData.dataBase64;
        if (img.width > img.height) {
            this.scaleCoef = img.height / img.width;
            this.renderer.setStyle(this.fi.nativeElement, 'width', screen.availWidth * 0.8 + "px");
            this.renderer.setStyle(this.fi.nativeElement, 'height', screen.availWidth * 0.8 * this.scaleCoef + "px");
        }
        else {
            this.scaleCoef = img.width / img.height;
            this.renderer.setStyle(this.fi.nativeElement, 'height', screen.availHeight * 0.8 + "px");
            this.renderer.setStyle(this.fi.nativeElement, 'width', screen.availHeight * 0.8 * this.scaleCoef + "px");
        }
    };
    FullScreenImageComponent.prototype.close = function () {
        this.psService.closeFullImage.emit();
    };
    return FullScreenImageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('fullImage'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]) === "function" && _a || Object)
], FullScreenImageComponent.prototype, "fi", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], FullScreenImageComponent.prototype, "imageData", void 0);
FullScreenImageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'full-screen-image',
        template: __webpack_require__("../../../../../src/app/components/full-screen-image/full-screen-image.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/full-screen-image/full-screen-image.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__["a" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__["a" /* PubSubService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Renderer2 */]) === "function" && _c || Object])
], FullScreenImageComponent);

var _a, _b, _c;
//# sourceMappingURL=full-screen-image.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/screenshot-container/screenshot-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-container {\r\n    border: solid 1px #aaa;\r\n    min-height: 200px;\r\n    width: 23%;\r\n    cursor: pointer;\r\n    position: relative;\r\n    margin: 10px;\r\n    display: inline-block;\r\n}\r\n.image-container:hover {\r\n    box-shadow: 0px 0px 10px 10px rgba(0, 238, 255, 0.5);\r\n}\r\n.image {\r\n    background-size: cover;\r\n    position: absolute;\r\n    min-width: 100%;\r\n    min-height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/screenshot-container/screenshot-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"image-container\">\r\n    <div class = \"image\"\r\n         [style.background-image] = \"'url(' + imageData.dataBase64 + ')'\"\r\n         (click) = openImage()>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/screenshot-container/screenshot-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenshotContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__ = __webpack_require__("../../../../../src/app/services/pubSub.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScreenshotContainerComponent = (function () {
    function ScreenshotContainerComponent(psService) {
        this.psService = psService;
    }
    ScreenshotContainerComponent.prototype.openImage = function () {
        this.psService.openFullImage.emit(this.imageData);
    };
    return ScreenshotContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], ScreenshotContainerComponent.prototype, "imageData", void 0);
ScreenshotContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'screenshot-container',
        template: __webpack_require__("../../../../../src/app/components/screenshot-container/screenshot-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/screenshot-container/screenshot-container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__["a" /* PubSubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_pubSub_service__["a" /* PubSubService */]) === "function" && _a || Object])
], ScreenshotContainerComponent);

var _a;
//# sourceMappingURL=screenshot-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/ng-for-of-numbers.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForOfNumberPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForOfNumberPipe = (function () {
    function ForOfNumberPipe() {
    }
    ForOfNumberPipe.prototype.transform = function (value) {
        var res = [];
        for (var i = 0; i < value; i++) {
            res.push(i);
        }
        return res;
    };
    return ForOfNumberPipe;
}());
ForOfNumberPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'forOfNumbers',
        pure: false
    })
], ForOfNumberPipe);

//# sourceMappingURL=ng-for-of-numbers.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/pubSub.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PubSubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PubSubService = (function () {
    function PubSubService() {
        this.openFullImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.closeFullImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    return PubSubService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PubSubService.prototype, "openFullImage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
    __metadata("design:type", Object)
], PubSubService.prototype, "closeFullImage", void 0);
PubSubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], PubSubService);

//# sourceMappingURL=pubSub.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_components_app_module__ = __webpack_require__("../../../../../src/app/components/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_components_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map