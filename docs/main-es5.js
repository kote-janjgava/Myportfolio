function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./resumen/resumen.component */
    "./src/app/resumen/resumen.component.ts");
    /* harmony import */


    var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./portafolio/portafolio.component */
    "./src/app/portafolio/portafolio.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contacto/contacto.component */
    "./src/app/contacto/contacto.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'abastidasCV';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 85,
      vars: 0,
      consts: [[1, "preloader"], [1, "anim", "pulse"], [1, "ion-ios-bolt-outline"], [1, "preloader-left"], [1, "inline-menu-container"], [1, "status"], [1, "inline-menu"], [1, "about", "menu-item"], [1, "portfolio", "menu-item"], [1, "blog", "menu-item"], [1, "contact", "menu-item"], ["id", "close", 1, "menu-item"], [1, "ion-ios-close-empty"], [1, "home"], [1, "bgScroll"], [1, "overlay", "opacity7"], [1, "container"], [1, "name-block"], [1, "name-block-container"], ["href", "assets/cv.pdf", "download", "cv", 1, "btn", "btn-download"], [1, "social"], ["href", "", "target_", "_blank"], [1, "ion-social-facebook"], ["href", "https://www.linkedin.com/in/konstantine-janjgava-285064121/", "target_", "_blank"], [1, "ion-social-linkedin"], ["href", ""], ["target_", "_blank", 1, "ion-social-github"], [1, "ion-social-youtube"], [1, "menu-blocks"], [1, "about-block", "menu-block"], [1, "about-block-container"], [1, "portfolio-block", "menu-block"], [1, "portfolio-block-container"], [1, "blog-block", "menu-block"], [1, "blog-block-container"], [1, "contact-block", "menu-block"], [1, "contact-block-container"], [1, "content-blocks", "about"], [1, "content-blocks", "portfolio"], [1, "content-blocks", "blog"], [1, "content-blocks", "contact"], [1, "content-blocks", "pop"], ["id", "close-pop", 1, "close-pop"], [1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I am available");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hello, I'm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Konstantine");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Janjgava");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "FrontEnd Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Download CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ul", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-resumen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-portafolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "app-contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " close ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "section", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "kotekote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_resumen_resumen_component__WEBPACK_IMPORTED_MODULE_1__["ResumenComponent"], _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_2__["PortafolioComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_4__["ContactoComponent"]],
      styles: ["h1[_ngcontent-%COMP%]{\r\n  color: wheat;\r\n  font-size: 50px;\r\n  font-weight: bold;\r\n  font-family: monospace;\r\n  letter-spacing: 7px;\r\n  cursor: pointer\r\n}\r\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  transition: .5s linear\r\n}\r\nh1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1){\r\n  margin-right: 5px\r\n}\r\nh1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1):after{\r\n  content: \"\";\r\n}\r\nh1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2){\r\n  margin-left: 30px\r\n}\r\nh1[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  text-shadow: 0 0 10px #fff,\r\n               0 0 20px #fff,\r\n               0 0 40px #fff;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  color: #16b8f3;\r\n  font-size: 30px;\r\n  font-weight: bold;\r\n  font-family: monospace;\r\n  letter-spacing: 7px;\r\n  cursor: pointer\r\n}\r\nh3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n  transition: .5s linear\r\n}\r\nh3[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1){\r\n  margin-right: 5px\r\n}\r\nh3[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1):after{\r\n  content: \"\";\r\n}\r\nh3[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2){\r\n  margin-left: 30px\r\n}\r\nh3[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  text-shadow: 0 0 10px #fff,\r\n               0 0 20px #fff,\r\n               0 0 40px #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUMsaUJBQWlCO0FBQ2xCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWDs7NEJBRTBCO0FBQzVCO0FBR0Esa0JBQWtCO0FBRWxCO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQjtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRTtBQUNGO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWDs7NEJBRTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLyogaDEgYW5pbWF0aW9uICovXHJcbmgxe1xyXG4gIGNvbG9yOiB3aGVhdDtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBsZXR0ZXItc3BhY2luZzogN3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlclxyXG59XHJcbmgxIHNwYW57XHJcbiAgdHJhbnNpdGlvbjogLjVzIGxpbmVhclxyXG59XHJcbmgxOmhvdmVyIHNwYW46bnRoLWNoaWxkKDEpe1xyXG4gIG1hcmdpbi1yaWdodDogNXB4XHJcbn1cclxuaDE6aG92ZXIgc3BhbjpudGgtY2hpbGQoMSk6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG5oMTpob3ZlciBzcGFuOm50aC1jaGlsZCgyKXtcclxuICBtYXJnaW4tbGVmdDogMzBweFxyXG59XHJcbmgxOmhvdmVyIHNwYW57XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgIDAgMCAyMHB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgIDAgMCA0MHB4ICNmZmY7XHJcbn1cclxuXHJcblxyXG4vKiBoMiBhbmltYXRpb24gICovXHJcblxyXG5oM3tcclxuICBjb2xvcjogIzE2YjhmMztcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICBsZXR0ZXItc3BhY2luZzogN3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlclxyXG59XHJcbmgzIHNwYW57XHJcbiAgdHJhbnNpdGlvbjogLjVzIGxpbmVhclxyXG59XHJcbmgzOmhvdmVyIHNwYW46bnRoLWNoaWxkKDEpe1xyXG4gIG1hcmdpbi1yaWdodDogNXB4XHJcbn1cclxuaDM6aG92ZXIgc3BhbjpudGgtY2hpbGQoMSk6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG5oMzpob3ZlciBzcGFuOm50aC1jaGlsZCgyKXtcclxuICBtYXJnaW4tbGVmdDogMzBweFxyXG59XHJcbmgzOmhvdmVyIHNwYW57XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCAxMHB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgIDAgMCAyMHB4ICNmZmYsXHJcbiAgICAgICAgICAgICAgIDAgMCA0MHB4ICNmZmY7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resumen/resumen.component */
    "./src/app/resumen/resumen.component.ts");
    /* harmony import */


    var _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./portafolio/portafolio.component */
    "./src/app/portafolio/portafolio.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contacto/contacto.component */
    "./src/app/contacto/contacto.component.ts");
    /* harmony import */


    var _myprojects_project1_project1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./myprojects/project1/project1.component */
    "./src/app/myprojects/project1/project1.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__["ResumenComponent"], _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_5__["PortafolioComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"], _myprojects_project1_project1_component__WEBPACK_IMPORTED_MODULE_8__["Project1Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _resumen_resumen_component__WEBPACK_IMPORTED_MODULE_4__["ResumenComponent"], _portafolio_portafolio_component__WEBPACK_IMPORTED_MODULE_5__["PortafolioComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], _contacto_contacto_component__WEBPACK_IMPORTED_MODULE_7__["ContactoComponent"], _myprojects_project1_project1_component__WEBPACK_IMPORTED_MODULE_8__["Project1Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          function random(number) {
            return Math.floor(Math.random() * number);
          }

          function bgChange() {
            var rndCol = "rgb(".concat(random(255), ", ").concat(random(255), ", ").concat(random(255), ")");
            return rndCol;
          }

          var container = document.querySelector('#container'); // container.addEventListener(
          //   'mouseover',
          //   (event) => (event.target.style.backgroundColor = bgChange())
          // );
        }
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 36,
      vars: 0,
      consts: [[1, "content"], [1, "block-content"], [1, "block-title"], [1, "words", "word-1"], [1, "words", "word-2"], [1, "words", "word-3"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Work in Progress . . .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "W");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\n  background-color: #FEF4AD;\n  -webkit-animation: change-background 3s infinite linear;\n          animation: change-background 3s infinite linear;\n  font-family: \"Archivo Black\", sans-serif;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 70%;\n  transform: scale(1.5, 1.5) translate(-50%, -50%);\n}\n\n.floor[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 350px;\n  height: 5px;\n  background: #673C63;\n  transform: translate(-50%, -50%);\n  box-shadow: 0px 2px 5px #111;\n  z-index: 2;\n}\n\n.candles[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 250px;\n  height: 150px;\n  transform: translate(-50%, -100%);\n  z-index: 1;\n}\n\n.candle1[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  width: 35px;\n  height: 100px;\n  background: #fff;\n  border: 3px solid #673C63;\n  border-bottom: 0px;\n  border-radius: 3px;\n  transform-origin: center right;\n  transform: translate(60%, -25%);\n  box-shadow: -2px 0px 0px #95c6f2 inset;\n  -webkit-animation: expand-body 3s infinite linear;\n          animation: expand-body 3s infinite linear;\n}\n\n.candle1__stick[_ngcontent-%COMP%], .candle2__stick[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0%;\n  width: 3px;\n  height: 15px;\n  background: #673C63;\n  border-radius: 8px;\n  transform: translate(-50%, -100%);\n}\n\n.candle2__stick[_ngcontent-%COMP%] {\n  height: 12px;\n  transform-origin: bottom center;\n  -webkit-animation: stick-animation 3s infinite linear;\n          animation: stick-animation 3s infinite linear;\n}\n\n.candle1__eyes[_ngcontent-%COMP%], .candle2__eyes[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 0%;\n  width: 35px;\n  height: 30px;\n  transform: translate(-50%, 0%);\n}\n\n.candle1__eyes-one[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30%;\n  top: 20%;\n  width: 5px;\n  height: 5px;\n  border-radius: 100%;\n  background: #673C63;\n  transform: translate(-70%, 0%);\n  -webkit-animation: blink-eyes 3s infinite linear;\n          animation: blink-eyes 3s infinite linear;\n}\n\n.candle1__eyes-two[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70%;\n  top: 20%;\n  width: 5px;\n  height: 5px;\n  border-radius: 100%;\n  background: #673C63;\n  transform: translate(-70%, 0%);\n  -webkit-animation: blink-eyes 3s infinite linear;\n          animation: blink-eyes 3s infinite linear;\n}\n\n.candle1__mouth[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 40%;\n  top: 20%;\n  width: 0px;\n  height: 0px;\n  border-radius: 20px;\n  background: #673C63;\n  transform: translate(-50%, -50%);\n  -webkit-animation: uff 3s infinite linear;\n          animation: uff 3s infinite linear;\n}\n\n.candle__smoke-one[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30%;\n  top: 50%;\n  width: 30px;\n  height: 3px;\n  background: grey;\n  transform: translate(-50%, -50%);\n  -webkit-animation: move-left 3s infinite linear;\n          animation: move-left 3s infinite linear;\n}\n\n.candle__smoke-two[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30%;\n  top: 40%;\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  background: grey;\n  transform: translate(-50%, -50%);\n  -webkit-animation: move-top 3s infinite linear;\n          animation: move-top 3s infinite linear;\n}\n\n.candle2[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20%;\n  top: 65%;\n  width: 42px;\n  height: 60px;\n  background: #fff;\n  border: 3px solid #673C63;\n  border-bottom: 0px;\n  border-radius: 3px;\n  transform: translate(60%, -15%);\n  transform-origin: center right;\n  box-shadow: -2px 0px 0px #95c6f2 inset;\n  -webkit-animation: shake-left 3s infinite linear;\n          animation: shake-left 3s infinite linear;\n}\n\n.candle2__eyes-one[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 30%;\n  top: 50%;\n  width: 5px;\n  height: 5px;\n  display: inline-block;\n  border: 0px solid #673C63;\n  border-radius: 100%;\n  float: left;\n  background: #673C63;\n  transform: translate(-80%, 0%);\n  -webkit-animation: changeto-lower 3s infinite linear;\n          animation: changeto-lower 3s infinite linear;\n}\n\n.candle2__eyes-two[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 70%;\n  top: 50%;\n  width: 5px;\n  height: 5px;\n  display: inline-block;\n  border: 0px solid #673C63;\n  border-radius: 100%;\n  float: left;\n  background: #673C63;\n  transform: translate(-80%, 0%);\n  -webkit-animation: changeto-greater 3s infinite linear;\n          animation: changeto-greater 3s infinite linear;\n}\n\n.light__wave[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35%;\n  left: 35%;\n  width: 75px;\n  height: 75px;\n  border-radius: 100%;\n  z-index: 0;\n  transform: translate(-25%, -50%) scale(2.5, 2.5);\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  -webkit-animation: expand-light 3s infinite linear;\n          animation: expand-light 3s infinite linear;\n}\n\n.candle2__fire[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 40%;\n  display: block;\n  width: 16px;\n  height: 20px;\n  background-color: red;\n  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;\n  background: #FF9800;\n  transform: translate(-50%, -50%);\n  -webkit-animation: dance-fire 3s infinite linear;\n          animation: dance-fire 3s infinite linear;\n}\n\n@-webkit-keyframes blink-eyes {\n  0%, 35% {\n    opacity: 1;\n    transform: translate(-70%, 0%);\n  }\n  36%, 39% {\n    opacity: 0;\n    transform: translate(-70%, 0%);\n  }\n  40% {\n    opacity: 1;\n    transform: translate(-70%, 0%);\n  }\n  50%, 65% {\n    transform: translate(-140%, 0%);\n  }\n  66% {\n    transform: translate(-70%, 0%);\n  }\n}\n\n@keyframes blink-eyes {\n  0%, 35% {\n    opacity: 1;\n    transform: translate(-70%, 0%);\n  }\n  36%, 39% {\n    opacity: 0;\n    transform: translate(-70%, 0%);\n  }\n  40% {\n    opacity: 1;\n    transform: translate(-70%, 0%);\n  }\n  50%, 65% {\n    transform: translate(-140%, 0%);\n  }\n  66% {\n    transform: translate(-70%, 0%);\n  }\n}\n\n@-webkit-keyframes expand-body {\n  0%, 40% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n  45%, 55% {\n    transform: scale(1.1, 1.1) translate(60%, -28%);\n  }\n  60% {\n    transform: scale(0.89, 0.89) translate(60%, -25%);\n  }\n  65% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n  70% {\n    transform: scale(0.95, 0.95) translate(60%, -25%);\n  }\n  75% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n}\n\n@keyframes expand-body {\n  0%, 40% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n  45%, 55% {\n    transform: scale(1.1, 1.1) translate(60%, -28%);\n  }\n  60% {\n    transform: scale(0.89, 0.89) translate(60%, -25%);\n  }\n  65% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n  70% {\n    transform: scale(0.95, 0.95) translate(60%, -25%);\n  }\n  75% {\n    transform: scale(1, 1) translate(60%, -25%);\n  }\n}\n\n@-webkit-keyframes uff {\n  0%, 40% {\n    width: 0px;\n    height: 0px;\n  }\n  50%, 54% {\n    width: 15px;\n    height: 15px;\n    left: 30%;\n  }\n  59% {\n    width: 5px;\n    height: 5px;\n    left: 20%;\n  }\n  62% {\n    width: 2px;\n    height: 2px;\n    left: 20%;\n  }\n  67% {\n    width: 0px;\n    height: 0px;\n    left: 30%;\n  }\n}\n\n@keyframes uff {\n  0%, 40% {\n    width: 0px;\n    height: 0px;\n  }\n  50%, 54% {\n    width: 15px;\n    height: 15px;\n    left: 30%;\n  }\n  59% {\n    width: 5px;\n    height: 5px;\n    left: 20%;\n  }\n  62% {\n    width: 2px;\n    height: 2px;\n    left: 20%;\n  }\n  67% {\n    width: 0px;\n    height: 0px;\n    left: 30%;\n  }\n}\n\n@-webkit-keyframes change-background {\n  0%, 59%, 98%, 100% {\n    background: #FEF4AD;\n  }\n  61%, 97% {\n    background: #F8AE39;\n  }\n}\n\n@keyframes change-background {\n  0%, 59%, 98%, 100% {\n    background: #FEF4AD;\n  }\n  61%, 97% {\n    background: #F8AE39;\n  }\n}\n\n@-webkit-keyframes move-left {\n  0%, 59%, 100% {\n    width: 0px;\n    left: 40%;\n  }\n  60% {\n    width: 30px;\n    left: 30%;\n  }\n  68% {\n    width: 0px;\n    left: 20%;\n  }\n}\n\n@keyframes move-left {\n  0%, 59%, 100% {\n    width: 0px;\n    left: 40%;\n  }\n  60% {\n    width: 30px;\n    left: 30%;\n  }\n  68% {\n    width: 0px;\n    left: 20%;\n  }\n}\n\n@-webkit-keyframes move-top {\n  0%, 64%, 100% {\n    width: 0px;\n    height: 0px;\n    top: 0%;\n  }\n  65% {\n    width: 10px;\n    height: 10px;\n    top: 40%;\n    left: 40%;\n  }\n  80% {\n    width: 0px;\n    height: 0px;\n    top: 20%;\n  }\n}\n\n@keyframes move-top {\n  0%, 64%, 100% {\n    width: 0px;\n    height: 0px;\n    top: 0%;\n  }\n  65% {\n    width: 10px;\n    height: 10px;\n    top: 40%;\n    left: 40%;\n  }\n  80% {\n    width: 0px;\n    height: 0px;\n    top: 20%;\n  }\n}\n\n@-webkit-keyframes shake-left {\n  0%, 40% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  50%, 54% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  59% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  62% {\n    left: 18%;\n    transform: translate(60%, -15%);\n  }\n  65% {\n    left: 21%;\n    transform: translate(60%, -15%);\n  }\n  67% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  75% {\n    left: 20%;\n    transform: scale(1.15, 0.85) translate(60%, -15%);\n    background: #fff;\n    border-color: #673C63;\n  }\n  91% {\n    left: 20%;\n    transform: scale(1.18, 0.82) translate(60%, -10%);\n    background: #F44336;\n    border-color: #F44336;\n    box-shadow: -2px 0px 0px #F44336 inset;\n  }\n  92% {\n    left: 20%;\n    transform: scale(0.85, 1.15) translate(60%, -15%);\n  }\n  95% {\n    left: 20%;\n    transform: scale(1.05, 0.95) translate(60%, -15%);\n  }\n  97% {\n    left: 20%;\n    transform: scale(1, 1) translate(60%, -15%);\n  }\n}\n\n@keyframes shake-left {\n  0%, 40% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  50%, 54% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  59% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  62% {\n    left: 18%;\n    transform: translate(60%, -15%);\n  }\n  65% {\n    left: 21%;\n    transform: translate(60%, -15%);\n  }\n  67% {\n    left: 20%;\n    transform: translate(60%, -15%);\n  }\n  75% {\n    left: 20%;\n    transform: scale(1.15, 0.85) translate(60%, -15%);\n    background: #fff;\n    border-color: #673C63;\n  }\n  91% {\n    left: 20%;\n    transform: scale(1.18, 0.82) translate(60%, -10%);\n    background: #F44336;\n    border-color: #F44336;\n    box-shadow: -2px 0px 0px #F44336 inset;\n  }\n  92% {\n    left: 20%;\n    transform: scale(0.85, 1.15) translate(60%, -15%);\n  }\n  95% {\n    left: 20%;\n    transform: scale(1.05, 0.95) translate(60%, -15%);\n  }\n  97% {\n    left: 20%;\n    transform: scale(1, 1) translate(60%, -15%);\n  }\n}\n\n@-webkit-keyframes stick-animation {\n  0%, 40% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  50%, 54% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  59% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  62% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(-15deg) translate(-50%, -100%);\n  }\n  65% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(15deg) translate(-50%, -100%);\n  }\n  70% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(-5deg) translate(-50%, -100%);\n  }\n  72% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(5deg) translate(-50%, -100%);\n  }\n  74%, 84% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(0deg) translate(-50%, -100%);\n  }\n  85% {\n    transform: rotateZ(180deg) translate(0%, 120%);\n  }\n  92% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n}\n\n@keyframes stick-animation {\n  0%, 40% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  50%, 54% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  59% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n  62% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(-15deg) translate(-50%, -100%);\n  }\n  65% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(15deg) translate(-50%, -100%);\n  }\n  70% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(-5deg) translate(-50%, -100%);\n  }\n  72% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(5deg) translate(-50%, -100%);\n  }\n  74%, 84% {\n    left: 50%;\n    top: 0%;\n    transform: rotateZ(0deg) translate(-50%, -100%);\n  }\n  85% {\n    transform: rotateZ(180deg) translate(0%, 120%);\n  }\n  92% {\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, -100%);\n  }\n}\n\n@-webkit-keyframes expand-light {\n  10%, 29%, 59%, 89% {\n    transform: translate(-25%, -50%) scale(0, 0);\n    border: 2px solid rgba(255, 255, 255, 0);\n  }\n  90%, 20%, 50% {\n    transform: translate(-25%, -50%) scale(1, 1);\n  }\n  95%, 96%, 26%, 27%, 56%, 57% {\n    transform: translate(-25%, -50%) scale(2, 2);\n    border: 2px solid rgba(255, 255, 255, 0.5);\n  }\n  0%, 28%, 58%, 100% {\n    transform: translate(-25%, -50%) scale(2.5, 2.5);\n    border: 2px solid rgba(255, 255, 255, 0.2);\n  }\n}\n\n@keyframes expand-light {\n  10%, 29%, 59%, 89% {\n    transform: translate(-25%, -50%) scale(0, 0);\n    border: 2px solid rgba(255, 255, 255, 0);\n  }\n  90%, 20%, 50% {\n    transform: translate(-25%, -50%) scale(1, 1);\n  }\n  95%, 96%, 26%, 27%, 56%, 57% {\n    transform: translate(-25%, -50%) scale(2, 2);\n    border: 2px solid rgba(255, 255, 255, 0.5);\n  }\n  0%, 28%, 58%, 100% {\n    transform: translate(-25%, -50%) scale(2.5, 2.5);\n    border: 2px solid rgba(255, 255, 255, 0.2);\n  }\n}\n\n@-webkit-keyframes dance-fire {\n  59%, 89% {\n    left: 40%;\n    width: 0px;\n    height: 0px;\n  }\n  90%, 0%, 7%, 15%, 23%, 31%, 39%, 47%, 55% {\n    left: 40.8%;\n    width: 16px;\n    height: 20px;\n    background: #FFC107;\n  }\n  94%, 3%, 11%, 19%, 27%, 35%, 43%, 51%, 58% {\n    left: 41.2%;\n    width: 16px;\n    height: 20px;\n    background: #FF9800;\n  }\n}\n\n@keyframes dance-fire {\n  59%, 89% {\n    left: 40%;\n    width: 0px;\n    height: 0px;\n  }\n  90%, 0%, 7%, 15%, 23%, 31%, 39%, 47%, 55% {\n    left: 40.8%;\n    width: 16px;\n    height: 20px;\n    background: #FFC107;\n  }\n  94%, 3%, 11%, 19%, 27%, 35%, 43%, 51%, 58% {\n    left: 41.2%;\n    width: 16px;\n    height: 20px;\n    background: #FF9800;\n  }\n}\n\n@-webkit-keyframes changeto-lower {\n  0%, 70%, 90% {\n    padding: 0px;\n    display: inline-block;\n    border-radius: 100%;\n    background: #673C63;\n    border-width: 0 0 0 0;\n    border: 0px solid #673C63;\n    transform: translate(-90%, 0%);\n  }\n  71%, 89% {\n    background: none;\n    border: solid #673C63;\n    border-radius: 0px;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 1px;\n    float: left;\n    transform-origin: bottom left;\n    transform: rotate(-45deg) translate(-50%, -65%);\n    -webkit-transform: rotate(-45deg) translate(-50%, -65%);\n  }\n}\n\n@keyframes changeto-lower {\n  0%, 70%, 90% {\n    padding: 0px;\n    display: inline-block;\n    border-radius: 100%;\n    background: #673C63;\n    border-width: 0 0 0 0;\n    border: 0px solid #673C63;\n    transform: translate(-90%, 0%);\n  }\n  71%, 89% {\n    background: none;\n    border: solid #673C63;\n    border-radius: 0px;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 1px;\n    float: left;\n    transform-origin: bottom left;\n    transform: rotate(-45deg) translate(-50%, -65%);\n    -webkit-transform: rotate(-45deg) translate(-50%, -65%);\n  }\n}\n\n@-webkit-keyframes changeto-greater {\n  0%, 70%, 90% {\n    top: 50%;\n    padding: 0px;\n    display: inline-block;\n    border-radius: 100%;\n    background: #673C63;\n    border-width: 0 0 0 0;\n    border: 0px solid #673C63;\n    transform: translate(-80%, 0%);\n  }\n  71%, 89% {\n    top: 30%;\n    background: none;\n    border: solid #673C63;\n    border-radius: 0px;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 1px;\n    float: left;\n    transform-origin: bottom left;\n    transform: rotate(135deg) translate(-80%, 20%);\n    -webkit-transform: rotate(135deg) translate(-80%, 20%);\n  }\n}\n\n@keyframes changeto-greater {\n  0%, 70%, 90% {\n    top: 50%;\n    padding: 0px;\n    display: inline-block;\n    border-radius: 100%;\n    background: #673C63;\n    border-width: 0 0 0 0;\n    border: 0px solid #673C63;\n    transform: translate(-80%, 0%);\n  }\n  71%, 89% {\n    top: 30%;\n    background: none;\n    border: solid #673C63;\n    border-radius: 0px;\n    border-width: 0 2px 2px 0;\n    display: inline-block;\n    padding: 1px;\n    float: left;\n    transform-origin: bottom left;\n    transform: rotate(135deg) translate(-80%, 20%);\n    -webkit-transform: rotate(135deg) translate(-80%, 20%);\n  }\n}\n\n.words[_ngcontent-%COMP%] {\n  color: #0e0e0d;\n  font-size: 0;\n  line-height: 1.5;\n}\n\n.words[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  display: inline-block;\n  -webkit-animation: move 3s ease-in-out infinite;\n          animation: move 3s ease-in-out infinite;\n}\n\n@-webkit-keyframes move {\n  0% {\n    transform: translate(-30%, 0);\n  }\n  50% {\n    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);\n  }\n  100% {\n    transform: translate(30%, 0);\n  }\n}\n\n@keyframes move {\n  0% {\n    transform: translate(-30%, 0);\n  }\n  50% {\n    text-shadow: 0 25px 50px rgba(0, 0, 0, 0.75);\n  }\n  100% {\n    transform: translate(30%, 0);\n  }\n}\n\n.words[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n.words[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n}\n\n.words[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n}\n\n.words[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(5) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n\n.words[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6) {\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s;\n}\n\n.words[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(7) {\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy9DOlxcVXNlcnNcXGtvbnN0XFxPbmVEcml2ZVxcRG9jdW1lbnRzXFzQnHlQcm9qZWN0c1xca290ZVBvcnRmb2xpb1xcS290ZVBvcnRmb2xpby9zcmNcXGFwcFxcYmxvZ1xcYmxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCQTtFQUVFLHlCQXZCVztFQXdCWCx1REFBQTtVQUFBLCtDQUFBO0VBQ0Usd0NBQUE7RUFDRixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ3RCRjs7QUR3QkE7RUFFRyxrQkFBQTtFQUNELFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0RBQUE7QUN0QkY7O0FEd0JBO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBOUJXO0VBK0JYLFdBOUJXO0VBK0JYLG1CQTNDWTtFQTRDWixnQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtBQ3RCRjs7QUR3QkE7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFHQSxpQ0FBQTtFQUNBLFVBQUE7QUN4QkY7O0FEMEJBO0VBRUUsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFdBcERXO0VBcURYLGFBcERZO0VBcURaLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0MsaURBQUE7VUFBQSx5Q0FBQTtBQ3hCSDs7QUQwQkE7RUFFRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsVUFsRVU7RUFtRVYsWUFsRVc7RUFtRVgsbUJBbkZZO0VBb0ZaLGtCQUFBO0VBQ0EsaUNBQUE7QUN4QkY7O0FEMEJBO0VBRUUsWUFBQTtFQUNBLCtCQUFBO0VBQ0EscURBQUE7VUFBQSw2Q0FBQTtB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RUMxR0Y7QUFDRjs7QUQ0R0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDMUdGOztBRDZHQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUMxR0Y7O0FENkdBO0VBQ0U7SUFDRSw2QkFBQTtFQzFHRjtFRDRHQTtJQUNFLDRDQUFBO0VDMUdGO0VENEdBO0lBQ0UsNEJBQUE7RUMxR0Y7QUFDRjs7QURpR0E7RUFDRTtJQUNFLDZCQUFBO0VDMUdGO0VENEdBO0lBQ0UsNENBQUE7RUMxR0Y7RUQ0R0E7SUFDRSw0QkFBQTtFQzFHRjtBQUNGOztBRDZHQTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUMzR0Y7O0FEOEdBO0VBQ0UsMkJBQUE7VUFBQSxtQkFBQTtBQzNHRjs7QUQ4R0E7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDM0dGOztBRDhHQTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7QUMzR0Y7O0FEOEdBO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQzNHRjs7QUQ4R0E7RUFDRSwyQkFBQTtVQUFBLG1CQUFBO0FDM0dGIiwiZmlsZSI6InNyYy9hcHAvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29sb3JzXHJcbiRsaWdodHNPbkJnOiAjRkVGNEFEO1xyXG4kbGlnaHRzT3V0Qmc6ICNGOEFFMzk7XHJcbiRjYW5kbGVDb2xvcjojRkZGRkZEO1xyXG4kY2FuZGxlU2hhZG93OiM2NzNDNjM7XHJcbiRmbG9vckNvbG9yOiNBRDk1OTg7XHJcbiRmaXJlQ29sb3I6I0ZGOTgwMDtcclxuJGZpcmVDb2xvcjI6I0ZGQzEwNztcclxuJGZpcmVTaGFkb3c6ICNFN0M5ODA7XHJcbiRhbmdlckNvbG9yOiNGNDQzMzY7XHJcbiRwcmltYXJ5Q29sb3I6ICNGRUY0QUQ7XHJcbiRzZWNvbmRhcnlDb2xvcjpyZ2IoMCwwLDApO1xyXG4kY2FuZGxlSW5zZXRTaGFkb3c6Izk1YzZmMjtcclxuJHNtb2tlQ29sb3I6Z3JleTtcclxuLy9zaXplc1xyXG4kZmxvb3JXaWR0aDogMzUwcHg7XHJcbiRmbG9vckhlaWdodDo1cHg7XHJcbiRjYW5kbGVXaWR0aDozNXB4O1xyXG4kY2FuZGxlSGVpZ2h0OjEwMHB4O1xyXG4kc3RpY2tXaWR0aDozcHg7XHJcbiRzdGlja0hlaWdodDoxNXB4O1xyXG5cclxuYm9keVxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokbGlnaHRzT25CZztcclxuICBhbmltYXRpb246Y2hhbmdlLWJhY2tncm91bmQgM3MgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQXJjaGl2byBCbGFja1wiLCBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLndyYXBwZXJcclxue1xyXG4gICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjUwJTtcclxuICB0b3A6NzAlO1xyXG4gIHRyYW5zZm9ybTpzY2FsZSgxLjUsMS41KSB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG4uZmxvb3Jcclxue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NTAlO1xyXG4gIHRvcDo1MCU7XHJcbiAgd2lkdGg6JGZsb29yV2lkdGg7XHJcbiAgaGVpZ2h0OiRmbG9vckhlaWdodDtcclxuICBiYWNrZ3JvdW5kOiRjYW5kbGVTaGFkb3c7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGJveC1zaGFkb3c6MHB4IDJweCA1cHggIzExMTtcclxuICB6LWluZGV4OjI7XHJcbn1cclxuLmNhbmRsZXNcclxue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NTAlO1xyXG4gIHRvcDo1MCU7XHJcbiAgd2lkdGg6MjUwcHg7XHJcbiAgaGVpZ2h0OjE1MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6JHNlY29uZGFyeUNvbG9yO1xyXG4gIC8vIG9wYWNpdHk6MC44O1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtMTAwJSk7XHJcbiAgei1pbmRleDoxO1xyXG59XHJcbi5jYW5kbGUxXHJcbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjUwJTtcclxuICB0b3A6NTAlO1xyXG4gIHdpZHRoOiRjYW5kbGVXaWR0aDtcclxuICBoZWlnaHQ6JGNhbmRsZUhlaWdodDtcclxuICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgYm9yZGVyOjNweCBzb2xpZCAkY2FuZGxlU2hhZG93O1xyXG4gIGJvcmRlci1ib3R0b206MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6M3B4O1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHJpZ2h0O1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLC0yNSUpO1xyXG4gIGJveC1zaGFkb3c6IC0ycHggMHB4IDBweCAkY2FuZGxlSW5zZXRTaGFkb3cgaW5zZXQ7XHJcbiAgIGFuaW1hdGlvbjpleHBhbmQtYm9keSAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuLmNhbmRsZTFfX3N0aWNrLC5jYW5kbGUyX19zdGlja1xyXG57XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDo1MCU7XHJcbiAgdG9wOjAlO1xyXG4gIHdpZHRoOiRzdGlja1dpZHRoO1xyXG4gIGhlaWdodDokc3RpY2tIZWlnaHQ7XHJcbiAgYmFja2dyb3VuZDokY2FuZGxlU2hhZG93O1xyXG4gIGJvcmRlci1yYWRpdXM6OHB4O1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtMTAwJSk7XHJcbn1cclxuLmNhbmRsZTJfX3N0aWNrXHJcbntcclxuICBoZWlnaHQ6JHN0aWNrSGVpZ2h0KjAuODtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gY2VudGVyO1xyXG4gIGFuaW1hdGlvbjpzdGljay1hbmltYXRpb24gM3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5jYW5kbGUxX19leWVzLC5jYW5kbGUyX19leWVzXHJcbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjUwJTtcclxuICB0b3A6MCU7XHJcbiAgd2lkdGg6JGNhbmRsZVdpZHRoO1xyXG4gIGhlaWdodDozMHB4O1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwwJSk7XHJcbn1cclxuLmNhbmRsZTFfX2V5ZXMtb25lXHJcbntcclxuICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDozMCU7XHJcbiAgdG9wOjIwJTtcclxuICB3aWR0aDo1cHg7XHJcbiAgaGVpZ2h0OjVweDtcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgYmFja2dyb3VuZDokY2FuZGxlU2hhZG93O1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTcwJSwwJSk7XHJcbiAgYW5pbWF0aW9uOmJsaW5rLWV5ZXMgM3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5jYW5kbGUxX19leWVzLXR3b1xyXG57XHJcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NzAlO1xyXG4gIHRvcDoyMCU7XHJcbiAgd2lkdGg6NXB4O1xyXG4gIGhlaWdodDo1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gIGJhY2tncm91bmQ6JGNhbmRsZVNoYWRvdztcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlKC03MCUsMCUpO1xyXG4gICBhbmltYXRpb246YmxpbmstZXllcyAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuLmNhbmRsZTFfX21vdXRoXHJcbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjQwJTtcclxuICB0b3A6MjAlO1xyXG4gIHdpZHRoOjBweDtcclxuICBoZWlnaHQ6MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICBiYWNrZ3JvdW5kOiRjYW5kbGVTaGFkb3c7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGFuaW1hdGlvbjogdWZmIDNzIGluZmluaXRlIGxpbmVhcjtcclxufVxyXG4uY2FuZGxlX19zbW9rZS1vbmVcclxue1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MzAlO1xyXG4gIHRvcDo1MCU7XHJcbiAgd2lkdGg6MzBweDtcclxuICBoZWlnaHQ6M3B4O1xyXG4gIGJhY2tncm91bmQ6JHNtb2tlQ29sb3I7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGFuaW1hdGlvbjptb3ZlLWxlZnQgM3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5jYW5kbGVfX3Ntb2tlLXR3b1xyXG57XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDozMCU7XHJcbiAgdG9wOjQwJTtcclxuICB3aWR0aDoxMHB4O1xyXG4gIGhlaWdodDoxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICBiYWNrZ3JvdW5kOiRzbW9rZUNvbG9yO1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICBhbmltYXRpb246bW92ZS10b3AgM3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcblxyXG4uY2FuZGxlMlxyXG57XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDoyMCU7XHJcbiAgdG9wOjY1JTtcclxuICB3aWR0aDokY2FuZGxlV2lkdGgqMS4yMDtcclxuICBoZWlnaHQ6JGNhbmRsZUhlaWdodCowLjYwO1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICBib3JkZXI6M3B4IHNvbGlkICRjYW5kbGVTaGFkb3c7XHJcbiAgYm9yZGVyLWJvdHRvbTowcHg7XHJcbiAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSg2MCUsLTE1JSk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgcmlnaHQ7XHJcbiAgYm94LXNoYWRvdzogLTJweCAwcHggMHB4ICRjYW5kbGVJbnNldFNoYWRvdyBpbnNldDtcclxuICBhbmltYXRpb246IHNoYWtlLWxlZnQgM3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5jYW5kbGUyX19leWVzLW9uZVxyXG57XHJcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MzAlO1xyXG4gIHRvcDo1MCU7XHJcbiAgd2lkdGg6NXB4O1xyXG4gIGhlaWdodDo1cHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOjBweCBzb2xpZCAkY2FuZGxlU2hhZG93O1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIGJhY2tncm91bmQ6JGNhbmRsZVNoYWRvdztcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlKC04MCUsMCUpO1xyXG4gICBhbmltYXRpb246Y2hhbmdldG8tbG93ZXIgM3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5jYW5kbGUyX19leWVzLXR3b1xyXG57XHJcbiAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6NzAlO1xyXG4gIHRvcDo1MCU7XHJcbiAgd2lkdGg6NXB4O1xyXG4gIGhlaWdodDo1cHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOjBweCBzb2xpZCAkY2FuZGxlU2hhZG93O1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICBmbG9hdDpsZWZ0O1xyXG4gIGJhY2tncm91bmQ6JGNhbmRsZVNoYWRvdztcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlKC04MCUsMCUpO1xyXG4gIGFuaW1hdGlvbjpjaGFuZ2V0by1ncmVhdGVyIDNzIGluZmluaXRlIGxpbmVhcjtcclxuXHJcbn1cclxuLmxpZ2h0X193YXZlXHJcbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MzUlO1xyXG4gIGxlZnQ6MzUlO1xyXG4gIHdpZHRoOjc1cHg7XHJcbiAgaGVpZ2h0Ojc1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gIHotaW5kZXg6MDtcclxuICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMjUlLC01MCUpIHNjYWxlKDIuNSwyLjUpO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgIGFuaW1hdGlvbjpleHBhbmQtbGlnaHQgM3MgaW5maW5pdGUgbGluZWFyO1xyXG59XHJcbi5jYW5kbGUyX19maXJlXHJcbntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6NTAlO1xyXG4gIGxlZnQ6NDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDUwJSAvIDYwJSA2MCUgNDAlIDQwJTtcclxuICBiYWNrZ3JvdW5kOiRmaXJlQ29sb3I7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGFuaW1hdGlvbjogZGFuY2UtZmlyZSAzcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuLy9hbmltYXRpb25zXHJcblxyXG4vL2FuaW1hdGlvbiBmb3IgYmxpbmtpbmcgZXllc1xyXG5Aa2V5ZnJhbWVzIGJsaW5rLWV5ZXN7XHJcbiAgMCUsMzUlXHJcbiAge1xyXG4gICAgb3BhY2l0eToxO1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzAlLDAlKTtcclxuICB9XHJcbiAgMzYlLDM5JVxyXG4gIHtcclxuICAgIG9wYWNpdHk6MDtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTcwJSwwJSk7XHJcbiAgfVxyXG4gIDQwJVxyXG4gIHtcclxuICAgIG9wYWNpdHk6MTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTcwJSwwJSk7XHJcbiAgfVxyXG4gIDUwJSw2NSVcclxuICB7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC0xNDAlLDAlKTtcclxuICB9XHJcbiAgNjYlXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNzAlLDAlKTtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBleHBhbmQtYm9keVxyXG57XHJcbiAgMCUsNDAlXHJcbiAge1xyXG4gICAgIHRyYW5zZm9ybTpzY2FsZSgxLDEpIHRyYW5zbGF0ZSg2MCUsLTI1JSk7XHJcbiAgfVxyXG4gIDQ1JSw1NSVcclxuICB7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xLDEuMSkgdHJhbnNsYXRlKDYwJSwtMjglKTtcclxuICB9XHJcbiAgNjAlXHJcbiAge1xyXG4gICAgIHRyYW5zZm9ybTpzY2FsZSgwLjg5LDAuODkpIHRyYW5zbGF0ZSg2MCUsLTI1JSk7XHJcbiAgfVxyXG4gIDY1JVxyXG4gIHtcclxuICAgICB0cmFuc2Zvcm06c2NhbGUoMSwxKSB0cmFuc2xhdGUoNjAlLC0yNSUpO1xyXG5cclxuICB9XHJcbiAgNzAlXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDAuOTUsMC45NSkgdHJhbnNsYXRlKDYwJSwtMjUlKTtcclxuICB9XHJcbiAgNzUlXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEsMSkgdHJhbnNsYXRlKDYwJSwtMjUlKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHVmZntcclxuICAwJSw0MCV7XHJcbiAgICB3aWR0aDowcHg7XHJcbiAgICBoZWlnaHQ6MHB4O1xyXG4gIH1cclxuICA1MCUsNTQlXHJcbiAge1xyXG4gICAgd2lkdGg6MTVweDtcclxuICAgIGhlaWdodDoxNXB4O1xyXG4gICBsZWZ0OjMwJTtcclxuICB9XHJcbiAgNTklXHJcbiAge1xyXG4gICAgIHdpZHRoOjVweDtcclxuICAgIGhlaWdodDo1cHg7XHJcbiAgICBsZWZ0OjIwJTtcclxuICB9XHJcbiAgNjIlXHJcbiAge1xyXG4gICAgIHdpZHRoOjJweDtcclxuICAgIGhlaWdodDoycHg7XHJcbiAgICBsZWZ0OjIwJTtcclxuICB9XHJcbiAgNjclXHJcbiAge1xyXG4gICAgIHdpZHRoOjBweDtcclxuICAgIGhlaWdodDowcHg7XHJcbiAgICBsZWZ0OjMwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGNoYW5nZS1iYWNrZ3JvdW5kXHJcbntcclxuICAwJSw1OSUsOTglLDEwMCV7XHJcbiAgICBiYWNrZ3JvdW5kOiRsaWdodHNPbkJnO1xyXG4gIH1cclxuICA2MSUsOTclXHJcbiAge1xyXG4gICAgYmFja2dyb3VuZDokbGlnaHRzT3V0Qmc7XHJcbiAgfVxyXG5cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmUtbGVmdHtcclxuICAwJSw1OSUsMTAwJVxyXG4gIHtcclxuICAgIHdpZHRoOjBweDtcclxuICAgIGxlZnQ6NDAlO1xyXG4gIH1cclxuICA2MCVcclxuICB7XHJcbiAgICB3aWR0aDozMHB4O1xyXG4gICAgbGVmdDozMCU7XHJcbiAgfVxyXG4gIDY4JVxyXG4gIHtcclxuICAgIHdpZHRoOjBweDtcclxuICAgIGxlZnQ6MjAlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlLXRvcHtcclxuICAwJSw2NCUsMTAwJVxyXG4gIHtcclxuICAgIHdpZHRoOjBweDtcclxuICAgIGhlaWdodDowcHg7XHJcbiAgICB0b3A6MCU7XHJcbiAgfVxyXG4gIDY1JVxyXG4gIHtcclxuICAgIHdpZHRoOjEwcHg7XHJcbiAgICBoZWlnaHQ6MTBweDtcclxuICAgIHRvcDo0MCU7XHJcbiAgICBsZWZ0OjQwJTtcclxuICB9XHJcbiAgODAlXHJcbiAge1xyXG4gICAgd2lkdGg6MHB4O1xyXG4gICAgaGVpZ2h0OjBweDtcclxuICAgIHRvcDoyMCU7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hha2UtbGVmdHtcclxuICAwJSw0MCV7XHJcbiAgICBsZWZ0OjIwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLC0xNSUpO1xyXG4gIH1cclxuICA1MCUsNTQlXHJcbiAge1xyXG4gICBsZWZ0OjIwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLC0xNSUpO1xyXG4gIH1cclxuICA1OSVcclxuICB7XHJcbiAgICBsZWZ0OjIwJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoNjAlLC0xNSUpO1xyXG4gIH1cclxuICA2MiVcclxuICB7XHJcbiAgICAgbGVmdDoxOCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDYwJSwtMTUlKTtcclxuICB9XHJcbiAgNjUlXHJcbiAge1xyXG4gICAgbGVmdDoyMSU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDYwJSwtMTUlKTtcclxuICB9XHJcbiAgNjclXHJcbiAge1xyXG4gICAgbGVmdDoyMCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKDYwJSwtMTUlKTtcclxuICB9XHJcbiAgNzUlXHJcbiAge1xyXG4gICAgbGVmdDoyMCU7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSwwLjg1KSB0cmFuc2xhdGUoNjAlLC0xNSUpO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiRjYW5kbGVTaGFkb3c7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8gODAlXHJcbiAgLy8ge1xyXG4gIC8vICAgYmFja2dyb3VuZDokYW5nZXJDb2xvcjtcclxuICAvLyAgIGFscGhhOjAuNTtcclxuICAvLyAgIGJvcmRlci1jb2xvcjokYW5nZXJDb2xvcjtcclxuICAvLyB9XHJcblxyXG4gIDkxJVxyXG4gIHtcclxuICAgIGxlZnQ6MjAlO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTgsMC44MikgdHJhbnNsYXRlKDYwJSwtMTAlKTtcclxuICAgIGJhY2tncm91bmQ6JGFuZ2VyQ29sb3I7XHJcbiAgICBib3JkZXItY29sb3I6JGFuZ2VyQ29sb3I7XHJcbiAgICAgYm94LXNoYWRvdzogLTJweCAwcHggMHB4ICRhbmdlckNvbG9yIGluc2V0O1xyXG4gIH1cclxuICA5MiVcclxuICB7XHJcbiAgICBsZWZ0OjIwJTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgwLjg1LDEuMTUpIHRyYW5zbGF0ZSg2MCUsLTE1JSk7XHJcbiAgfVxyXG4gIDk1JVxyXG4gIHtcclxuICAgIGxlZnQ6MjAlO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUsMC45NSkgdHJhbnNsYXRlKDYwJSwtMTUlKTtcclxuICB9XHJcbiAgOTclXHJcbiAge1xyXG4gICAgbGVmdDoyMCU7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4wLDEuMCkgdHJhbnNsYXRlKDYwJSwtMTUlKTtcclxuICB9XHJcblxyXG59XHJcbkBrZXlmcmFtZXMgc3RpY2stYW5pbWF0aW9ue1xyXG4gICAwJSw0MCV7XHJcbiAgIGxlZnQ6NTAlO1xyXG4gIHRvcDowJTtcclxuICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTEwMCUpO1xyXG4gIH1cclxuICA1MCUsNTQlXHJcbiAge1xyXG4gICBsZWZ0OjUwJTtcclxuICB0b3A6MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTEwMCUpO1xyXG4gIH1cclxuICA1OSVcclxuICB7XHJcbiAgICBsZWZ0OjUwJTtcclxuICB0b3A6MCU7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTEwMCUpO1xyXG4gIH1cclxuICA2MiVcclxuICB7XHJcbiAgICBsZWZ0OjUwJTtcclxuICB0b3A6MCU7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWigtMTVkZWcpIHRyYW5zbGF0ZSgtNTAlLC0xMDAlKTtcclxuICB9XHJcbiAgNjUlXHJcbiAge1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgdG9wOjAlO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVooMTVkZWcpIHRyYW5zbGF0ZSgtNTAlLC0xMDAlKTtcclxuICB9XHJcbiAgNzAlXHJcbiAge1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgdG9wOjAlO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVooLTVkZWcpIHRyYW5zbGF0ZSgtNTAlLC0xMDAlKTtcclxuICB9XHJcbiAgNzIlXHJcbiAge1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgdG9wOjAlO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVooNWRlZykgdHJhbnNsYXRlKC01MCUsLTEwMCUpO1xyXG4gIH1cclxuICA3NCUsODQlXHJcbiAge1xyXG4gICAgbGVmdDo1MCU7XHJcbiAgdG9wOjAlO1xyXG4gICAgdHJhbnNmb3JtOnJvdGF0ZVooMGRlZykgdHJhbnNsYXRlKC01MCUsLTEwMCUpO1xyXG4gIH1cclxuICA4NSVcclxuICB7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlWigxODBkZWcpIHRyYW5zbGF0ZSgwJSwxMjAlKTtcclxuICB9XHJcbiAgOTIlXHJcbiAge1xyXG4gICAgIGxlZnQ6NTAlO1xyXG4gIHRvcDowJTtcclxuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtMTAwJSk7XHJcbiAgfVxyXG5cclxufVxyXG5Aa2V5ZnJhbWVzIGV4cGFuZC1saWdodFxyXG57XHJcbiAgMTAlLDI5JSw1OSUsODklXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMjUlLC01MCUpIHNjYWxlKDAsMCk7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XHJcbiAgfVxyXG4gIDkwJSwyMCUsNTAlXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMjUlLC01MCUpIHNjYWxlKDEsMSk7XHJcbiAgfVxyXG4gIDk1JSw5NiUsMjYlLDI3JSw1NiUsNTclXHJcbiAge1xyXG4gICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTI1JSwtNTAlKSBzY2FsZSgyLjAsMi4wKTtcclxuICAgIGJvcmRlcjoycHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xyXG4gIH1cclxuICAwJSwyOCUsNTglLDEwMCVcclxuICB7XHJcbiAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtMjUlLC01MCUpIHNjYWxlKDIuNSwyLjUpO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XHJcbiAgfVxyXG5cclxufVxyXG5Aa2V5ZnJhbWVzIGRhbmNlLWZpcmVcclxue1xyXG4gIDU5JSw4OSVcclxuICB7XHJcbiAgICBsZWZ0OjQwJTtcclxuICB3aWR0aDowcHg7XHJcbiAgaGVpZ2h0OjBweDtcclxuICB9XHJcbiAgOTAlLDAlLDclLDE1JSwyMyUsMzElLDM5JSw0NyUsNTUlXHJcbiAge1xyXG4gICAgbGVmdDo0MC44JTtcclxuICB3aWR0aDoxNnB4O1xyXG4gIGhlaWdodDoyMHB4O1xyXG4gICAgYmFja2dyb3VuZDokZmlyZUNvbG9yMjtcclxuICB9XHJcbiAgOTQlLDMlLDExJSwxOSUsMjclLDM1JSw0MyUsNTElLDU4JVxyXG4gIHtcclxuICAgIGxlZnQ6NDEuMiU7XHJcbiAgd2lkdGg6MTZweDtcclxuICBoZWlnaHQ6MjBweDtcclxuICAgIGJhY2tncm91bmQ6JGZpcmVDb2xvcjtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBjaGFuZ2V0by1sb3dlclxyXG57XHJcbiAgMCUsNzAlLDkwJVxyXG4gIHtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gIGJhY2tncm91bmQ6JGNhbmRsZVNoYWRvdztcclxuICAgIGJvcmRlci13aWR0aDowIDAgMCAwO1xyXG4gICAgYm9yZGVyOjBweCBzb2xpZCAkY2FuZGxlU2hhZG93O1xyXG4gIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTkwJSwwJSk7XHJcbiAgfVxyXG4gIDcxJSw4OSVcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBib3JkZXI6IHNvbGlkICRjYW5kbGVTaGFkb3c7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwtNjUlKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwtNjUlKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY2hhbmdldG8tZ3JlYXRlclxyXG57XHJcbiAgMCUsNzAlLDkwJVxyXG4gIHtcclxuICB0b3A6NTAlO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgYmFja2dyb3VuZDokY2FuZGxlU2hhZG93O1xyXG4gICAgYm9yZGVyLXdpZHRoOjAgMCAwIDA7XHJcbiAgICBib3JkZXI6MHB4IHNvbGlkICRjYW5kbGVTaGFkb3c7XHJcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZSgtODAlLDAlKTtcclxuICB9XHJcbiAgNzElLDg5JVxyXG4gIHtcclxuICAgIHRvcDozMCU7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBib3JkZXI6IHNvbGlkICRjYW5kbGVTaGFkb3c7XHJcbiAgICBib3JkZXItcmFkaXVzOjBweDtcclxuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSBsZWZ0O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKSB0cmFuc2xhdGUoLTgwJSwyMCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIHRyYW5zbGF0ZSgtODAlLDIwJSk7XHJcbiAgfVxyXG59XHJcbi53b3JkcyB7XHJcbiAgY29sb3I6ICMwZTBlMGQ7XHJcbiAgZm9udC1zaXplOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi53b3JkcyBzcGFuIHtcclxuICBmb250LXNpemU6IDVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFuaW1hdGlvbjogbW92ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBtb3ZlIHtcclxuICAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMzAlLCAwKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIHRleHQtc2hhZG93OiAwIDI1cHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG4ud29yZHMgc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxufVxyXG5cclxuLndvcmRzIHNwYW46bnRoLWNoaWxkKDMpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG59XHJcblxyXG4ud29yZHMgc3BhbjpudGgtY2hpbGQoNCkge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMS41cztcclxufVxyXG5cclxuLndvcmRzIHNwYW46bnRoLWNoaWxkKDUpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG59XHJcblxyXG4ud29yZHMgc3BhbjpudGgtY2hpbGQoNikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMi41cztcclxufVxyXG5cclxuLndvcmRzIHNwYW46bnRoLWNoaWxkKDcpIHtcclxuICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG59XHJcblxyXG4iLCJib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRjRBRDtcbiAgYW5pbWF0aW9uOiBjaGFuZ2UtYmFja2dyb3VuZCAzcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGZvbnQtZmFtaWx5OiBcIkFyY2hpdm8gQmxhY2tcIiwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNzAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSwgMS41KSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5mbG9vciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogIzY3M0M2MztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNXB4ICMxMTE7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jYW5kbGVzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmNhbmRsZTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDNweCBzb2xpZCAjNjczQzYzO1xuICBib3JkZXItYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHJpZ2h0O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC0yNSUpO1xuICBib3gtc2hhZG93OiAtMnB4IDBweCAwcHggIzk1YzZmMiBpbnNldDtcbiAgYW5pbWF0aW9uOiBleHBhbmQtYm9keSAzcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5jYW5kbGUxX19zdGljaywgLmNhbmRsZTJfX3N0aWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMCU7XG4gIHdpZHRoOiAzcHg7XG4gIGhlaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogIzY3M0M2MztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG59XG5cbi5jYW5kbGUyX19zdGljayB7XG4gIGhlaWdodDogMTJweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgYW5pbWF0aW9uOiBzdGljay1hbmltYXRpb24gM3MgaW5maW5pdGUgbGluZWFyO1xufVxuXG4uY2FuZGxlMV9fZXllcywgLmNhbmRsZTJfX2V5ZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwJTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpO1xufVxuXG4uY2FuZGxlMV9fZXllcy1vbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDMwJTtcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjNjczQzYzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzAlLCAwJSk7XG4gIGFuaW1hdGlvbjogYmxpbmstZXllcyAzcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5jYW5kbGUxX19leWVzLXR3byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzAlO1xuICB0b3A6IDIwJTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICM2NzNDNjM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDAlKTtcbiAgYW5pbWF0aW9uOiBibGluay1leWVzIDNzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLmNhbmRsZTFfX21vdXRoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogMjAlO1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogIzY3M0M2MztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogdWZmIDNzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLmNhbmRsZV9fc21va2Utb25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzMCU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb246IG1vdmUtbGVmdCAzcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5jYW5kbGVfX3Ntb2tlLXR3byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDQwJTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogbW92ZS10b3AgM3MgaW5maW5pdGUgbGluZWFyO1xufVxuXG4uY2FuZGxlMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjAlO1xuICB0b3A6IDY1JTtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAzcHggc29saWQgIzY3M0M2MztcbiAgYm9yZGVyLWJvdHRvbTogMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDYwJSwgLTE1JSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciByaWdodDtcbiAgYm94LXNoYWRvdzogLTJweCAwcHggMHB4ICM5NWM2ZjIgaW5zZXQ7XG4gIGFuaW1hdGlvbjogc2hha2UtbGVmdCAzcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5jYW5kbGUyX19leWVzLW9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAwcHggc29saWQgIzY3M0M2MztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICM2NzNDNjM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MCUsIDAlKTtcbiAgYW5pbWF0aW9uOiBjaGFuZ2V0by1sb3dlciAzcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5jYW5kbGUyX19leWVzLXR3byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNzAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAwcHggc29saWQgIzY3M0M2MztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICM2NzNDNjM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC04MCUsIDAlKTtcbiAgYW5pbWF0aW9uOiBjaGFuZ2V0by1ncmVhdGVyIDNzIGluZmluaXRlIGxpbmVhcjtcbn1cblxuLmxpZ2h0X193YXZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM1JTtcbiAgbGVmdDogMzUlO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB6LWluZGV4OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjUlLCAtNTAlKSBzY2FsZSgyLjUsIDIuNSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYW5pbWF0aW9uOiBleHBhbmQtbGlnaHQgM3MgaW5maW5pdGUgbGluZWFyO1xufVxuXG4uY2FuZGxlMl9fZmlyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDQwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSA1MCUgNTAlLzYwJSA2MCUgNDAlIDQwJTtcbiAgYmFja2dyb3VuZDogI0ZGOTgwMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGFuaW1hdGlvbjogZGFuY2UtZmlyZSAzcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgYmxpbmstZXllcyB7XG4gIDAlLCAzNSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwJSwgMCUpO1xuICB9XG4gIDM2JSwgMzklIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC03MCUsIDAlKTtcbiAgfVxuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwJSwgMCUpO1xuICB9XG4gIDUwJSwgNjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTQwJSwgMCUpO1xuICB9XG4gIDY2JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTcwJSwgMCUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGV4cGFuZC1ib2R5IHtcbiAgMCUsIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGUoNjAlLCAtMjUlKTtcbiAgfVxuICA0NSUsIDU1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgdHJhbnNsYXRlKDYwJSwgLTI4JSk7XG4gIH1cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODksIDAuODkpIHRyYW5zbGF0ZSg2MCUsIC0yNSUpO1xuICB9XG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKSB0cmFuc2xhdGUoNjAlLCAtMjUlKTtcbiAgfVxuICA3MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSwgMC45NSkgdHJhbnNsYXRlKDYwJSwgLTI1JSk7XG4gIH1cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHRyYW5zbGF0ZSg2MCUsIC0yNSUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHVmZiB7XG4gIDAlLCA0MCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gIH1cbiAgNTAlLCA1NCUge1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBsZWZ0OiAzMCU7XG4gIH1cbiAgNTklIHtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGxlZnQ6IDIwJTtcbiAgfVxuICA2MiUge1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbGVmdDogMjAlO1xuICB9XG4gIDY3JSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBoZWlnaHQ6IDBweDtcbiAgICBsZWZ0OiAzMCU7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2hhbmdlLWJhY2tncm91bmQge1xuICAwJSwgNTklLCA5OCUsIDEwMCUge1xuICAgIGJhY2tncm91bmQ6ICNGRUY0QUQ7XG4gIH1cbiAgNjElLCA5NyUge1xuICAgIGJhY2tncm91bmQ6ICNGOEFFMzk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZS1sZWZ0IHtcbiAgMCUsIDU5JSwgMTAwJSB7XG4gICAgd2lkdGg6IDBweDtcbiAgICBsZWZ0OiA0MCU7XG4gIH1cbiAgNjAlIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBsZWZ0OiAzMCU7XG4gIH1cbiAgNjglIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIGxlZnQ6IDIwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBtb3ZlLXRvcCB7XG4gIDAlLCA2NCUsIDEwMCUge1xuICAgIHdpZHRoOiAwcHg7XG4gICAgaGVpZ2h0OiAwcHg7XG4gICAgdG9wOiAwJTtcbiAgfVxuICA2NSUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA0MCU7XG4gIH1cbiAgODAlIHtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICAgIHRvcDogMjAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWtlLWxlZnQge1xuICAwJSwgNDAlIHtcbiAgICBsZWZ0OiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjAlLCAtMTUlKTtcbiAgfVxuICA1MCUsIDU0JSB7XG4gICAgbGVmdDogMjAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDYwJSwgLTE1JSk7XG4gIH1cbiAgNTklIHtcbiAgICBsZWZ0OiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjAlLCAtMTUlKTtcbiAgfVxuICA2MiUge1xuICAgIGxlZnQ6IDE4JTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg2MCUsIC0xNSUpO1xuICB9XG4gIDY1JSB7XG4gICAgbGVmdDogMjElO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDYwJSwgLTE1JSk7XG4gIH1cbiAgNjclIHtcbiAgICBsZWZ0OiAyMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjAlLCAtMTUlKTtcbiAgfVxuICA3NSUge1xuICAgIGxlZnQ6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUsIDAuODUpIHRyYW5zbGF0ZSg2MCUsIC0xNSUpO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjNjczQzYzO1xuICB9XG4gIDkxJSB7XG4gICAgbGVmdDogMjAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xOCwgMC44MikgdHJhbnNsYXRlKDYwJSwgLTEwJSk7XG4gICAgYmFja2dyb3VuZDogI0Y0NDMzNjtcbiAgICBib3JkZXItY29sb3I6ICNGNDQzMzY7XG4gICAgYm94LXNoYWRvdzogLTJweCAwcHggMHB4ICNGNDQzMzYgaW5zZXQ7XG4gIH1cbiAgOTIlIHtcbiAgICBsZWZ0OiAyMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1LCAxLjE1KSB0cmFuc2xhdGUoNjAlLCAtMTUlKTtcbiAgfVxuICA5NSUge1xuICAgIGxlZnQ6IDIwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUsIDAuOTUpIHRyYW5zbGF0ZSg2MCUsIC0xNSUpO1xuICB9XG4gIDk3JSB7XG4gICAgbGVmdDogMjAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSkgdHJhbnNsYXRlKDYwJSwgLTE1JSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3RpY2stYW5pbWF0aW9uIHtcbiAgMCUsIDQwJSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICB9XG4gIDUwJSwgNTQlIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gIH1cbiAgNTklIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gIH1cbiAgNjIlIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAwJTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooLTE1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICB9XG4gIDY1JSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICB9XG4gIDcwJSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKC01ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICB9XG4gIDcyJSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogMCU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gIH1cbiAgNzQlLCA4NCUge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDAlO1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xuICB9XG4gIDg1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZykgdHJhbnNsYXRlKDAlLCAxMjAlKTtcbiAgfVxuICA5MiUge1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBleHBhbmQtbGlnaHQge1xuICAxMCUsIDI5JSwgNTklLCA4OSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNSUsIC01MCUpIHNjYWxlKDAsIDApO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIH1cbiAgOTAlLCAyMCUsIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSkgc2NhbGUoMSwgMSk7XG4gIH1cbiAgOTUlLCA5NiUsIDI2JSwgMjclLCA1NiUsIDU3JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSkgc2NhbGUoMiwgMik7XG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIDAlLCAyOCUsIDU4JSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTI1JSwgLTUwJSkgc2NhbGUoMi41LCAyLjUpO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgfVxufVxuQGtleWZyYW1lcyBkYW5jZS1maXJlIHtcbiAgNTklLCA4OSUge1xuICAgIGxlZnQ6IDQwJTtcbiAgICB3aWR0aDogMHB4O1xuICAgIGhlaWdodDogMHB4O1xuICB9XG4gIDkwJSwgMCUsIDclLCAxNSUsIDIzJSwgMzElLCAzOSUsIDQ3JSwgNTUlIHtcbiAgICBsZWZ0OiA0MC44JTtcbiAgICB3aWR0aDogMTZweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGQzEwNztcbiAgfVxuICA5NCUsIDMlLCAxMSUsIDE5JSwgMjclLCAzNSUsIDQzJSwgNTElLCA1OCUge1xuICAgIGxlZnQ6IDQxLjIlO1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjRkY5ODAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGNoYW5nZXRvLWxvd2VyIHtcbiAgMCUsIDcwJSwgOTAlIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzY3M0M2MztcbiAgICBib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyOiAwcHggc29saWQgIzY3M0M2MztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTAlLCAwJSk7XG4gIH1cbiAgNzElLCA4OSUge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAjNjczQzYzO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTY1JSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNjUlKTtcbiAgfVxufVxuQGtleWZyYW1lcyBjaGFuZ2V0by1ncmVhdGVyIHtcbiAgMCUsIDcwJSwgOTAlIHtcbiAgICB0b3A6IDUwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogIzY3M0M2MztcbiAgICBib3JkZXItd2lkdGg6IDAgMCAwIDA7XG4gICAgYm9yZGVyOiAwcHggc29saWQgIzY3M0M2MztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtODAlLCAwJSk7XG4gIH1cbiAgNzElLCA4OSUge1xuICAgIHRvcDogMzAlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBzb2xpZCAjNjczQzYzO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKSB0cmFuc2xhdGUoLTgwJSwgMjAlKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZykgdHJhbnNsYXRlKC04MCUsIDIwJSk7XG4gIH1cbn1cbi53b3JkcyB7XG4gIGNvbG9yOiAjMGUwZTBkO1xuICBmb250LXNpemU6IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi53b3JkcyBzcGFuIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGFuaW1hdGlvbjogbW92ZSAzcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBtb3ZlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMCUsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgdGV4dC1zaGFkb3c6IDAgMjVweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlLCAwKTtcbiAgfVxufVxuLndvcmRzIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG4ud29yZHMgc3BhbjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IDFzO1xufVxuXG4ud29yZHMgc3BhbjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IDEuNXM7XG59XG5cbi53b3JkcyBzcGFuOm50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMnM7XG59XG5cbi53b3JkcyBzcGFuOm50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMi41cztcbn1cblxuLndvcmRzIHNwYW46bnRoLWNoaWxkKDcpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAzcztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacto/contacto.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacto/contacto.component.ts ***!
    \************************************************/

  /*! exports provided: ContactoComponent */

  /***/
  function srcAppContactoContactoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactoComponent", function () {
      return ContactoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactoComponent = /*#__PURE__*/function () {
      function ContactoComponent() {
        _classCallCheck(this, ContactoComponent);
      }

      _createClass(ContactoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactoComponent;
    }();

    ContactoComponent.ɵfac = function ContactoComponent_Factory(t) {
      return new (t || ContactoComponent)();
    };

    ContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactoComponent,
      selectors: [["app-contacto"]],
      decls: 43,
      vars: 0,
      consts: [[1, "content"], [1, "block-content"], [1, "block-title"], [1, "row"], [1, "col-md-6"], ["action", "php/send_mail.php", "method", "post", "id", "contact_form", 1, "contact-form"], [1, "form-control-wrap"], ["id", "message", 1, "alert", "alert-danger", "alert-dismissible", "fade"], [1, "form-group"], ["type", "text", "id", "fname", "placeholder", "Name*", "name", "fname", 1, "form-control"], [1, "form-group", "mar-top-40"], ["type", "email", "id", "email", "placeholder", "Your email*", "name", "email", 1, "form-control"], [1, "form-group", "mar-top-60"], ["rows", "10", "name", "comment", "id", "comment", "placeholder", "text", 1, "form-control"], ["type", "submit", 1, "btn", "v7"], [1, "col-md-5", "offset-md-1"], [1, "contact-content"], [1, "contact-icon"], [1, "ion-ios-location-outline"], [1, "contact-details"], [1, "ion-ios-telephone-outline"], [1, "ion-ios-email-outline"]],
      template: function ContactoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Send Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "ADDRESS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Tbilisi, Georgia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+995 579 99 91 12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "kote.janjgava@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacto',
          templateUrl: './contacto.component.html',
          styleUrls: ['./contacto.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/myprojects/project1/project1.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/myprojects/project1/project1.component.ts ***!
    \***********************************************************/

  /*! exports provided: Project1Component */

  /***/
  function srcAppMyprojectsProject1Project1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Project1Component", function () {
      return Project1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Project1Component = /*#__PURE__*/function () {
      function Project1Component() {
        _classCallCheck(this, Project1Component);
      }

      _createClass(Project1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Project1Component;
    }();

    Project1Component.ɵfac = function Project1Component_Factory(t) {
      return new (t || Project1Component)();
    };

    Project1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Project1Component,
      selectors: [["app-project1"]],
      decls: 2,
      vars: 0,
      template: function Project1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " project1 works!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cHJvamVjdHMvcHJvamVjdDEvcHJvamVjdDEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Project1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-project1',
          templateUrl: './project1.component.html',
          styleUrls: ['./project1.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portafolio/portafolio.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/portafolio/portafolio.component.ts ***!
    \****************************************************/

  /*! exports provided: PortafolioComponent */

  /***/
  function srcAppPortafolioPortafolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortafolioComponent", function () {
      return PortafolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PortafolioComponent = /*#__PURE__*/function () {
      function PortafolioComponent() {
        _classCallCheck(this, PortafolioComponent);
      }

      _createClass(PortafolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortafolioComponent;
    }();

    PortafolioComponent.ɵfac = function PortafolioComponent_Factory(t) {
      return new (t || PortafolioComponent)();
    };

    PortafolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortafolioComponent,
      selectors: [["app-portafolio"]],
      decls: 119,
      vars: 0,
      consts: [[1, "content"], [1, "block-content"], [1, "block-title"], [1, "row"], [1, "col-md-12"], ["id", "portfolio-container", 1, "portfolio-container", "row", "isotope"], [1, "col-md-4", "col-sm-6", "col-xs-12", "portfolio-item", "artwork"], ["href", "project-2.html"], [1, "portfolio-column"], [1, "portfolio-hover"], [1, "portfolio-content"], [1, "portfolio-overlay"], ["src", "assets\\images\\portfolio\\masonry\\Screenshot2.jpeg", "alt", "screenshot"], [1, "col-md-4", "col-sm-6", "col-xs-12", "portfolio-item", "webdesign"], ["href", "project-2.html", 1, "open-project"], ["src", "assets\\images\\portfolio\\masonry\\coming.jpeg", "alt", ""], ["href", "project-3.html", 1, "open-project"], ["href", "project-4.html", 1, "open-project"], [1, "col-md-4", "col-sm-6", "col-xs-12", "portfolio-item", "design"], ["href", "project-5.html", 1, "open-project"], ["href", "project-6.html", 1, "open-project"], ["href", "project-1.html", 1, "open-project"], [1, "row", "text-center"], [1, "col-md-12", "btn-email"], [1, "btn", "lowercase"]],
      template: function PortafolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Task Project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Live Preview.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "NOTES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "TIMES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "STATIONARY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "PH.D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "WAG MAGAZINE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "LOOK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "IPAD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "PAPER MOCKUP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "View details.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "kote.janjgava@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRhZm9saW8vcG9ydGFmb2xpby5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortafolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portafolio',
          templateUrl: './portafolio.component.html',
          styleUrls: ['./portafolio.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resumen/resumen.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/resumen/resumen.component.ts ***!
    \**********************************************/

  /*! exports provided: ResumenComponent */

  /***/
  function srcAppResumenResumenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumenComponent", function () {
      return ResumenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cvabastidas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/cvabastidas.service */
    "./src/app/services/cvabastidas.service.ts");

    var ResumenComponent = /*#__PURE__*/function () {
      function ResumenComponent(cv) {
        _classCallCheck(this, ResumenComponent);

        this.cv = cv;
      }

      _createClass(ResumenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumenComponent;
    }();

    ResumenComponent.ɵfac = function ResumenComponent_Factory(t) {
      return new (t || ResumenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cvabastidas_service__WEBPACK_IMPORTED_MODULE_1__["CvabastidasService"]));
    };

    ResumenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumenComponent,
      selectors: [["app-resumen"]],
      decls: 209,
      vars: 0,
      consts: [["id", "about", 1, "content"], [1, "block-content"], [1, "block-title"], [1, "subheading"], [1, "info-list", "row"], [1, "col-sm-6"], [1, "timeline", "experience"], [1, "row"], [1, "col-md-12"], [1, "exp-holder"], [1, "exp"], [1, "hgroup"], [1, "timeline", "education"], [1, "col-md-4", "col-sm-6", "service"], [1, "service-icon"], ["id", "currentPhoto", "src", "assets/images/logos/htmllogo.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/javascript.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/css.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/sass.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/bootstrap.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/angular.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/github.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/gitlab.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], ["id", "currentPhoto", "src", "assets/images/logos/typescript.png", "onerror", "this.onerror=null; this.src='Default.jpg'", "alt", "logo", 1, "animated_logo"], [1, "row", "text-center"], [1, "col-md-12", "btn-email"], [1, "btn", "lowercase"]],
      template: function ResumenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hello! My name is ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Konstantine Janjgava");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Front-end Developer with 1+ years of experience designing, developing, and managing sites and internal frameworks. Specializes in Angular & Vue.JS. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Konstantine Janjgava");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Location : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Tbilisi, Georia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " kote.janjgava@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Phone : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " + 995 579 99 91 12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Interests : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Frelance, Full/Half-Time ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Personal Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Critical thinking, creativity, and problem-solving");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Constantly learning and improving");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Team-player who can also work independently.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Management (people, time and project)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Excellent written and verbal communication skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "IT Support Specialist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " - LTD Georgian Gas Transportation Company, Tbilisi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Mar 2021 - Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Responsible for testing, configuring, troubleshooting hardware, software, and monitoring systems to meet the needs of the company. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Junior Front-end Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " - Digital TV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Aug 2020 - Jan 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " My role was to write and style the front-end components and pages that meet the requirements of the company. Technologies used: Vue.js; Quasar framework; Firebase; Javascript; HTML & CSS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Intern web developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " - Tbilisi Railway");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Jan 2020 - Apr 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Gained experience in C#,SQL,.net and Windows forms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " FrontEnd Development ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "EPAM University Program");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Dec 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " This program has been developed for talented students and career changers with basic prior engineering study and without work experience in IT. Participants will receive the necessary level of knowledge and practical experience to enable you to begin a successful career in IT. The program focuses on the most useful and practical information for starting out in Front-End Development. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Angular Front End Development, Tbilisi School of Communication ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Tbilisi School of Communication");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Oct 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Develop modern, complex, responsive and scalable web applications with Angular 13 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Angular - The Complete Guide (2022 Edition) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Udemy.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Oct 2021");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Develop modern, complex, responsive and scalable web applications with Angular 13 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Quasar V1: Cross-Platform Apps (with Vue 2, Vuex & Firebase), ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Udemy.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Oct 2020 - Dec 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " How to create a real-world, cross-platform app for web, iOS, Android, Mac and Windows using Quasar Framework V1 and Firebase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, " Ilia State University, Tbilisi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Bachelor of Business and Management");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Oct 2011 - Jul 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Professional Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Good knowledge of Html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Javascript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Good knowledge and understanding of JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Writing code that may be used in the future");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Styles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Making beautiful styles using css|scss|sass and CSS frameworks like Bootstrap , Angular Material and others. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "ol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " Designing and developing user interfaces using angularJS best practices ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Adapting interface for modern internet applications using the latest front-end technologies. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Writing JavaScript, Typescript, CSS, and HTML.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Github / Gitlab");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "Experienced with git collaboration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Experience with Angular+Typescript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "kote.janjgava@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".animated_logo[_ngcontent-%COMP%] {\n  transform: perspective(100px) rotate(0deg);\n  transition: all 0.5s;\n}\n.animated_logo[_ngcontent-%COMP%]:hover {\n  transform: perspective(100px) rotateY(-180deg) scale(1.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lbi9DOlxcVXNlcnNcXGtvbnN0XFxPbmVEcml2ZVxcRG9jdW1lbnRzXFzQnHlQcm9qZWN0c1xca290ZVBvcnRmb2xpb1xcS290ZVBvcnRmb2xpby9zcmNcXGFwcFxccmVzdW1lblxccmVzdW1lbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lbi9yZXN1bWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7RUFDQSxvQkFBQTtBQ0NKO0FEQUk7RUFDSSx5REFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lbi9yZXN1bWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuaW1hdGVkX2xvZ297XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEwMHB4KSByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWSgtMTgwZGVnKSBzY2FsZSgxLjgpO1xyXG4gICAgfVxyXG59XHJcbiIsIi5hbmltYXRlZF9sb2dvIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5hbmltYXRlZF9sb2dvOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDBweCkgcm90YXRlWSgtMTgwZGVnKSBzY2FsZSgxLjgpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resumen',
          templateUrl: './resumen.component.html',
          styleUrls: ['./resumen.component.scss']
        }]
      }], function () {
        return [{
          type: _services_cvabastidas_service__WEBPACK_IMPORTED_MODULE_1__["CvabastidasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cvabastidas.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/cvabastidas.service.ts ***!
    \*************************************************/

  /*! exports provided: CvabastidasService */

  /***/
  function srcAppServicesCvabastidasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvabastidasService", function () {
      return CvabastidasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CvabastidasService = function CvabastidasService() {
      _classCallCheck(this, CvabastidasService);
    };

    CvabastidasService.ɵfac = function CvabastidasService_Factory(t) {
      return new (t || CvabastidasService)();
    };

    CvabastidasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CvabastidasService,
      factory: CvabastidasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CvabastidasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\konst\OneDrive\Documents\МyProjects\kotePortfolio\KotePortfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map