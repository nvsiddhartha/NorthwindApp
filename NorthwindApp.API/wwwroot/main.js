(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_models/pagination.ts":
/*!***************************************!*\
  !*** ./src/app/_models/pagination.ts ***!
  \***************************************/
/*! exports provided: PaginatedResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatedResult", function() { return PaginatedResult; });
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult() {
    }
    return PaginatedResult;
}());



/***/ }),

/***/ "./src/app/_resolvers/categories-resolver.ts":
/*!***************************************************!*\
  !*** ./src/app/_resolvers/categories-resolver.ts ***!
  \***************************************************/
/*! exports provided: CategoriesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesResolver", function() { return CategoriesResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/category.service */ "./src/app/_services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesResolver = /** @class */ (function () {
    function CategoriesResolver(categoryService, router, alertify) {
        this.categoryService = categoryService;
        this.router = router;
        this.alertify = alertify;
    }
    CategoriesResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.categoryService.getCategories().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/home']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    CategoriesResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], CategoriesResolver);
    return CategoriesResolver;
}());



/***/ }),

/***/ "./src/app/_resolvers/category-detail-resolver.ts":
/*!********************************************************!*\
  !*** ./src/app/_resolvers/category-detail-resolver.ts ***!
  \********************************************************/
/*! exports provided: CategoryDetailResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailResolver", function() { return CategoryDetailResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/category.service */ "./src/app/_services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoryDetailResolver = /** @class */ (function () {
    function CategoryDetailResolver(categoryService, router, alertify) {
        this.categoryService = categoryService;
        this.router = router;
        this.alertify = alertify;
    }
    CategoryDetailResolver.prototype.resolve = function (route) {
        var _this = this;
        return this.categoryService.getCategory(route.params['id']).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            _this.alertify.error('Problem retrieving data');
            _this.router.navigate(['/category']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
        }));
    };
    CategoryDetailResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], CategoryDetailResolver);
    return CategoryDetailResolver;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/category.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/category.service.ts ***!
  \***********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'category';
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.baseUrl);
    };
    CategoryService.prototype.getCategory = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    CategoryService.prototype.getProductsByCategory = function (id) {
        return this.http.get(this.baseUrl + '/' + id + '/products');
    };
    CategoryService.prototype.addCategory = function (model) {
        return this.http.post(this.baseUrl + '/add', model);
    };
    CategoryService.prototype.editCategory = function (id, model) {
        return this.http.post(this.baseUrl + '/' + id, model);
    };
    CategoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/_services/error.interceptor.ts":
/*!************************************************!*\
  !*** ./src/app/_services/error.interceptor.ts ***!
  \************************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                if (error.status === 401) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.statusText);
                }
                var applicationError = error.headers.get('Application-Error');
                if (applicationError) {
                    console.error(applicationError);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(applicationError);
                }
                var serverError = error.error;
                var modelStateErrors = '';
                if (serverError) {
                    if (error.status === 400) {
                        // handle validation error
                        for (var f in serverError) {
                            if (f) {
                                if (typeof serverError[f] === 'object') {
                                    for (var key in serverError[f]) {
                                        if (key) {
                                            console.log(serverError[f][key]);
                                            modelStateErrors += serverError[f][key] + '\n';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                // const serverError = error.error;
                // let modelStateErrors = '';
                // if (serverError && typeof serverError === 'object') {
                //     for (const key in serverError) {
                //         if (serverError[key]) {
                //             modelStateErrors += serverError[key] + '\n';
                //         }
                //     }
                // }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(modelStateErrors || serverError || 'Server Error');
            }
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_services/order.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/order.service.ts ***!
  \********************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'order';
        this._cartDataSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.initializeOrder());
        this.cartData = this._cartDataSource.asObservable();
        this._noOfItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.getNoOfItemsInCart());
    }
    Object.defineProperty(OrderService.prototype, "noOfItems$", {
        get: function () {
            return this._noOfItems$.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    OrderService.prototype.getOrders = function (page, itemsPerPage, orderParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_4__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (orderParams != null) {
            if (orderParams.orderDate != null) {
                params = params.append('orderDate', orderParams.orderDate);
            }
            if (orderParams.employeeId != null) {
                params = params.append('employeeId', orderParams.employeeId);
            }
            if (orderParams.customerId != null) {
                params = params.append('customerId', orderParams.customerId);
            }
        }
        return this.http
            .get(this.baseUrl, { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    OrderService.prototype.getOrder = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    OrderService.prototype.addOrder = function () {
        this.order.customerId = 'VINET';
        this.order.orderDate = new Date();
        return this.http.post(this.baseUrl + '/add', this.order);
    };
    OrderService.prototype.initializeOrder = function () {
        if (sessionStorage.getItem('cart') == null) {
            this.order = {
                customerId: '',
                orderId: 0,
                employeeId: null,
                customer: null,
                employee: null,
                freight: null,
                orderDate: null,
                orderDetails: [],
                requiredDate: null,
                shipAddress: null,
                shipCity: null,
                shipCountry: null,
                shipPostalCode: null,
                shipRegion: null,
                shipVia: null,
                shippedDate: null
            };
        }
        else {
            this.order = JSON.parse(sessionStorage.getItem('cart'));
        }
        return this.order;
    };
    OrderService.prototype.getNoOfItemsInCart = function () {
        if (sessionStorage.getItem('cart') == null) {
            return 0;
        }
        else {
            this.order = JSON.parse(sessionStorage.getItem('cart'));
            var ct_1 = 0;
            this.order.orderDetails.map(function (o) {
                ct_1 += o.quantity;
            });
            return ct_1;
        }
    };
    OrderService.prototype.addToCart = function (item) {
        // push item
        var itemExists = false;
        this.order.orderDetails.map(function (detail) {
            if (detail.productId === item.productId) {
                itemExists = true;
                detail.quantity++;
            }
        });
        if (!itemExists) {
            this.order.orderDetails.push(item);
        }
        // update sessionStorage
        sessionStorage.setItem('cart', JSON.stringify(this.order));
        // notify suscribers
        this._cartDataSource.next(this.order);
        this._noOfItems$.next(this.getNoOfItemsInCart());
    };
    OrderService.prototype.getOrderInCart = function () {
        return this.order;
    };
    OrderService.prototype.clearCart = function () {
        if (sessionStorage.getItem('cart') != null) {
            sessionStorage.removeItem('cart');
        }
        this.initializeOrder();
        // notify suscribers
        this._cartDataSource.next(this.order);
        this._noOfItems$.next(0);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/_services/product.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/pagination */ "./src/app/_models/pagination.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'product';
    }
    ProductService.prototype.getProducts = function (page, itemsPerPage, productParams) {
        var paginatedResult = new _models_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatedResult"]();
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }
        if (productParams != null) {
            if (productParams.productName != null) {
                params = params.append('productName', productParams.productName);
            }
            if (productParams.categoryId != null) {
                params = params.append('categoryId', productParams.categoryId);
            }
        }
        return this.http.get(this.baseUrl, { observe: 'response', params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            paginatedResult.result = response.body;
            if (response.headers.get('Pagination') != null) {
                paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
            }
            return paginatedResult;
        }));
    };
    ProductService.prototype.getProduct = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    ProductService.prototype.addProduct = function (model) {
        return this.http.post(this.baseUrl + '/add', model);
    };
    ProductService.prototype.editProduct = function (id, model) {
        return this.http.post(this.baseUrl + '/' + id, model);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/_services/supplier.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/supplier.service.ts ***!
  \***********************************************/
/*! exports provided: SupplierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierService", function() { return SupplierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupplierService = /** @class */ (function () {
    function SupplierService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + 'supplier';
    }
    SupplierService.prototype.getSuppliers = function () {
        return this.http.get(this.baseUrl);
    };
    SupplierService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SupplierService);
    return SupplierService;
}());



/***/ }),

/***/ "./src/app/actions.ts":
/*!****************************!*\
  !*** ./src/app/actions.ts ***!
  \****************************/
/*! exports provided: ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CART", function() { return CLEAR_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FROM_CART", function() { return REMOVE_FROM_CART; });
var ADD_TO_CART = 'ADD_TO_CART';
var CLEAR_CART = 'CLEAR_CART';
var REMOVE_FROM_CART = 'REMOVE_FROM_CART';


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/pagination/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _services_error_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/error.interceptor */ "./src/app/_services/error.interceptor.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/category.service */ "./src/app/_services/category.service.ts");
/* harmony import */ var _category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./category/category-detail/category-detail.component */ "./src/app/category/category-detail/category-detail.component.ts");
/* harmony import */ var _resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_resolvers/categories-resolver */ "./src/app/_resolvers/categories-resolver.ts");
/* harmony import */ var _resolvers_category_detail_resolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_resolvers/category-detail-resolver */ "./src/app/_resolvers/category-detail-resolver.ts");
/* harmony import */ var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./category/category-edit/category-edit.component */ "./src/app/category/category-edit/category-edit.component.ts");
/* harmony import */ var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./category/category-add/category-add.component */ "./src/app/category/category-add/category-add.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./product/product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./product/product-edit/product-edit.component */ "./src/app/product/product-edit/product-edit.component.ts");
/* harmony import */ var _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./product/product-add/product-add.component */ "./src/app/product/product-add/product-add.component.ts");
/* harmony import */ var _services_supplier_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_services/supplier.service */ "./src/app/_services/supplier.service.ts");
/* harmony import */ var _orders_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./orders/order-detail/order-detail.component */ "./src/app/orders/order-detail/order-detail.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _shop_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shop/product-card/product-card.component */ "./src/app/shop/product-card/product-card.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_9__["CategoryComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _orders_orders_component__WEBPACK_IMPORTED_MODULE_12__["OrdersComponent"],
                _orders_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_28__["OrderDetailComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_18__["CategoryDetailComponent"],
                _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_21__["CategoryEditComponent"],
                _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_22__["CategoryAddComponent"],
                _product_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_24__["ProductDetailComponent"],
                _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_25__["ProductEditComponent"],
                _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_26__["ProductAddComponent"],
                _shop_shop_component__WEBPACK_IMPORTED_MODULE_29__["ShopComponent"],
                _shop_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_30__["ProductCardComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_31__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_14__["appRoutes"]),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _angular_redux_store__WEBPACK_IMPORTED_MODULE_7__["NgReduxModule"]
            ],
            providers: [
                _services_error_interceptor__WEBPACK_IMPORTED_MODULE_15__["ErrorInterceptorProvider"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_16__["AlertifyService"],
                _services_category_service__WEBPACK_IMPORTED_MODULE_17__["CategoryService"],
                _resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_19__["CategoriesResolver"],
                _resolvers_category_detail_resolver__WEBPACK_IMPORTED_MODULE_20__["CategoryDetailResolver"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_23__["ProductService"],
                _services_supplier_service__WEBPACK_IMPORTED_MODULE_27__["SupplierService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br />\r\n  <form class=\"form-horizontal\" (ngSubmit)=\"placeOrder()\">\r\n    <table class=\"table table-condensed table-hover\">\r\n      <tbody>\r\n        <tr *ngFor=\"let o of order.orderDetails\">\r\n          <td>{{ o.productName }}</td>\r\n          <td>{{ o.unitPrice | number: \"1.2-5\" | currency }}</td>\r\n          <td>{{ o.quantity }}</td>\r\n          <td align=\"right\">\r\n            {{ o.unitPrice * o.quantity | number: \"1.2-5\" | currency }}\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <td colspan=\"4\" align=\"right\">\r\n          Total Price : {{ totalPrice | number: \"1.2-5\" | currency }}\r\n        </td>\r\n      </tfoot>\r\n    </table>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartComponent = /** @class */ (function () {
    function CartComponent(orderService, router, alertify) {
        this.orderService = orderService;
        this.router = router;
        this.alertify = alertify;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.totalPrice = 0;
        this.order = this.orderService.getOrderInCart();
        this.order.orderDetails.map(function (o) {
            _this.totalPrice += o.unitPrice * o.quantity;
        });
    };
    CartComponent.prototype.placeOrder = function () {
        var _this = this;
        this.orderService.addOrder().subscribe(function (data) {
            console.log(data);
            _this.orderService.clearCart();
            _this.alertify.success('Order Added !');
            _this.router.navigate(['/orders/', data.orderId]);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/category/category-add/category-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category-add/category-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form #categoryForm=\"ngForm\" class=\"form-horizontal\" (ngSubmit)=\"add()\">\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"categoryName\">Category Name:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input class=\"form-control\" type=\"text\"\r\n            name=\"categoryName\" required [(ngModel)]=\"category.categoryName\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"description\">Description:</label>\r\n      <div class=\"col-sm-10\">\r\n        <textarea class=\"form-control\" name=\"description\"\r\n            rows=\"2\" required [(ngModel)]=\"category.description\"></textarea>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\"> \r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button type=\"submit\" [disabled]=\"!categoryForm.valid\" class=\"btn btn-primary\">Submit</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"cancel()\">Cancel</button>\r\n        </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/category/category-add/category-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/category/category-add/category-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: CategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryAddComponent", function() { return CategoryAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/category.service */ "./src/app/_services/category.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryAddComponent = /** @class */ (function () {
    function CategoryAddComponent(categoryService, router, alertify) {
        this.categoryService = categoryService;
        this.router = router;
        this.alertify = alertify;
        this.category = {
            categoryId: 0,
            categoryName: '',
            description: '',
            products: null
        };
    }
    CategoryAddComponent.prototype.ngOnInit = function () {
    };
    CategoryAddComponent.prototype.add = function () {
        var _this = this;
        this.categoryService.addCategory(this.category)
            .subscribe(function (data) {
            _this.alertify.success('Category Added !');
            _this.router.navigate(['/category/', data.categoryId]);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    CategoryAddComponent.prototype.cancel = function () {
        this.router.navigate(['/category']);
    };
    CategoryAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-add',
            template: __webpack_require__(/*! ./category-add.component.html */ "./src/app/category/category-add/category-add.component.html"),
            styles: [__webpack_require__(/*! ./category-add.component.css */ "./src/app/category/category-add/category-add.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], CategoryAddComponent);
    return CategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/category/category-detail/category-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/category/category-detail/category-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category-detail/category-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/category/category-detail/category-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <table class=\"table table-condensed table-hover\">\r\n    <tbody>\r\n      <tr>\r\n        <td>Category Id</td>\r\n        <td>{{category?.categoryId}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Category Name</td>\r\n        <td>{{category?.categoryName}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>Description</td>\r\n        <td>{{category?.description}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td>\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/category/edit/', category.categoryId]\">Edit</a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/category/category-detail/category-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/category/category-detail/category-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: CategoryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailComponent", function() { return CategoryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryDetailComponent = /** @class */ (function () {
    function CategoryDetailComponent(http, alertify, route) {
        this.http = http;
        this.alertify = alertify;
        this.route = route;
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.category = data['category'];
        });
    };
    CategoryDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-detail',
            template: __webpack_require__(/*! ./category-detail.component.html */ "./src/app/category/category-detail/category-detail.component.html"),
            styles: [__webpack_require__(/*! ./category-detail.component.css */ "./src/app/category/category-detail/category-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoryDetailComponent);
    return CategoryDetailComponent;
}());



/***/ }),

/***/ "./src/app/category/category-edit/category-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/category/category-edit/category-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category-edit/category-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/category/category-edit/category-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form [formGroup]=\"categoryForm\" (ngSubmit)=\"edit()\" class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n          <label class=\"control-label col-sm-2\" for=\"categoryId\">Category Id:</label>\r\n          <div class=\"col-sm-10\">\r\n            <input class=\"form-control\" type=\"text\" formControlName=\"categoryId\">\r\n          </div>\r\n        </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"categoryName\">Category Name:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input [ngClass]=\"{'is-invalid': categoryForm.get('categoryName').errors && categoryForm.get('categoryName').touched}\"\r\n            class=\"form-control\" type=\"text\" formControlName=\"categoryName\">\r\n          <div class=\"invalid-feedback\" *ngIf=\"categoryForm.get('categoryName').touched && categoryForm.get('categoryName').hasError('required')\">\r\n            Category Name is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"description\">Description:</label>\r\n        <div class=\"col-sm-10\">\r\n          <textarea class=\"form-control\" rows=\"2\" formControlName=\"description\"\r\n            [ngClass]=\"{'is-invalid': categoryForm.get('description').errors && categoryForm.get('description').touched}\">\r\n          </textarea>\r\n          <div class=\"invalid-feedback\" *ngIf=\"categoryForm.get('description').touched && categoryForm.get('description').hasError('required')\">\r\n              Description is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <div class=\"col-sm-6\">\r\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"cancel()\">Cancel</button>\r\n          </div>\r\n      </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/category/category-edit/category-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/category/category-edit/category-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: CategoryEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditComponent", function() { return CategoryEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/category.service */ "./src/app/_services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryEditComponent = /** @class */ (function () {
    function CategoryEditComponent(alertify, route, router, categoryService, fb) {
        this.alertify = alertify;
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
        this.fb = fb;
    }
    CategoryEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.category = data['category'];
            _this.createCategoryForm();
        });
    };
    CategoryEditComponent.prototype.createCategoryForm = function () {
        this.categoryForm = this.fb.group({
            categoryId: [this.category.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            categoryName: [this.category.categoryName, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15)]],
            description: [this.category.description, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    CategoryEditComponent.prototype.edit = function () {
        var _this = this;
        this.categoryService.editCategory(this.category.categoryId, this.categoryForm.value)
            .subscribe(function (data) {
            _this.alertify.success('Category Edited !');
            _this.router.navigate(['/category/', data.categoryId]);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    CategoryEditComponent.prototype.cancel = function () {
        this.router.navigate(['/category/', this.category.categoryId]);
    };
    CategoryEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category-edit',
            template: __webpack_require__(/*! ./category-edit.component.html */ "./src/app/category/category-edit/category-edit.component.html"),
            styles: [__webpack_require__(/*! ./category-edit.component.css */ "./src/app/category/category-edit/category-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_1__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], CategoryEditComponent);
    return CategoryEditComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        <th><a class=\"btn btn-primary\" [routerLink]=\"['/category/new']\">Add New</a></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let c of categories\">\r\n        <td>{{c.categoryId}}</td>\r\n        <td>{{c.categoryName}}</td>\r\n        <td>{{c.description}}</td>\r\n        <td>\r\n          <a class=\"btn btn-primary\" [routerLink]=\"['/category/', c.categoryId]\">\r\n            <i class=\"fa fa-pencil-square-o\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(route) {
        this.route = route;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.categories = data['categories'];
        });
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n  <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Northwind App</a>\r\n  <ul class=\"navbar-nav mr-auto\">\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/category']\">Categories</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/product']\">Products</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/orders']\">Orders</a>\r\n    </li>\r\n    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n      <a class=\"nav-link\" [routerLink]=\"['/shop']\">Shop</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav justify-content-end\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"btn btn-secondary\" [routerLink]=\"['/cart']\">\r\n        <i class=\"fa fa-shopping-cart\" style='font-size:24px'></i>\r\n        <span style=\"margin-left: .5rem;\" class=\"badge badge-light\">{{noOfItems}}</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"nav-item\" style=\"margin-left: .5rem;\">\r\n      <a class=\"btn btn-secondary\" [routerLink]=\"['/cart']\">\r\n        <i class=\"fa fa-shopping-cart\" style='font-size:24px'></i>\r\n        <span style=\"margin-left: .5rem;\" class=\"badge badge-light\">{{noOfItems$ |async}}</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(orderService) {
        this.orderService = orderService;
    }
    Object.defineProperty(NavComponent.prototype, "noOfItems$", {
        get: function () {
            return this.orderService.noOfItems$;
        },
        enumerable: true,
        configurable: true
    });
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.orderService.cartData.subscribe(function (order) {
            var ct = 0;
            order.orderDetails.map(function (o) {
                ct += o.quantity;
            });
            _this.noOfItems = ct.toString();
        });
    };
    NavComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-detail/order-detail.component.css":
/*!****************************************************************!*\
  !*** ./src/app/orders/order-detail/order-detail.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/order-detail/order-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/orders/order-detail/order-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"order\">\r\n  <br>\r\n  <div class=\"form-group row\">\r\n    <label class=\"col-2 col-form-label\">Order Id</label>\r\n    <div class=\"col-4\">\r\n        {{order.orderId}}\r\n    </div>\r\n    <label class=\"col-2 col-form-label\">Order Date</label>\r\n    <div class=\"col-4\">\r\n      {{order.orderDate | date: 'MM/dd/yyyy'}}\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-condensed table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th>Product</th>\r\n          <th>Unitprice</th>\r\n          <th>Quantity</th>\r\n          <th>Discount</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let c of order.orderDetails\">\r\n          <td>{{c.productId}}</td>\r\n          <td>{{c.unitPrice | number:'1.2-5' | currency}}</td>\r\n          <td>{{c.quantity}}</td>\r\n          <td>{{c.discount | number:'1.2-5' | currency}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./src/app/orders/order-detail/order-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/orders/order-detail/order-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(orderService, alertify, router, route) {
        this.orderService = orderService;
        this.alertify = alertify;
        this.router = router;
        this.route = route;
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.GetOrder(+this.route.snapshot.params['id']);
    };
    OrderDetailComponent.prototype.GetOrder = function (id) {
        var _this = this;
        this.orderService.getOrder(id)
            .subscribe(function (data) {
            _this.order = data;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    OrderDetailComponent.prototype.Cancel = function () {
        this.router.navigate(['/orders']);
    };
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/orders/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/orders/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.css":
/*!*********************************************!*\
  !*** ./src/app/orders/orders.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadOrders()\" novalidate>\r\n    <label for=\"orderDate\" class=\"mb-2 mr-sm-2\">Order Date</label>\r\n    <input class=\"form-control mb-2 mr-sm-2\" type=\"text\" name=\"orderDate\" title=\"Searches +/- 10 days\" [bsConfig]=\"bsConfig\" \r\n          bsDatepicker [(ngModel)]=\"orderParams.orderDate\">\r\n    <!-- <label for=\"categoryId\" class=\"mb-2 mr-sm-2\">Category Id</label>\r\n    <select class=\"form-control mb-2 mr-sm-2\" name=\"categoryId\" [(ngModel)]=\"productParams.categoryId\">\r\n      <option *ngFor=\"let c of categories\" [ngValue]=\"c.categoryId\">\r\n        {{c.categoryName}}\r\n      </option>\r\n    </select> -->\r\n    <button type=\"submit\" class=\"btn btn-primary mb-2 mr-sm-2\">Search</button>\r\n    <button type=\"button\" class=\"btn btn-secondary mb-2\" (click)=\"reset()\">Reset</button>\r\n  </form>\r\n  <br>\r\n  <table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Order Date</th>\r\n        <th>Customer</th>\r\n        <th>Employee</th>\r\n        <th>Shipped To</th>\r\n        <th>Freight</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let c of orders\">\r\n        <td>{{c.orderId}}</td>\r\n        <td>{{c.orderDate | date:'MM/dd/yyyy'}}</td>\r\n        <td>{{c.customer}}</td>\r\n        <td>{{c.employee}}</td>\r\n        <td><span *ngIf=\"c.shipCity\">{{c.shipCity}}, {{c.shipCountry}}</span></td>\r\n        <td>{{c.freight | number:'1.2-5' | currency}}</td>\r\n        <td>\r\n          <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/orders/', c.orderId]\">\r\n            <i class=\"fa fa-pencil-square-o\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div *ngIf=\"pagination\" class=\"d-flex justify-content-center\">\r\n    <pagination [maxSize]=\"5\" [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n      [(ngModel)]=\"pagination.currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(orderService, alertify) {
        this.orderService = orderService;
        this.alertify = alertify;
        this.orderParams = {};
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.bsConfig = {
            containerClass: 'theme-default',
            dateInputFormat: 'MM/DD/YYYY'
        };
        this.pagination = {
            currentPage: 1,
            itemsPerPage: 5,
            totalItems: 0,
            totalPages: 0
        };
        this.getOrders();
    };
    OrdersComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.pagination.itemsPerPage = event.itemsPerPage;
        this.getOrders();
    };
    OrdersComponent.prototype.loadOrders = function () {
        this.getOrders();
    };
    OrdersComponent.prototype.reset = function () {
        this.orderParams = {};
        this.getOrders();
    };
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.orderParams.orderDate = new _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]('en-US').transform(this.orderParams.orderDate, 'MM/dd/yyyy');
        this.orderService.getOrders(this.pagination.currentPage, this.pagination.itemsPerPage, this.orderParams)
            .subscribe(function (data) {
            _this.orders = data.result;
            _this.pagination = data.pagination;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html"),
            styles: [__webpack_require__(/*! ./orders.component.css */ "./src/app/orders/orders.component.css")]
        }),
        __metadata("design:paramtypes", [_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/product/product-add/product-add.component.css":
/*!***************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-add/product-add.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div *ngIf=\"product\">\r\n      <app-product-detail\r\n        [product]=\"product\"\r\n        [isNew]=\"true\"\r\n        (cancelEvent)=\"cancel($event)\"\r\n      ></app-product-detail>\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/product/product-add/product-add.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/product-add/product-add.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(router) {
        this.router = router;
        this.product = {
            productId: 0,
            productName: null,
            categoryId: null,
            unitPrice: null,
            supplierId: null,
            quantityPerUnit: null,
            unitsInStock: null,
            unitsOnOrder: null,
            reorderLevel: null,
            discontinued: false,
            categoryName: null,
            supplierName: null
        };
    }
    ProductAddComponent.prototype.ngOnInit = function () {
    };
    ProductAddComponent.prototype.cancel = function ($event) {
        this.router.navigate(['/product']);
    };
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"productForm\" (ngSubmit)=\"submit()\" class=\"\">\r\n  <br>\r\n  <div class=\"form-group row\">\r\n    <label for=\"example-text-input\" class=\"col-2 col-form-label\">Product Name</label>\r\n    <div class=\"col-4\">\r\n      <input [ngClass]=\"{'is-invalid': productForm.get('productName').errors && productForm.get('productName').touched}\"\r\n        class=\"form-control\" type=\"text\" formControlName=\"productName\">\r\n      <div class=\"invalid-feedback\" *ngIf=\"productForm.get('productName').touched && productForm.get('productName').hasError('required')\">\r\n        Product Name is required</div>\r\n    </div>\r\n    <label *ngIf=\"!isNew\" for=\"example-number-input\" class=\"col-2 col-form-label\">Product Id</label>\r\n    <div *ngIf=\"!isNew\" class=\"col-4\">\r\n      <input class=\"form-control\" type=\"number\" formControlName=\"productId\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Category</label>\r\n    <div class=\"col-4\">\r\n      <select [ngClass]=\"{'is-invalid': productForm.get('categoryId').errors && productForm.get('categoryId').touched}\"\r\n        class=\"form-control\" formControlName=\"categoryId\">\r\n        <option *ngFor=\"let c of categories\" [ngValue]=\"c.categoryId\">\r\n          {{c.categoryName}}\r\n        </option>\r\n      </select>\r\n      <div class=\"invalid-feedback\" *ngIf=\"productForm.get('categoryId').touched && productForm.get('categoryId').hasError('required')\">\r\n        Category is required</div>\r\n    </div>\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Supplier</label>\r\n    <div class=\"col-4\">\r\n      <select class=\"form-control\" formControlName=\"supplierId\">\r\n        <option *ngFor=\"let s of suppliers\" [ngValue]=\"s.supplierId\">\r\n          {{s.companyName}}\r\n        </option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Unit Price</label>\r\n    <div class=\"col-4\">\r\n        <input class=\"form-control\" type=\"number\" formControlName=\"unitPrice\">\r\n    </div>\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Quantity Per Unit</label>\r\n    <div class=\"col-4\">\r\n        <input class=\"form-control\" type=\"text\" formControlName=\"quantityPerUnit\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Units In Stock</label>\r\n    <div class=\"col-4\">\r\n        <input class=\"form-control\" type=\"number\" formControlName=\"unitsInStock\">\r\n    </div>\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Units On Order</label>\r\n    <div class=\"col-4\">\r\n        <input class=\"form-control\" type=\"number\" formControlName=\"unitsOnOrder\">\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Reorder Level</label>\r\n    <div class=\"col-4\">\r\n        <input class=\"form-control\" type=\"number\" formControlName=\"reorderLevel\">\r\n    </div>\r\n    <label for=\"example-number-input\" class=\"col-2 col-form-label\">Discontinued</label>\r\n    <div class=\"col-4\">\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"discontinued\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group row\">\r\n      <div class=\"col-1\">\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n      </div>\r\n      <div class=\"col-11\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"cancel()\">Cancel</button>\r\n      </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/category.service */ "./src/app/_services/category.service.ts");
/* harmony import */ var src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_services/supplier.service */ "./src/app/_services/supplier.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(fb, productService, categoryService, supplierService, alertify, router) {
        this.fb = fb;
        this.productService = productService;
        this.categoryService = categoryService;
        this.supplierService = supplierService;
        this.alertify = alertify;
        this.router = router;
        this.cancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.createProductForm();
        this.getCategories();
        this.getSuppliers();
    };
    ProductDetailComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (data) {
            _this.categories = data;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    ProductDetailComponent.prototype.getSuppliers = function () {
        var _this = this;
        this.supplierService.getSuppliers()
            .subscribe(function (data) {
            _this.suppliers = data;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    ProductDetailComponent.prototype.createProductForm = function () {
        this.productForm = this.fb.group({
            productId: [{ value: this.product.productId, disabled: true }],
            categoryId: [this.product.categoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            productName: [this.product.productName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            unitPrice: [this.product.unitPrice],
            supplierId: [this.product.supplierId],
            quantityPerUnit: [this.product.quantityPerUnit],
            unitsInStock: [this.product.unitsInStock],
            unitsOnOrder: [this.product.unitsOnOrder],
            reorderLevel: [this.product.reorderLevel],
            discontinued: [this.product.discontinued]
        });
    };
    ProductDetailComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.isNew);
        console.log(this.productForm.getRawValue());
        if (this.isNew) {
            this.productService.addProduct(this.productForm.getRawValue())
                .subscribe(function (data) {
                _this.alertify.success('Product Added !');
                _this.router.navigate(['/product/', data.productId]);
            }, function (err) {
                _this.alertify.error(err);
            });
        }
        else {
            this.productService.editProduct(this.product.productId, this.productForm.getRawValue())
                .subscribe(function (data) {
                _this.alertify.success('Product Edited !');
                _this.router.navigate(['/product/', data.productId]);
            }, function (err) {
                _this.alertify.error(err);
            });
        }
    };
    ProductDetailComponent.prototype.cancel = function () {
        this.cancelEvent.emit('Cancelled ...');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProductDetailComponent.prototype, "isNew", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductDetailComponent.prototype, "cancelEvent", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            src_app_services_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"],
            src_app_services_supplier_service__WEBPACK_IMPORTED_MODULE_6__["SupplierService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/product/product-edit/product-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-edit/product-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div *ngIf=\"product\">\r\n    <app-product-detail\r\n      [product]=\"product\"\r\n      [isNew]=\"false\"\r\n      (cancelEvent)=\"cancel($event)\"\r\n    ></app-product-detail>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/product-edit/product-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-edit/product-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditComponent", function() { return ProductEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(productService, alertify, router, route) {
        this.productService = productService;
        this.alertify = alertify;
        this.router = router;
        this.route = route;
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        this.GetProduct(+this.route.snapshot.params['id']);
    };
    ProductEditComponent.prototype.GetProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (data) {
            _this.product = data;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    ProductEditComponent.prototype.cancel = function ($event) {
        this.router.navigate(['/product']);
    };
    ProductEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__(/*! ./product-edit.component.html */ "./src/app/product/product-edit/product-edit.component.html"),
            styles: [__webpack_require__(/*! ./product-edit.component.css */ "./src/app/product/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            src_app_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <br>\r\n  <form class=\"form-inline\" #form=\"ngForm\" (ngSubmit)=\"loadProducts()\" novalidate>\r\n    <label for=\"productName\" class=\"mb-2 mr-sm-2\">Product Name</label>\r\n    <input class=\"form-control mb-2 mr-sm-2\" type=\"text\" name=\"productName\" [(ngModel)]=\"productParams.productName\">\r\n    <label for=\"categoryId\" class=\"mb-2 mr-sm-2\">Category Id</label>\r\n    <select class=\"form-control mb-2 mr-sm-2\" name=\"categoryId\" [(ngModel)]=\"productParams.categoryId\">\r\n      <option *ngFor=\"let c of categories\" [ngValue]=\"c.categoryId\">\r\n        {{c.categoryName}}\r\n      </option>\r\n    </select>\r\n    <button type=\"submit\" class=\"btn btn-primary mb-2 mr-sm-2\">Search</button>\r\n    <button type=\"button\" class=\"btn btn-secondary mb-2\" (click)=\"reset()\">Reset</button>\r\n  </form>\r\n  <br>\r\n  <table class=\"table table-condensed table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Category</th>\r\n        <th>Supplier</th>\r\n        <th>Unit Price</th>\r\n        <th><a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/product/new']\">Add New</a></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let c of products\">\r\n        <td>{{c.productId}}</td>\r\n        <td>{{c.productName}}</td>\r\n        <td>{{c.categoryName}}</td>\r\n        <td>{{c.supplierName}}</td>\r\n        <td>{{c.unitPrice | number:'1.2-5' | currency}}</td>\r\n        <td>\r\n          <a class=\"btn btn-primary btn-sm\" [routerLink]=\"['/product/', c.productId]\">\r\n            <i class=\"fa fa-pencil-square-o\"></i>\r\n          </a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div *ngIf=\"pagination\" class=\"d-flex justify-content-center\">\r\n    <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\"\r\n      [(ngModel)]=\"pagination.currentPage\" (pageChanged)=\"pageChanged($event)\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\"\r\n      firstText=\"&laquo;\" lastText=\"&raquo;\">\r\n    </pagination>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/product.service */ "./src/app/_services/product.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/category.service */ "./src/app/_services/category.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, categoryService, alertify) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.alertify = alertify;
        this.productParams = {};
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.pagination = {
            currentPage: 1,
            itemsPerPage: 5,
            totalItems: 0,
            totalPages: 0
        };
        this.getProducts();
        this.getCategories();
    };
    ProductComponent.prototype.loadProducts = function () {
        this.getProducts();
    };
    ProductComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (data) {
            _this.categories = data;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    ProductComponent.prototype.reset = function () {
        this.productParams = {};
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts(this.pagination.currentPage, this.pagination.itemsPerPage, this.productParams)
            .subscribe(function (data) {
            _this.products = data.result;
            _this.pagination = data.pagination;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    ProductComponent.prototype.pageChanged = function (event) {
        this.pagination.currentPage = event.page;
        this.pagination.itemsPerPage = event.itemsPerPage;
        this.getProducts();
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/orders/orders.component.ts");
/* harmony import */ var _category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category/category-detail/category-detail.component */ "./src/app/category/category-detail/category-detail.component.ts");
/* harmony import */ var _resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_resolvers/categories-resolver */ "./src/app/_resolvers/categories-resolver.ts");
/* harmony import */ var _resolvers_category_detail_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_resolvers/category-detail-resolver */ "./src/app/_resolvers/category-detail-resolver.ts");
/* harmony import */ var _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category/category-edit/category-edit.component */ "./src/app/category/category-edit/category-edit.component.ts");
/* harmony import */ var _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./category/category-add/category-add.component */ "./src/app/category/category-add/category-add.component.ts");
/* harmony import */ var _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product/product-edit/product-edit.component */ "./src/app/product/product-edit/product-edit.component.ts");
/* harmony import */ var _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product/product-add/product-add.component */ "./src/app/product/product-add/product-add.component.ts");
/* harmony import */ var _orders_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orders/order-detail/order-detail.component */ "./src/app/orders/order-detail/order-detail.component.ts");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shop/shop.component */ "./src/app/shop/shop.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");














var appRoutes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_1__["CategoryComponent"], resolve: { categories: _resolvers_categories_resolver__WEBPACK_IMPORTED_MODULE_5__["CategoriesResolver"] } },
            { path: 'category/new', component: _category_category_add_category_add_component__WEBPACK_IMPORTED_MODULE_8__["CategoryAddComponent"] },
            { path: 'category/:id', component: _category_category_detail_category_detail_component__WEBPACK_IMPORTED_MODULE_4__["CategoryDetailComponent"], resolve: { category: _resolvers_category_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailResolver"] } },
            { path: 'category/edit/:id', component: _category_category_edit_category_edit_component__WEBPACK_IMPORTED_MODULE_7__["CategoryEditComponent"], resolve: { category: _resolvers_category_detail_resolver__WEBPACK_IMPORTED_MODULE_6__["CategoryDetailResolver"] } },
        ]
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"] },
            { path: 'product/new', component: _product_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_10__["ProductAddComponent"] },
            { path: 'product/:id', component: _product_product_edit_product_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditComponent"] },
        ]
    },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'orders', component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"] },
            { path: 'orders/:id', component: _orders_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailComponent"] },
        ]
    },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_13__["CartComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/shop/product-card/product-card.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shop/product-card/product-card.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shop/product-card/product-card.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shop/product-card/product-card.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 15rem; margin: 1rem;\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{ product.productName }}</h5>\r\n    <p class=\"card-text\">\r\n      {{ product.unitPrice | number: \"1.2-5\" | currency }}\r\n    </p>\r\n    <button class=\"btn btn-secondary btn-sm\" (click)=\"addToCart()\">\r\n      <i class=\"fa fa-shopping-cart\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shop/product-card/product-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shop/product-card/product-card.component.ts ***!
  \*************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent() {
        this.addToCartEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.addToCart = function () {
        this.orderDetail = {
            productId: this.product.productId,
            discount: 0,
            productName: this.product.productName,
            orderId: 0,
            quantity: 1,
            unitPrice: this.product.unitPrice
        };
        this.addToCartEvent.emit(this.orderDetail);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "addToCartEvent", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/shop/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.css */ "./src/app/shop/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shop/shop.component.css":
/*!*****************************************!*\
  !*** ./src/app/shop/shop.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shop/shop.component.html":
/*!******************************************!*\
  !*** ./src/app/shop/shop.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n          <select class=\"form-control mb-2 mr-sm-2\" name=\"categoryId\" [(ngModel)]=\"categoryId\" (change)=\"getProducts()\">\r\n              <option *ngFor=\"let c of categories\" [ngValue]=\"c.categoryId\">\r\n                {{c.categoryName}}\r\n              </option>\r\n          </select>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"card-deck\" *ngIf=\"products\">\r\n      <app-product-card *ngFor=\"let p of products\" [product]=\"p\" (addToCartEvent)=\"addToCart($event)\"></app-product-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shop/shop.component.ts":
/*!****************************************!*\
  !*** ./src/app/shop/shop.component.ts ***!
  \****************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/category.service */ "./src/app/_services/category.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/order.service */ "./src/app/_services/order.service.ts");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-redux/store */ "./node_modules/@angular-redux/store/lib/src/index.js");
/* harmony import */ var _angular_redux_store__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShopComponent = /** @class */ (function () {
    function ShopComponent(categoryService, orderService, alertify, ngRedux) {
        this.categoryService = categoryService;
        this.orderService = orderService;
        this.alertify = alertify;
        this.ngRedux = ngRedux;
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    ShopComponent.prototype.ngOnDestroy = function () {
    };
    ShopComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (data) {
            _this.categories = data;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    ShopComponent.prototype.getProducts = function () {
        var _this = this;
        this.categoryService.getProductsByCategory(this.categoryId).subscribe(function (data) {
            _this.products = data;
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    ShopComponent.prototype.addToCart = function ($event) {
        this.ngRedux.dispatch({ type: _actions__WEBPACK_IMPORTED_MODULE_5__["ADD_TO_CART"], item: $event });
        this.orderService.addToCart($event);
        this.alertify.success('Item added to cart');
    };
    __decorate([
        Object(_angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["select"])(),
        __metadata("design:type", Object)
    ], ShopComponent.prototype, "order", void 0);
    ShopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__(/*! ./shop.component.html */ "./src/app/shop/shop.component.html"),
            styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/shop/shop.component.css")]
        }),
        __metadata("design:paramtypes", [_services_category_service__WEBPACK_IMPORTED_MODULE_1__["CategoryService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_2__["AlertifyService"],
            _angular_redux_store__WEBPACK_IMPORTED_MODULE_4__["NgRedux"]])
    ], ShopComponent);
    return ShopComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://localhost:5000/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nvsid\source\repos\NorthwindApp\northwindapp-spa\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map