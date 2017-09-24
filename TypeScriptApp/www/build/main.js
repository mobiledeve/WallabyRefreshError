webpackJsonp([0],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataFilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ODataFilterBuilderFactory__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ODataFilterService = (function () {
    function ODataFilterService(filterBuilderFactory) {
        var _this = this;
        this.filterBuilderFactory = filterBuilderFactory;
        this.getOdataFilter = function (entity, options) {
            var filterStr = '';
            if (options.filterData) {
                var filterNames = Object.keys(options.filterData);
                for (var _i = 0, filterNames_1 = filterNames; _i < filterNames_1.length; _i++) {
                    var filterName = filterNames_1[_i];
                    var filterForProperty = _this.getFilterForProperty(entity, options, filterName);
                    if (filterStr && filterForProperty) {
                        filterStr += " and ";
                    }
                    filterStr += filterForProperty;
                }
                if (filterStr) {
                    filterStr = '&$filter=' + filterStr;
                }
            }
            return filterStr;
        };
        this.getFilterForProperty = function (entity, options, filterName) {
            var property = entity.properties.find(function (p) { return p.name.name === filterName; });
            var propertyType = property.type;
            var filterBuilder = _this.filterBuilderFactory.createFilterBuilder(propertyType);
            return filterBuilder.getFilter(options.filterData, property);
        };
    }
    return ODataFilterService;
}());
ODataFilterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ODataFilterBuilderFactory__["a" /* ODataFilterBuilderFactory */]])
], ODataFilterService);

//# sourceMappingURL=ODataFilterService.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColumnVm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResponsiveTable_SortDirection__ = __webpack_require__(47);

var TableColumnVm = (function () {
    function TableColumnVm() {
        this.sortDirection = __WEBPACK_IMPORTED_MODULE_0__ResponsiveTable_SortDirection__["a" /* SortDirection */].Unsorted;
        this.isVisible = true;
    }
    return TableColumnVm;
}());

//# sourceMappingURL=TableColumnVm.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export App */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var App = (function () {
    function App() {
        this.name = "MyApp";
    }
    return App;
}());

var EntityMap = (function () {
    function EntityMap(http, loadingCtrl) {
        var _this = this;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.loaded = false;
        this.app = new App();
        this.completedSubscribers = [];
        this.entities = [];
        this.loadEntities = function () {
            console.log("EntityMap.loadEntities");
            console.trace();
            if (!_this.loaded) {
                _this.loaded = false;
                _this.showLoading();
                _this.http.get("http://localhost:2244/api/entity/Get")
                    .map(function (res) {
                    return res.json();
                })
                    .subscribe(_this.acceptData, _this.downloadError, _this.downloadComplete);
            }
        };
        this.addCompletedSubscribers = function (callback) {
            _this.completedSubscribers.push(callback);
        };
        this.emptyCompletedSubscribers = function () {
            _this.completedSubscribers.length = 0;
        };
        this.showLoading = function () {
            if (_this.entities.length === 0) {
                _this.loader = _this.loadingCtrl.create({
                    content: 'Loading...',
                    dismissOnPageChange: false
                });
                _this.loader.present();
            }
        };
        this.downloadError = function (err) {
            console.log(err);
        };
        this.acceptData = function (entityList) {
            console.log("EntityMap.acceptData");
            _this.entities.length = 0;
            for (var _i = 0, entityList_1 = entityList; _i < entityList_1.length; _i++) {
                var item = entityList_1[_i];
                _this.entities.push(item);
            }
            _this.loaded = true;
            _this.loader.dismiss();
        };
        this.downloadComplete = function () {
            for (var _i = 0, _a = _this.completedSubscribers; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback();
            }
        };
        this.getEntities = function () {
            //this.loadEntities();
            return _this.entities;
        };
        this.getThatEndProperty = function (relationProperty) {
            var thatEndEntity = _this.getEntity(relationProperty.thatEndEntityName);
            var thatEndProperty = null;
            for (var _i = 0, _a = thatEndEntity.properties; _i < _a.length; _i++) {
                var thatProperty = _a[_i];
                if (thatProperty.name.name === relationProperty.thatEndPropertyName) {
                    thatEndProperty = thatProperty;
                }
            }
            return thatEndProperty;
        };
    }
    EntityMap.prototype.getEntity = function (entityName) {
        var entities = this.getEntities();
        for (var _i = 0, entities_1 = entities; _i < entities_1.length; _i++) {
            var entity = entities_1[_i];
            if (entity.name.name === entityName) {
                return entity;
            }
        }
        return null;
    };
    return EntityMap;
}());
EntityMap = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */]])
], EntityMap);

//# sourceMappingURL=EntityMap.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 196;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Ionic Menu Starter</h3>\n\n\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n\n  </p>\n\n\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-right>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__itemList_item_list__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntityListPage = (function () {
    function EntityListPage(navCtrl, navParams, entityMap, loadingCtrl) {
        // If we navigated to this page, we will have an item available as a nav param
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entityMap = entityMap;
        this.loadingCtrl = loadingCtrl;
        this.entityMapLoadCompleted = function () {
            _this.loadEntities();
        };
        this.itemTapped = function (event, item) {
            // That's right, we're pushing to ourselves!
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__itemList_item_list__["a" /* ItemListPage */], {
                app: _this.entityMap.app.name,
                entity: item.entity,
                entityName: item.entity.name.name
            });
        };
        this.loadEntities = function () {
            console.log("EntityListPage.loadEntities");
            console.trace();
            _this.entities = _this.entityMap.getEntities();
            _this.items = [];
            for (var _i = 0, _a = _this.entities; _i < _a.length; _i++) {
                var entity = _a[_i];
                _this.items.push({
                    entity: entity,
                    icon: _this.icons[Math.floor(Math.random() * _this.icons.length)]
                });
            }
        };
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        if (this.entityMap.getEntities().length === 0) {
            this.entityMap.addCompletedSubscribers(this.entityMapLoadCompleted);
        }
        else {
            this.loadEntities();
        }
    }
    return EntityListPage;
}());
EntityListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'entity-list',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\pages\entityList\entity-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Entity List</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <!--<ion-list>\n\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n            <ion-icon [name]="item.icon" item-left></ion-icon>\n\n            {{item.title}}\n\n            <div class="item-note" item-right>\n\n                {{item.note}}\n\n            </div>\n\n        </button>\n\n    </ion-list>-->\n\n\n\n    \n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2   *ngFor="let item of items" >\n\n                <button (click)="itemTapped($event, item)" col-12 large>\n\n                    <ion-icon [name]="item.icon" item-left></ion-icon>\n\n                    {{item.entity.name.name}}\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\pages\entityList\entity-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], EntityListPage);

//# sourceMappingURL=entity-list.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entityDetails_entity_details__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ViewModels_TableVm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_data_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ViewModels_TableRequestService__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_EntityService__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ItemListPage = (function () {
    function ItemListPage(navCtrl, dataService, relationService, tableRequestService, navParams, entityMap, alertCtrl, entityService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.relationService = relationService;
        this.tableRequestService = tableRequestService;
        this.navParams = navParams;
        this.entityMap = entityMap;
        this.alertCtrl = alertCtrl;
        this.entityService = entityService;
        this.entityMapLoadCompleted = function () {
            _this.entity = _this.entityService.getEntityByName(_this.entityName);
            _this.loadItems();
        };
        this.loadItems = function () {
            _this.createTableVm(_this.entity);
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                _this.table.visibleColumns.push(property.name.name);
            }
        };
        this.addNewItem = function () {
            console.log("addNewItem");
        };
        // If we navigated to this page, we will have an item available as a nav param
        this.entity = navParams.get('entity');
        if (!this.entity) {
            this.entityName = navParams.get('entityName');
            if (this.entityMap.getEntities().length === 0) {
                this.entityMap.addCompletedSubscribers(this.entityMapLoadCompleted);
            }
        }
        else {
            this.entityName = this.entity.name.name;
            this.loadItems();
        }
    }
    ItemListPage.prototype.createTableVm = function (entity) {
        if (!this.table) {
            var newTable = new __WEBPACK_IMPORTED_MODULE_3__ViewModels_TableVm__["b" /* TableVm */](this.dataService, this.entity, this.relationService, this.tableRequestService);
            this.table = newTable;
        }
        else {
            if (this.table.entity.name.name !== this.entity.name.name) {
                var newTable = new __WEBPACK_IMPORTED_MODULE_3__ViewModels_TableVm__["b" /* TableVm */](this.dataService, this.entity, this.relationService, this.tableRequestService);
                this.table = newTable;
                this.table.refresh();
            }
        }
    };
    ItemListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__entityDetails_entity_details__["a" /* EntityDetailsPage */], {
            item: item,
            app: "MyApp",
            entityName: this.entity.name.name,
            itemId: "ItemId0"
        });
    };
    ItemListPage.prototype.showSelectColumnCheckbox = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Select Columns');
        for (var _i = 0, _a = this.entity.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            alert.addInput({
                type: 'checkbox',
                label: property.labelText,
                value: property.name.name,
                checked: this.table.visibleColumns.indexOf(property.name.name) >= 0
            });
        }
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.table.visibleColumns.length = 0;
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var columnName = data_1[_i];
                    _this.table.visibleColumns.push(columnName);
                }
                console.log('Checkbox data:', data);
            }
        });
        alert.present();
    };
    return ItemListPage;
}());
ItemListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'item-list',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\pages\itemList\item-list.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>List</ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button icon-only color="royal">\n\n                <ion-icon name="search"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only color="royal" (click)="showSelectColumnCheckbox()">\n\n                <ion-icon name="eye"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only color="royal" (click)="addNewItem()">\n\n                <ion-icon name="add"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content overflow-scroll="true">\n\n\n\n    <rd-table id="itemTable" [table]="table" *ngIf="table"></rd-table>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\pages\itemList\item-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__Services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_5__Services_RelationService__["a" /* RelationService */],
        __WEBPACK_IMPORTED_MODULE_6__ViewModels_TableRequestService__["a" /* TableRequestService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8__Services_EntityService__["a" /* EntityService */]])
], ItemListPage);

//# sourceMappingURL=item-list.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataUrlBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ODataFilterService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ParentNameOdataParameterBuilder__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LinkModeODataParameterBuilder__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ResponsiveTable_SortDirection__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ODataUrlBuilder = (function () {
    function ODataUrlBuilder(odataFilterService, linkModeODataParameterBuilder, parentNameOdataParameterBuilder) {
        var _this = this;
        this.odataFilterService = odataFilterService;
        this.linkModeODataParameterBuilder = linkModeODataParameterBuilder;
        this.parentNameOdataParameterBuilder = parentNameOdataParameterBuilder;
        this.buildListUrl = function (entity, options) {
            var listUrl = "odata/" + entity.pluralName + "/?$count=true";
            if (options) {
                if (!options.limit) {
                    options.limit = 10;
                }
                if (options.limit && options.limit !== 0) {
                    listUrl += "&$top=" + options.limit;
                }
                if (!options.offset) {
                    options.offset = 0;
                }
                listUrl += "&$skip=" + options.offset;
                if (options.sortColumn) {
                    listUrl += "&$orderby=" + options.sortColumn;
                    if (options.sortDirection === __WEBPACK_IMPORTED_MODULE_4__ResponsiveTable_SortDirection__["a" /* SortDirection */].Desc) {
                        listUrl += ' desc';
                    }
                }
                var expandParameters = _this.parentNameOdataParameterBuilder.getContentParameters(entity, options);
                if (expandParameters) {
                    listUrl += expandParameters;
                }
            }
            return listUrl;
        };
        this.buildDeleteUrl = function (entityPluralName, id) {
            var deleteUrl = "odata/" + entityPluralName + "(" + id + ")";
            return deleteUrl;
        };
        this.buildPatchUrl = function (entityPluralName, id) {
            var deleteUrl = "odata/" + entityPluralName + "(" + id + ")";
            return deleteUrl;
        };
        this.buildPostUrl = function (entity) {
            var deleteUrl = "odata/" + entity.pluralName;
            return deleteUrl;
        };
        this.buildGetUrl = function (entityPluralName, id) {
            var deleteUrl = "odata/" + entityPluralName + "/?key=" + id;
            ;
            return deleteUrl;
        };
    }
    return ODataUrlBuilder;
}());
ODataUrlBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ODataFilterService__["a" /* ODataFilterService */],
        __WEBPACK_IMPORTED_MODULE_3__LinkModeODataParameterBuilder__["a" /* LinkModeODataParameterBuilder */],
        __WEBPACK_IMPORTED_MODULE_2__ParentNameOdataParameterBuilder__["a" /* ParentNameOdataParameterBuilder */]])
], ODataUrlBuilder);

//# sourceMappingURL=ODataUrlBuilder.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ODataFilterBuilderFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StringOdataFilterBuilder__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RelationOdataFilterBuilder__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EmptyOdataFilterBuilder__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NumberOdataFilterBuilder__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DateOdataFilterBuilder__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DateTimeOffsetFormatter__ = __webpack_require__(613);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ManyToManyRelationODataFilterBuilder__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ManyToOneRelationODataFilterBuilder__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ODataFilterBuilderFactory = (function () {
    function ODataFilterBuilderFactory(relationService, manyToManyRelationODataFilterBuilder, parentRelationODataFilterBuilder) {
        var _this = this;
        this.relationService = relationService;
        this.manyToManyRelationODataFilterBuilder = manyToManyRelationODataFilterBuilder;
        this.parentRelationODataFilterBuilder = parentRelationODataFilterBuilder;
        this.createFilterBuilder = function (propertyType) {
            switch (propertyType) {
                case __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].String:
                    return new __WEBPACK_IMPORTED_MODULE_3__StringOdataFilterBuilder__["a" /* StringOdataFilterBuilder */]();
                case __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].Date:
                    return new __WEBPACK_IMPORTED_MODULE_7__DateOdataFilterBuilder__["a" /* DateOdataFilterBuilder */](new __WEBPACK_IMPORTED_MODULE_8__DateTimeOffsetFormatter__["a" /* DateTimeOffsetFormatter */]());
                case __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].Number:
                    return new __WEBPACK_IMPORTED_MODULE_6__NumberOdataFilterBuilder__["a" /* NumberOdataFilterBuilder */]();
                case __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].Relation:
                    return new __WEBPACK_IMPORTED_MODULE_4__RelationOdataFilterBuilder__["a" /* RelationOdataFilterBuilder */](_this.relationService, _this.manyToManyRelationODataFilterBuilder, _this.parentRelationODataFilterBuilder);
                default:
                    return new __WEBPACK_IMPORTED_MODULE_5__EmptyOdataFilterBuilder__["a" /* EmptyOdataFilterBuilder */]();
            }
        };
    }
    return ODataFilterBuilderFactory;
}());
ODataFilterBuilderFactory = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__RelationService__["a" /* RelationService */],
        __WEBPACK_IMPORTED_MODULE_9__ManyToManyRelationODataFilterBuilder__["a" /* ManyToManyRelationODataFilterBuilder */],
        __WEBPACK_IMPORTED_MODULE_10__ManyToOneRelationODataFilterBuilder__["a" /* ManyToOneRelationODataFilterBuilder */]])
], ODataFilterBuilderFactory);

//# sourceMappingURL=ODataFilterBuilderFactory.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManyToManyRelationODataFilterBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManyToManyRelationODataFilterBuilder = (function () {
    function ManyToManyRelationODataFilterBuilder(entityMap) {
        var _this = this;
        this.entityMap = entityMap;
        this.getFilter = function (filterData, property) {
            var relationProperty = property;
            var filterName = property.name.name;
            var value = filterData[filterName];
            //http://localhost:2244/odata/Tags/?$count=true&$top=10&$skip=0&$filter=Products/any(product:%20product/ProductId%20eq%201)&$select=Id,Name,CreatedBy
            var thatEndProperty = _this.entityMap.getThatEndProperty(relationProperty);
            var thisEndEntity = _this.entityMap.getEntity(thatEndProperty.thatEndEntityName);
            var entity = _this.entityMap.getEntity(relationProperty.entityName.name);
            var selectProperties = thisEndEntity.idColumn.name.name;
            for (var _i = 0, _a = thisEndEntity.properties; _i < _a.length; _i++) {
                var thisEndProperty = _a[_i];
                if (thisEndProperty.name.name) {
                    selectProperties += "," + thisEndProperty.name.name;
                }
            }
            //Wrong: http://localhost:2244/odata/Tags/?$count=true&$top=10&$skip=0&$filter=Products/any(e:%20e/ProductID%20eq%201)&$select=ProductID,ProductName,SupplierID,CategoryID,Tags,ManufactureDate,UnitPrice,CreatedBy
            var filterForProperty = relationProperty.thisEndObjectPropertyName + "/any(e: e/" + entity.idColumn.name.name + " eq " + value + ")&$select=" + selectProperties;
            return filterForProperty;
        };
    }
    return ManyToManyRelationODataFilterBuilder;
}());
ManyToManyRelationODataFilterBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__["a" /* EntityMap */]])
], ManyToManyRelationODataFilterBuilder);

//# sourceMappingURL=ManyToManyRelationODataFilterBuilder.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManyToOneRelationODataFilterBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ManyToOneRelationODataFilterBuilder = (function () {
    function ManyToOneRelationODataFilterBuilder() {
        this.getFilter = function (filterData, property) {
            var filterName = property.name.name;
            var value = filterData[filterName];
            return property.name.name + " eq " + value;
        };
    }
    return ManyToOneRelationODataFilterBuilder;
}());
ManyToOneRelationODataFilterBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ManyToOneRelationODataFilterBuilder);

//# sourceMappingURL=ManyToOneRelationODataFilterBuilder.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentNameOdataParameterBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EntityPropertyService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ODataFilterService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ExpandParameterBuilder__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParentNameOdataParameterBuilder = (function () {
    function ParentNameOdataParameterBuilder(entityMap, relationService, entityService, odataFilterService, expandParameterBuilder) {
        var _this = this;
        this.entityMap = entityMap;
        this.relationService = relationService;
        this.entityService = entityService;
        this.odataFilterService = odataFilterService;
        this.expandParameterBuilder = expandParameterBuilder;
        this.getContentParameters = function (entity, options) {
            var parameters = "";
            var filter = _this.odataFilterService.getOdataFilter(entity, options);
            if (filter) {
                parameters += filter;
            }
            parameters += _this.expandParameterBuilder.getExpandParameters(entity, options);
            return parameters;
        };
    }
    return ParentNameOdataParameterBuilder;
}());
ParentNameOdataParameterBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_2__RelationService__["a" /* RelationService */],
        __WEBPACK_IMPORTED_MODULE_3__EntityPropertyService__["a" /* EntityPropertyService */],
        __WEBPACK_IMPORTED_MODULE_4__ODataFilterService__["a" /* ODataFilterService */],
        __WEBPACK_IMPORTED_MODULE_5__ExpandParameterBuilder__["a" /* ExpandParameterBuilder */]])
], ParentNameOdataParameterBuilder);

//# sourceMappingURL=ParentNameOdataParameterBuilder.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandParameterBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__NtoNChildrenLinkModeParameterBuilder__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ParentNameExpandParameterService__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResponsiveTable_table_request__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpandParameterBuilder = (function () {
    function ExpandParameterBuilder(parentNameExpandParameterService, nToNChildrenLinkModeParameterBuilder) {
        var _this = this;
        this.parentNameExpandParameterService = parentNameExpandParameterService;
        this.nToNChildrenLinkModeParameterBuilder = nToNChildrenLinkModeParameterBuilder;
        this.getExpandParameters = function (entity, options) {
            var expandParameters = "";
            var parentNameParameters = _this.parentNameExpandParameterService.getParentNameParameters(entity);
            if (parentNameParameters) {
                expandParameters += parentNameParameters;
            }
            if (options.tableDataMode === __WEBPACK_IMPORTED_MODULE_3__ResponsiveTable_table_request__["a" /* TableDataMode */].Link) {
                var nToNChildrenLinkModeParameters = _this.nToNChildrenLinkModeParameterBuilder.getNtoNChildrenLinkModeParameters(entity, options.parentProperty, options.parentId);
                if (nToNChildrenLinkModeParameters) {
                    if (parentNameParameters) {
                        expandParameters += ",";
                    }
                    expandParameters += nToNChildrenLinkModeParameters;
                }
            }
            if (expandParameters) {
                expandParameters = "&$expand=" + expandParameters;
            }
            return expandParameters;
        };
    }
    return ExpandParameterBuilder;
}());
ExpandParameterBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ParentNameExpandParameterService__["a" /* ParentNameExpandParameterService */],
        __WEBPACK_IMPORTED_MODULE_1__NtoNChildrenLinkModeParameterBuilder__["a" /* NtoNChildrenLinkModeParameterBuilder */]])
], ExpandParameterBuilder);

//# sourceMappingURL=ExpandParameterBuilder.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NtoNChildrenLinkModeParameterBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityPropertyService__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NtoNChildrenLinkModeParameterBuilder = (function () {
    function NtoNChildrenLinkModeParameterBuilder(entityMap, entityPropertyService) {
        var _this = this;
        this.entityMap = entityMap;
        this.entityPropertyService = entityPropertyService;
        //http://localhost:2244/odata/Tags/?$count=true&$top=10&$skip=0&$expand=Products($filter=ProductID%20eq%201;$select=ProductID) 
        this.getNtoNChildrenLinkModeParameters = function (entity, relationPropertyName, parentId) {
            var parentProperties = _this.entityPropertyService.getNtoNProperties(entity);
            if (parentProperties.length === 0) {
                return "";
            }
            var relatedProperty = parentProperties.find(function (p) { return p.name.name === relationPropertyName; });
            if (relatedProperty) {
                var relationEntity = _this.entityMap.getEntity(relatedProperty.entityName.name);
                //&$expand=Products($filter=ProductID%20eq%201;$select=ProductID) 
                var expand = relatedProperty.thisEndObjectPropertyName + "($filter=" + relationEntity.idColumn.name.name + "%20eq%20" + parentId + ";$select=" + relationEntity.idColumn.name.name + ")";
                return expand;
            }
            else {
                return "";
            }
        };
    }
    return NtoNChildrenLinkModeParameterBuilder;
}());
NtoNChildrenLinkModeParameterBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_2__EntityPropertyService__["a" /* EntityPropertyService */]])
], NtoNChildrenLinkModeParameterBuilder);

//# sourceMappingURL=NtoNChildrenLinkModeParameterBuilder.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParentNameExpandParameterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityPropertyService__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParentNameExpandParameterService = (function () {
    function ParentNameExpandParameterService(entityMap, entityService) {
        var _this = this;
        this.entityMap = entityMap;
        this.entityService = entityService;
        //http://localhost:2244/odata/Products/?$count=true&$top=10&$skip=0&$expand=Category($select=CategoryName)&
        //http://localhost:2244/odata/Products/?$count=true&$top=10&$skip=0&$expand=Category($select=CategoryName),Supplier($select=CompanyName)
        this.getParentNameParameters = function (entity) {
            var parentProperties = _this.entityService.get1ToNProperties(entity);
            var odataExpands = [];
            for (var _i = 0, parentProperties_1 = parentProperties; _i < parentProperties_1.length; _i++) {
                var parentProperty = parentProperties_1[_i];
                var parentEntity = _this.entityMap.getEntity(parentProperty.entityName.name);
                var expand = parentProperty.thisEndObjectPropertyName + "($select=" + parentEntity.properties[1].name.name + ")";
                odataExpands.push(expand);
            }
            var parentNameParameterString = odataExpands.join();
            return parentNameParameterString;
        };
    }
    return ParentNameExpandParameterService;
}());
ParentNameExpandParameterService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_2__EntityPropertyService__["a" /* EntityPropertyService */]])
], ParentNameExpandParameterService);

//# sourceMappingURL=ParentNameExpandParameterService.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LinkModeODataParameterBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LinkModeODataParameterBuilder = (function () {
    function LinkModeODataParameterBuilder() {
        this.getLinkModeParameters = function (entity) {
            return;
        };
    }
    return LinkModeODataParameterBuilder;
}());
LinkModeODataParameterBuilder = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LinkModeODataParameterBuilder);

//# sourceMappingURL=LinkModeODataParameterBuilder.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OdataLinkRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OdataLinkRequestService = (function () {
    function OdataLinkRequestService() {
        var _this = this;
        this.getRefBody = function (entityPluralName, id) {
            var refUri = _this.getFullRefUri(entityPluralName, id);
            var refBody = {
                "@odata.id": refUri
            };
            return refBody;
        };
        this.getFullRefUri = function (entityPluralName, id) {
            var full = _this.getServerHostName();
            var refUri = full + "/OData/" + entityPluralName + "(" + id + ")/";
            return refUri;
        };
        this.getServerHostName = function () {
            //let location = this.document.location;
            //var serverHostName = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '');
            // return serverHostName;
            return "http://localhost:2244/";
        };
        this.getJsonHeader = function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Cache-Control": "no-cache, no-store, must-revalidate",
                "Pragma": "no-cache",
                "Expires": "0"
            });
            return headers;
        };
        this.getRequestArgs = function () {
            var requestArgs = {
                headers: _this.getJsonHeader()
            };
            return requestArgs;
        };
    }
    return OdataLinkRequestService;
}());
OdataLinkRequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], OdataLinkRequestService);

//# sourceMappingURL=OdataLinkRequestService.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationProperty; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PropertyType__ = __webpack_require__(35);

var RelationProperty = (function () {
    function RelationProperty(name, displayPropertyName, entityName, entityPluralName, thisEndMultiplicity, thisEndObjectPropertyName, thatEndEntityName, thatEndPropertyName, labelText, type, canSearch, canEdit, canSort, required) {
        if (labelText === void 0) { labelText = name.name; }
        if (type === void 0) { type = __WEBPACK_IMPORTED_MODULE_0__PropertyType__["a" /* PropertyType */].Relation; }
        if (canSearch === void 0) { canSearch = true; }
        if (canEdit === void 0) { canEdit = true; }
        if (canSort === void 0) { canSort = true; }
        if (required === void 0) { required = true; }
        this.name = name;
        this.displayPropertyName = displayPropertyName;
        this.entityName = entityName;
        this.entityPluralName = entityPluralName;
        this.thisEndMultiplicity = thisEndMultiplicity;
        this.thisEndObjectPropertyName = thisEndObjectPropertyName;
        this.thatEndEntityName = thatEndEntityName;
        this.thatEndPropertyName = thatEndPropertyName;
        this.labelText = labelText;
        this.type = type;
        this.canSearch = canSearch;
        this.canEdit = canEdit;
        this.canSort = canSort;
        this.required = required;
    }
    return RelationProperty;
}());

//# sourceMappingURL=RelationProperty.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_linqts__ = __webpack_require__(614);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_linqts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_linqts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntityService = (function () {
    function EntityService(entityMap) {
        var _this = this;
        this.entityMap = entityMap;
        this.getEntityByName = function (name) {
            var entities = new __WEBPACK_IMPORTED_MODULE_1_linqts__["List"](_this.entityMap.getEntities());
            var entity = entities.SingleOrDefault(function (e) { return e.name.name === name; });
            return entity;
        };
    }
    return EntityService;
}());
EntityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__["a" /* EntityMap */]])
], EntityService);

//# sourceMappingURL=EntityService.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDialogService = (function () {
    function ModalDialogService() {
        var _this = this;
        this.eventName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.open = function (title, message, iconClass) {
            if (iconClass === void 0) { iconClass = "glyphicon glyphicon-info-sign"; }
            var template = "<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\t\t\t\t<h4><span class=\"" + iconClass + "\"></span>" + title + "</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<div>" + message + "</div>\n\t\t\t\t\t<div class=\"modal-footer\">\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-default btn-default pull-left\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\"></span> Cancel</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div> \n\t\t</div>\n\t</div>\n</div>";
            jQuery(template).modal('show');
        };
        this.openId = function (id) {
            jQuery("#" + id).modal('show');
        };
        this.closeId = function (id) {
            jQuery("#" + id).modal('hide');
        };
        this.showErrorDialog = function (title, message) {
            _this.open(title, message, "fa fa-exclamation-triangle");
        };
    }
    ModalDialogService.prototype.ngOnInit = function () { };
    return ModalDialogService;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalDialogService.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalDialogService.prototype, "message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalDialogService.prototype, "eventName", void 0);
ModalDialogService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({}),
    __metadata("design:paramtypes", [])
], ModalDialogService);

//# sourceMappingURL=modal-dialog.service.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GuidService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GuidService = (function () {
    function GuidService() {
    }
    GuidService.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    GuidService.prototype.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    return GuidService;
}());
GuidService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GuidService);

//# sourceMappingURL=GuidService.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormControlService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EntityMaps_PropertyType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Validators_number_validators__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormControlService = (function () {
    function FormControlService(relationService) {
        var _this = this;
        this.relationService = relationService;
        this.createFormControlsForProperties = function (properties) {
            var controls = {};
            for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
                var property = properties_1[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_3__EntityMaps_PropertyType__["a" /* PropertyType */].Relation && !_this.relationService.isManyToOneProperty(property)) {
                    continue;
                }
                var control = [''];
                var validators = [];
                if (property.required) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
                }
                if (property.pattern) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(property.pattern));
                }
                switch (property.type) {
                    case __WEBPACK_IMPORTED_MODULE_3__EntityMaps_PropertyType__["a" /* PropertyType */].String:
                        if (property.maxValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(property.maxValue));
                        }
                        if (property.minValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(property.minValue));
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_3__EntityMaps_PropertyType__["a" /* PropertyType */].Number:
                        if (property.maxValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_4__Validators_number_validators__["a" /* NumberValidator */].max(property.maxValue));
                        }
                        if (property.minValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_4__Validators_number_validators__["a" /* NumberValidator */].max(property.minValue));
                        }
                        break;
                    default:
                }
                control.push(validators);
                controls[property.name.name] = control;
            }
            return controls;
        };
    }
    return FormControlService;
}());
FormControlService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_RelationService__["a" /* RelationService */]])
], FormControlService);

//# sourceMappingURL=FormControlService.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberValidator; });
var NumberValidator = (function () {
    function NumberValidator() {
    }
    NumberValidator.max = function (value) {
        return function (c) {
            if (c.value > value) {
                return {
                    maxValue: false
                };
            }
            else {
                return null;
            }
        };
    };
    NumberValidator.min = function (value) {
        return function (c) {
            if (c.value < value) {
                return {
                    minValue: false
                };
            }
            else {
                return null;
            }
        };
    };
    return NumberValidator;
}());

//# sourceMappingURL=number.validators.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationMultiplicity__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RelationService = (function () {
    function RelationService(entityMap) {
        var _this = this;
        this.entityMap = entityMap;
        this.isOneToManyOrManyToManyProperty = function (relationProperty) {
            var isOnetoMany = _this.is1toNRelation(relationProperty);
            var isNtoN = _this.isNtoNRelation(relationProperty);
            var isChild = isOnetoMany || isNtoN;
            return isChild;
        };
        this.is1toNRelation = function (relationProperty) {
            var isThisEnd1 = relationProperty.thisEndMultiplicity === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationMultiplicity__["a" /* RelationMultiplicity */].One ||
                relationProperty.thisEndMultiplicity === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationMultiplicity__["a" /* RelationMultiplicity */].ZeroOrOne;
            var thatEndProperty = _this.entityMap.getThatEndProperty(relationProperty);
            if (!thatEndProperty) {
                return true;
            }
            var isThatEndMany = _this.isManyRelantion(thatEndProperty.thisEndMultiplicity);
            var is1toMany = isThisEnd1 && isThatEndMany;
            return is1toMany;
        };
        this.isManyToOneProperty = function (relationProperty) {
            var isThisEndMany = _this.isManyRelantion(relationProperty.thisEndMultiplicity);
            var thatEndProperty = _this.entityMap.getThatEndProperty(relationProperty);
            if (!thatEndProperty) {
                return true;
            }
            var isThatEndOne = _this.isOneRelantion(thatEndProperty.thisEndMultiplicity);
            var isManyToOne = isThisEndMany && isThatEndOne;
            return isManyToOne;
        };
        this.isManyRelantion = function (multiplicity) {
            return multiplicity === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationMultiplicity__["a" /* RelationMultiplicity */].ZeroOrMore ||
                multiplicity === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationMultiplicity__["a" /* RelationMultiplicity */].OneOrMore;
        };
        this.isOneRelantion = function (multiplicity) {
            return multiplicity === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationMultiplicity__["a" /* RelationMultiplicity */].One ||
                multiplicity === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationMultiplicity__["a" /* RelationMultiplicity */].ZeroOrOne;
        };
        this.isNtoNRelation = function (relationProperty) {
            var thatEndProperty = _this.entityMap.getThatEndProperty(relationProperty);
            if (!thatEndProperty) {
                return false;
            }
            var isThisEndMany = _this.isManyRelantion(relationProperty.thisEndMultiplicity);
            var isThatEndMany = _this.isManyRelantion(thatEndProperty.thisEndMultiplicity);
            var isNtoN = isThisEndMany && (thatEndProperty) && isThatEndMany;
            return isNtoN;
        };
    }
    return RelationService;
}());
RelationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__["a" /* EntityMap */]])
], RelationService);

//# sourceMappingURL=RelationService.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(300);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_entityList_entity_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_entityDetails_entity_details__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_itemList_item_list__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Services_data_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Services_OData_ODataUrlBuilder__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Services_OData_ODataFilterService__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ViewModels_TableRequestService__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Services_OData_ODataFilterBuilderFactory__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_OData_ManyToManyRelationODataFilterBuilder__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Services_OData_ManyToOneRelationODataFilterBuilder__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Services_OData_LinkModeODataParameterBuilder__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Services_OData_ParentNameOdataParameterBuilder__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__Services_EntityPropertyService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Services_OData_ParentNameExpandParameterService__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Services_OData_NtoNChildrenLinkModeParameterBuilder__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__Services_OData_ExpandParameterBuilder__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__Services_OData_OdataLinkRequestService__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__Services_RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ResponsiveTable_table_component__ = __webpack_require__(615);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ResponsiveTable_search_property_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ResponsiveTable_FormControlService__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ResponsiveTable_table_header_cell_component__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ResponsiveTable_view_property_component__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ResponsiveTable_modal_dialog_component__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ResponsiveTable_pagination_component__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ResponsiveTable_edit_entity_component__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ResponsiveTable_edit_property_component__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ResponsiveTable_image_display_component__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ResponsiveTable_table_header_component__ = __webpack_require__(624);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ResponsiveTable_view_entity_component__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_responsive_directives_angular2__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_responsive_directives_angular2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_responsive_directives_angular2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__Commons_GuidService__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__Services_EntityService__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_entityList_entity_list__["a" /* EntityListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_entityDetails_entity_details__["a" /* EntityDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_itemList_item_list__["a" /* ItemListPage */],
            __WEBPACK_IMPORTED_MODULE_28__ResponsiveTable_table_component__["a" /* TableComponent */],
            __WEBPACK_IMPORTED_MODULE_29__ResponsiveTable_search_property_component__["a" /* SearchPropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_31__ResponsiveTable_table_header_cell_component__["a" /* TableHeaderCellComponent */],
            __WEBPACK_IMPORTED_MODULE_32__ResponsiveTable_view_property_component__["a" /* ViewPropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_33__ResponsiveTable_modal_dialog_component__["a" /* ModalDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_34__ResponsiveTable_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_35__ResponsiveTable_edit_entity_component__["a" /* EditEntityComponent */],
            __WEBPACK_IMPORTED_MODULE_36__ResponsiveTable_edit_property_component__["a" /* EditPropertyComponent */],
            __WEBPACK_IMPORTED_MODULE_37__ResponsiveTable_image_display_component__["a" /* ImageDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_38__ResponsiveTable_table_header_component__["a" /* TableHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_39__ResponsiveTable_view_entity_component__["a" /* ViewEntityComponent */],
            __WEBPACK_IMPORTED_MODULE_40_responsive_directives_angular2__["RESPONSIVE_DIRECTIVES"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                    // { component: ListPage, name: 'List', segment: 'List' },
                    { component: __WEBPACK_IMPORTED_MODULE_9__pages_entityList_entity_list__["a" /* EntityListPage */], name: "Entities", segment: ":app/Entities" },
                    { component: __WEBPACK_IMPORTED_MODULE_11__pages_entityDetails_entity_details__["a" /* EntityDetailsPage */], name: 'Details', segment: ':app/:entityName/:itemId' },
                    { component: __WEBPACK_IMPORTED_MODULE_12__pages_itemList_item_list__["a" /* ItemListPage */], name: "ItemList", segment: ":app/:entityName/List" }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_entityList_entity_list__["a" /* EntityListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_entityDetails_entity_details__["a" /* EntityDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_itemList_item_list__["a" /* ItemListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__EntityMaps_EntityMap__["a" /* EntityMap */],
            __WEBPACK_IMPORTED_MODULE_13__Services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_14__Services_OData_ODataUrlBuilder__["a" /* ODataUrlBuilder */],
            __WEBPACK_IMPORTED_MODULE_15__Services_OData_ODataFilterService__["a" /* ODataFilterService */],
            __WEBPACK_IMPORTED_MODULE_16__ViewModels_TableRequestService__["a" /* TableRequestService */],
            __WEBPACK_IMPORTED_MODULE_17__Services_OData_ODataFilterBuilderFactory__["a" /* ODataFilterBuilderFactory */],
            __WEBPACK_IMPORTED_MODULE_18__Services_OData_ManyToManyRelationODataFilterBuilder__["a" /* ManyToManyRelationODataFilterBuilder */],
            __WEBPACK_IMPORTED_MODULE_19__Services_OData_ManyToOneRelationODataFilterBuilder__["a" /* ManyToOneRelationODataFilterBuilder */],
            __WEBPACK_IMPORTED_MODULE_20__Services_OData_LinkModeODataParameterBuilder__["a" /* LinkModeODataParameterBuilder */],
            __WEBPACK_IMPORTED_MODULE_21__Services_OData_ParentNameOdataParameterBuilder__["a" /* ParentNameOdataParameterBuilder */],
            __WEBPACK_IMPORTED_MODULE_22__Services_EntityPropertyService__["a" /* EntityPropertyService */],
            __WEBPACK_IMPORTED_MODULE_23__Services_OData_ParentNameExpandParameterService__["a" /* ParentNameExpandParameterService */],
            __WEBPACK_IMPORTED_MODULE_24__Services_OData_NtoNChildrenLinkModeParameterBuilder__["a" /* NtoNChildrenLinkModeParameterBuilder */],
            __WEBPACK_IMPORTED_MODULE_25__Services_OData_ExpandParameterBuilder__["a" /* ExpandParameterBuilder */],
            __WEBPACK_IMPORTED_MODULE_26__Services_OData_OdataLinkRequestService__["a" /* OdataLinkRequestService */],
            __WEBPACK_IMPORTED_MODULE_27__Services_RelationService__["a" /* RelationService */],
            __WEBPACK_IMPORTED_MODULE_30__ResponsiveTable_FormControlService__["a" /* FormControlService */],
            __WEBPACK_IMPORTED_MODULE_40_responsive_directives_angular2__["ResponsiveState"],
            __WEBPACK_IMPORTED_MODULE_41__Commons_GuidService__["a" /* GuidService */],
            __WEBPACK_IMPORTED_MODULE_42__Services_EntityService__["a" /* EntityService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_entityList_entity_list__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_entityDetails_entity_details__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PageData = (function () {
    function PageData() {
    }
    return PageData;
}());
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, entityMap) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.entityMap = entityMap;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.init = function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.entityMap.loadEntities();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            return "";
        };
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Entity List', component: __WEBPACK_IMPORTED_MODULE_6__pages_entityList_entity_list__["a" /* EntityListPage */], parameters: { app: this.entityMap.app.name } },
            { title: 'Entity Details', component: __WEBPACK_IMPORTED_MODULE_8__pages_entityDetails_entity_details__["a" /* EntityDetailsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(this.init);
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, page.parameters);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_7__EntityMaps_EntityMap__["a" /* EntityMap */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertyType; });
var PropertyType;
(function (PropertyType) {
    PropertyType[PropertyType["String"] = 0] = "String";
    PropertyType[PropertyType["Number"] = 1] = "Number";
    PropertyType[PropertyType["Date"] = 2] = "Date";
    PropertyType[PropertyType["Image"] = 3] = "Image";
    PropertyType[PropertyType["File"] = 4] = "File";
    PropertyType[PropertyType["Relation"] = 5] = "Relation";
    PropertyType[PropertyType["Boolean"] = 6] = "Boolean";
})(PropertyType || (PropertyType = {}));
//# sourceMappingURL=PropertyType.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortDirection; });
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["Unsorted"] = 0] = "Unsorted";
    SortDirection[SortDirection["Asc"] = 1] = "Asc";
    SortDirection[SortDirection["Desc"] = 2] = "Desc";
})(SortDirection || (SortDirection = {}));
//# sourceMappingURL=SortDirection.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OData_ODataUrlBuilder__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OData_OdataLinkRequestService__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EntityMaps_PropertyType__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = (function () {
    function DataService(http, odataUrlBuilder, relationService, entityMap, odataLinkRequestService) {
        var _this = this;
        this.http = http;
        this.odataUrlBuilder = odataUrlBuilder;
        this.relationService = relationService;
        this.entityMap = entityMap;
        this.odataLinkRequestService = odataLinkRequestService;
        this.odataServer = "http://localhost:2244/";
        this.delete = function (entity, idList) {
            var deleteUrl = _this.odataServer + _this.odataUrlBuilder.buildDeleteUrl(entity.pluralName, idList[0]);
            return _this.http.delete(deleteUrl);
        };
        this.link = function (entity, parentPropertyName, parentId, idList) {
            var item = {};
            item[parentPropertyName] = null;
            //PUT http://localhost:2244/OData/Products(6)/Supplier/$ref
            //Body:
            //{ "@odata.id":"http://localhost:2244/OData/Suppliers(8)" }
            var parentProperty = entity.properties.find(function (p) { return p.name.name === parentPropertyName; });
            var refBody = _this.odataLinkRequestService.getRefBody(parentProperty.entityPluralName, parentId);
            return _this.http.post(_this.odataServer + ("/OData/" + entity.pluralName + "(" + idList[0] + ")/" + parentProperty.thisEndObjectPropertyName + "/$ref"), refBody);
        };
        this.getRelationPropertyName = function (parentProperty) {
            var isNtoN = _this.relationService.isNtoNRelation(parentProperty);
            var relationPropertyName = parentProperty.entityName.name;
            if (isNtoN) {
                relationPropertyName = parentProperty.entityPluralName;
            }
            return relationPropertyName;
        };
        this.unlink = function (entity, parentPropertyName, parentId, idList) {
            var item = {};
            item[parentPropertyName] = null;
            //DELETE http://localhost:2244/OData/Products(6)/Supplier/$ref
            var parentProperty = entity.properties.find(function (p) { return p.name.name === parentPropertyName; });
            var relationPropertyName = _this.getRelationPropertyName(parentProperty);
            var refBody = _this.odataLinkRequestService.getRefBody(parentProperty.entityPluralName, parentId);
            var options = {
                headers: _this.odataLinkRequestService.getJsonHeader(),
                body: refBody
            };
            return _this.http.delete(_this.odataServer + ("/OData/" + entity.pluralName + "(" + idList[0] + ")/" + parentProperty.thisEndObjectPropertyName + "/$ref"), options);
        };
        this.getEntity = function (entity, id) {
            var getUrl = _this.odataServer + _this.odataUrlBuilder.buildGetUrl(entity.pluralName, id);
            var options = {
                headers: _this.odataLinkRequestService.getJsonHeader()
            };
            return _this.http.get(getUrl, options);
        };
        this.save = function (entity, item) {
            var id = item[entity.idColumn.name.name];
            if (id) {
                return _this.patch(entity, id, item);
            }
            else {
                return _this.post(entity, item);
            }
        };
        this.patch = function (entity, id, item) {
            for (var _i = 0, _a = entity.properties; _i < _a.length; _i++) {
                var propertyOfEntity = _a[_i];
                var value = item[propertyOfEntity.name.name];
                if (value !== undefined) {
                    if (value === null) {
                        //unlink
                    }
                    else {
                        if (propertyOfEntity.type === __WEBPACK_IMPORTED_MODULE_6__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                            if (_this.relationService.isNtoNRelation(propertyOfEntity)) {
                                return _this.http.patch(_this.odataServer + "/Tags/Link/" + id + "?childId=" + value + "&property=" + propertyOfEntity.name.name, item, _this.odataLinkRequestService.getRequestArgs());
                            }
                        }
                    }
                }
            }
            var url = _this.odataServer + _this.odataUrlBuilder.buildPatchUrl(entity.pluralName, id);
            return _this.http.patch(url, item, _this.odataLinkRequestService.getRequestArgs());
        };
        this.post = function (entity, item) {
            var url = _this.odataServer + _this.odataUrlBuilder.buildPostUrl(entity);
            return _this.http.post(url, item, _this.odataLinkRequestService.getRequestArgs());
        };
        this.handleError = function (error) {
            console.error('An error occurred', error);
            return Promise.reject(error.message || error);
        };
    }
    DataService.prototype.getEntities = function (entity, options) {
        var listUrl = this.odataServer + this.odataUrlBuilder.buildListUrl(entity, options);
        return this.http.get(listUrl, options);
    };
    DataService.prototype.getEntitySummaries = function (entity, options) {
        var listUrl = this.odataServer + ("api/" + entity.pluralName + "/GetSummaryPageOfAll");
        return this.http.post(listUrl, options);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__OData_ODataUrlBuilder__["a" /* ODataUrlBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__RelationService__["a" /* RelationService */],
        __WEBPACK_IMPORTED_MODULE_5__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_4__OData_OdataLinkRequestService__["a" /* OdataLinkRequestService */]])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDataMode; });
var TableRequest = (function () {
    function TableRequest() {
        this.queryName = "GetPageOfAll";
        this.tableDataMode = TableDataMode.Normal;
    }
    return TableRequest;
}());

var TableDataMode;
(function (TableDataMode) {
    TableDataMode[TableDataMode["Normal"] = 0] = "Normal";
    TableDataMode[TableDataMode["Link"] = 1] = "Link";
})(TableDataMode || (TableDataMode = {}));
//# sourceMappingURL=table-request.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationMultiplicity; });
var RelationMultiplicity;
(function (RelationMultiplicity) {
    RelationMultiplicity[RelationMultiplicity["ZeroOrOne"] = 0] = "ZeroOrOne";
    RelationMultiplicity[RelationMultiplicity["One"] = 1] = "One";
    RelationMultiplicity[RelationMultiplicity["ZeroOrMore"] = 2] = "ZeroOrMore";
    RelationMultiplicity[RelationMultiplicity["OneOrMore"] = 3] = "OneOrMore";
})(RelationMultiplicity || (RelationMultiplicity = {}));
//# sourceMappingURL=RelationMultiplicity.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringOdataFilterBuilder; });
var StringOdataFilterBuilder = (function () {
    function StringOdataFilterBuilder() {
        this.getFilter = function (filterData, property) {
            var filterName = property.name.name;
            var value = filterData[filterName];
            var filterForProperty = "contains(" + filterName + ", '" + value + "')";
            return filterForProperty;
        };
    }
    return StringOdataFilterBuilder;
}());

//# sourceMappingURL=StringOdataFilterBuilder.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelationOdataFilterBuilder; });
var RelationOdataFilterBuilder = (function () {
    function RelationOdataFilterBuilder(relationService, manyToManyRelationODataFilterBuilder, parentRelationODataFilterBuilder) {
        var _this = this;
        this.relationService = relationService;
        this.manyToManyRelationODataFilterBuilder = manyToManyRelationODataFilterBuilder;
        this.parentRelationODataFilterBuilder = parentRelationODataFilterBuilder;
        this.getFilter = function (filterData, property) {
            var filterForProperty;
            if (_this.relationService.isNtoNRelation(property)) {
                return _this.manyToManyRelationODataFilterBuilder.getFilter(filterData, property);
            }
            else {
                filterForProperty = _this.parentRelationODataFilterBuilder.getFilter(filterData, property);
            }
            return filterForProperty;
        };
    }
    return RelationOdataFilterBuilder;
}());

//# sourceMappingURL=RelationOdataFilterBuilder.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableViewMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableVm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableColumnVm__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationProperty__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResponsiveTable_table_request__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ResponsiveTable_SortDirection__ = __webpack_require__(47);




var TableViewMode;
(function (TableViewMode) {
    TableViewMode[TableViewMode["Regular"] = 0] = "Regular";
    TableViewMode[TableViewMode["Stack"] = 1] = "Stack";
    TableViewMode[TableViewMode["Toggle"] = 2] = "Toggle";
})(TableViewMode || (TableViewMode = {}));
var TableVm = (function () {
    function TableVm(dataService, entity, relationService, tableRequestService) {
        var _this = this;
        this.dataService = dataService;
        this.entity = entity;
        this.relationService = relationService;
        this.tableRequestService = tableRequestService;
        this.columns = [];
        this.currentPage = 1;
        this.pageSize = 10;
        this.keyword = "";
        this.options = new __WEBPACK_IMPORTED_MODULE_2__ResponsiveTable_table_request__["b" /* TableRequest */]();
        this.filterData = {};
        this.linkModeFilterData = {};
        this.isLoading = true;
        this.viewMode = TableViewMode.Stack;
        this.visibleColumns = [];
        this.addColumn = function (property) {
            var column = new __WEBPACK_IMPORTED_MODULE_0__TableColumnVm__["a" /* TableColumnVm */]();
            column.property = property;
            column.table = _this;
            _this.columns.push(column);
        };
        this.getItemOffset = function () {
            var offset = (_this.currentPage - 1) * _this.pageSize;
            if (offset < 0) {
                offset = 0;
            }
            return offset;
        };
        this.getTableOptions = function () {
            return _this.createTableOptionsForFilterData(_this.filterData, _this.options);
        };
        this.createTableOptionsForFilterData = function (filterData, newRequest) {
            var request = new __WEBPACK_IMPORTED_MODULE_2__ResponsiveTable_table_request__["b" /* TableRequest */]();
            request.limit = _this.pageSize;
            request.offset = _this.getItemOffset();
            request.search = _this.keyword;
            request.tableDataMode = newRequest.tableDataMode;
            request.queryName = newRequest.queryName;
            if (newRequest.tableDataMode === __WEBPACK_IMPORTED_MODULE_2__ResponsiveTable_table_request__["a" /* TableDataMode */].Link) {
                request.parentProperty = _this.options.parentProperty;
                request.parentId = _this.options.parentId;
            }
            _this.setSortColumnToRequest(request);
            if (_this.filterData) {
                _this.tableRequestService.setFilterDataToRequest(filterData, request);
            }
            return request;
        };
        this.setSortColumnToRequest = function (request) {
            if (_this.sortColumn) {
                request.sortDirection = _this.sortColumn.sortDirection;
                request.sortColumn = _this.sortColumn.property.name.name;
            }
        };
        this.getLinkTableOptions = function () {
            return _this.createTableOptionsForFilterData(_this.linkModeFilterData, _this.options);
        };
        this.downloadItems = function (entity, options) {
            if (entity === void 0) { entity = null; }
            if (options === void 0) { options = null; }
            if (!entity) {
                entity = _this.entity;
            }
            if (!options) {
                options = _this.getTableOptions();
            }
            else {
                var newOptions = _this.getTableOptions();
                options.parentProperty = newOptions.parentProperty;
                options.parentId = newOptions.parentId;
            }
            _this.isLoading = true;
            _this.downloadFromDataService(entity, options);
        };
        this.downloadFromDataService = function (entity, options) {
            _this.dataService.getEntities(entity, options)
                .map(function (res) {
                return res.json();
            })
                .subscribe(_this.acceptData, _this.downloadError, _this.downloadComplete);
        };
        this.downloadError = function (err) {
            console.log(err);
        };
        this.refresh = function () {
            _this.downloadItems(_this.entity, _this.getTableOptions());
        };
        this.delete = function (item) {
            return _this.dataService.delete(_this.entity, [item[_this.entity.idColumn.name.name]]);
        };
        this.link = function (item, parentProperty, parentId) {
            return _this.dataService.link(_this.entity, parentProperty, parentId, [item[_this.entity.idColumn.name.name]]);
        };
        this.unlink = function (item, parentProperty, parentId) {
            return _this.dataService.unlink(_this.entity, parentProperty, parentId, [item[_this.entity.idColumn.name.name]]);
        };
        this.acceptData = function (data) {
            _this.tableData = data;
            _this.total = data["@odata.count"];
        };
        this.downloadComplete = function () {
            _this.isLoading = false;
        };
        this.toggleVisibility = function (column) {
            column.isVisible = !column.isVisible;
        };
        for (var _i = 0, _a = this.entity.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            if (property instanceof __WEBPACK_IMPORTED_MODULE_1__EntityMaps_RelationProperty__["a" /* RelationProperty */]) {
                if (!this.relationService.isOneToManyOrManyToManyProperty(property)) {
                    this.addColumn(property);
                }
            }
            else {
                this.addColumn(property);
            }
        }
    }
    Object.defineProperty(TableVm.prototype, "sortColumn", {
        get: function () {
            return this._sortColumn;
        },
        set: function (column) {
            this._sortColumn = column;
            this.columns.forEach(function (c) {
                if (c.property.name.name === column.property.name.name) {
                    c.sortDirection = column.sortDirection;
                }
                else {
                    c.sortDirection = __WEBPACK_IMPORTED_MODULE_3__ResponsiveTable_SortDirection__["a" /* SortDirection */].Unsorted;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableVm.prototype, "pageCount", {
        get: function () {
            return Math.ceil(this.total / this.pageSize);
        },
        enumerable: true,
        configurable: true
    });
    ;
    return TableVm;
}());

//# sourceMappingURL=TableVm.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyOdataFilterBuilder; });
var EmptyOdataFilterBuilder = (function () {
    function EmptyOdataFilterBuilder() {
        this.getFilter = function (filterData, property) {
            return "";
        };
    }
    return EmptyOdataFilterBuilder;
}());

//# sourceMappingURL=EmptyOdataFilterBuilder.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberOdataFilterBuilder; });
var NumberOdataFilterBuilder = (function () {
    function NumberOdataFilterBuilder() {
        this.getFilter = function (filterData, property) {
            var filterName = property.name.name;
            if (!filterData) {
                return "";
            }
            var value = filterData[filterName];
            if (!value) {
                return "";
            }
            var min = value.min;
            var max = value.max;
            var filterForProperty = '';
            if (min) {
                filterForProperty += filterName + " ge " + min;
            }
            if (max) {
                if (filterForProperty) {
                    filterForProperty += " and ";
                }
                filterForProperty += filterName + " le " + max;
            }
            return filterForProperty;
        };
    }
    return NumberOdataFilterBuilder;
}());

//# sourceMappingURL=NumberOdataFilterBuilder.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateOdataFilterBuilder; });
var DateOdataFilterBuilder = (function () {
    function DateOdataFilterBuilder(formatter) {
        var _this = this;
        this.formatter = formatter;
        this.getFilter = function (filterData, property) {
            var filterName = property.name.name;
            if (!filterData) {
                return "";
            }
            var value = filterData[filterName];
            if (!value) {
                return "";
            }
            var min = value.min;
            var max = value.max;
            var filterForProperty = '';
            if (min) {
                filterForProperty += filterName + " ge " + _this.formatter.formatLocalDate(min);
            }
            if (max) {
                if (filterForProperty) {
                    filterForProperty += " and ";
                }
                filterForProperty += filterName + " le " + _this.formatter.formatLocalDate(max);
            }
            return filterForProperty;
        };
    }
    return DateOdataFilterBuilder;
}());

//# sourceMappingURL=DateOdataFilterBuilder.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateTimeOffsetFormatter; });
var DateTimeOffsetFormatter = (function () {
    function DateTimeOffsetFormatter() {
        var _this = this;
        this.formatLocalDate = function (dateString) {
            var now = new Date(dateString);
            if (dateString === null || now.toString() === "Invalid Date") {
                throw new Error("Invalid Date");
            }
            var timezoneOffset = -now.getTimezoneOffset();
            var dif = timezoneOffset >= 0 ? '%2B' : '-'; //%2B is character '+', it's not allowed in URL, so encoding it
            return now.getFullYear()
                + '-' + _this.pad(now.getMonth() + 1)
                + '-' + _this.pad(now.getDate())
                + 'T' + _this.pad(now.getHours())
                + ':' + _this.pad(now.getMinutes())
                + ':' + _this.pad(now.getSeconds())
                + dif + _this.pad(timezoneOffset / 60)
                + ':' + _this.pad(timezoneOffset % 60);
        };
        this.pad = function (num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? '0' : '') + norm;
        };
    }
    return DateTimeOffsetFormatter;
}());

//# sourceMappingURL=DateTimeOffsetFormatter.js.map

/***/ }),

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableVm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EntityMaps_RelationProperty__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_modal_dialog_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Commons_GuidService__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__table_request__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TableComponent = (function () {
    function TableComponent(entityMap, relationService, alertCtrl, guidService) {
        var _this = this;
        this.entityMap = entityMap;
        this.relationService = relationService;
        this.alertCtrl = alertCtrl;
        this.guidService = guidService;
        this.sort = function (column) {
            _this.table.sortColumn = column;
            _this.table.downloadItems();
        };
        this.search = function () {
            _this.table.downloadItems();
            //this.modalDialogService.closeId(this.searchFormId);
        };
        this.clearSearch = function () {
            _this.table.keyword = '';
            _this.search();
        };
        this.deleteConfirmed = function (item) {
            _this.table.delete(item)
                .map(function (res) {
                return res.json();
            })
                .subscribe(_this.getDeleteResult, _this.errorOnDelete, _this.deleteComplete);
        };
        this.getTableSearchFormId = function () {
            if (!_this.searchFormId) {
                _this.searchFormId = "searchDialogId_" + _this.guidService.guid();
            }
            return _this.searchFormId;
        };
        this.addNewItem = function () {
            var baseUrl = _this.table.entity.name.name + '/add';
            var parentPropertyName = _this.getParentThatEndPropertyName();
            var url = '';
            if (parentPropertyName) {
                url = baseUrl + "/" + parentPropertyName + '/' + _this.parentId;
            }
            else {
                url = baseUrl;
            }
            //TODO: 
            //this.router.navigate([url]);
        };
        this.getParentThatEndPropertyName = function () {
            var parentPropertyName;
            if (_this.parentProperty) {
                parentPropertyName = _this.parentProperty.thatEndPropertyName;
            }
            else {
                parentPropertyName = null;
            }
            return parentPropertyName;
        };
        this.isLinkItemButtonVisible = function () {
            return _this.table.options.tableDataMode === __WEBPACK_IMPORTED_MODULE_9__table_request__["a" /* TableDataMode */].Normal && _this.parentProperty !== null && _this.parentProperty !== undefined;
        };
        this.isFinishLinkItemButtonVisible = function () {
            return _this.table.options.tableDataMode === __WEBPACK_IMPORTED_MODULE_9__table_request__["a" /* TableDataMode */].Link && _this.parentProperty !== null && _this.parentProperty !== undefined;
        };
        this.linkItem = function () {
            if (_this.isLinkItemButtonVisible()) {
                _this.table.options.tableDataMode = __WEBPACK_IMPORTED_MODULE_9__table_request__["a" /* TableDataMode */].Link;
                _this.table.options.parentId = _this.parentId;
                _this.table.options.parentProperty = _this.parentProperty.thatEndPropertyName;
                _this.table.currentPage = 1;
                _this.originalFilterData = _this.table.filterData;
                _this.table.filterData = _this.getEmptyFilter();
                _this.table.refresh();
            }
        };
        this.getEmptyFilter = function () {
            var emptyFilterData = {};
            for (var _i = 0, _a = _this.table.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (column.property.type === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].Number || column.property.type === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].Date) {
                    emptyFilterData[column.property.name.name] = {};
                }
            }
            return emptyFilterData;
        };
        this.finishLinkItem = function () {
            if (_this.isFinishLinkItemButtonVisible()) {
                _this.table.options.tableDataMode = __WEBPACK_IMPORTED_MODULE_9__table_request__["a" /* TableDataMode */].Normal;
                _this.table.currentPage = 1;
                _this.table.options.parentProperty = _this.parentProperty.thatEndPropertyName;
                _this.table.filterData = _this.originalFilterData;
                _this.table.refresh();
            }
        };
        this.link = function (item) {
            _this.table.link(item, _this.parentProperty.thatEndPropertyName, _this.parentId)
                .map(function (res) {
                return res.json();
            })
                .subscribe(_this.getLinkResult, _this.errorOnLink, _this.linkComplete);
        };
        this.unlink = function (item) {
            _this.table.unlink(item, _this.parentProperty.thatEndPropertyName, _this.parentId)
                .map(function (res) {
                return res.json();
            })
                .subscribe(_this.getUnlinkResult, _this.errorOnUnlink, _this.unlinkComplete);
        };
        this.isSelected = function (item) {
            var isNtoN = _this.relationService.isNtoNRelation(_this.parentProperty);
            if (isNtoN) {
                var children = item[_this.parentProperty.thatEndPropertyName];
                return children && children.length > 0;
            }
            else {
                return item[_this.parentProperty.thatEndPropertyName] === _this.parentId;
            }
        };
        this.updateAddUrl = function () {
            _this.addUrl = _this.table.entity.name.name + '/add';
            if (_this.parentProperty) {
                _this.addUrl += "?" + _this.parentProperty.thatEndEntityName + "=" + _this.parentId;
            }
        };
        this.errorOnDelete = function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Error!',
                subTitle: 'Delete failed!',
                buttons: ['OK']
            });
            alert.present();
        };
        this.errorOnLink = function (err) {
            //this.modalDialogService.open("Error", "Failed to link record");
        };
        this.errorOnUnlink = function (err) {
            //this.modalDialogService.open("Error", "Failed to unlink record");
        };
        this.getDeleteResult = function (data) {
        };
        this.getLinkResult = function (data) {
        };
        this.getUnlinkResult = function (data) {
        };
        this.deleteComplete = function () {
            _this.table.downloadItems();
        };
        this.linkComplete = function () {
            _this.table.downloadItems();
        };
        this.unlinkComplete = function () {
            _this.table.downloadItems();
        };
        this.viewRegularTable = function () {
            _this.table.viewMode = __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableVm__["a" /* TableViewMode */].Regular;
        };
        this.viewStackTable = function () {
            _this.table.viewMode = __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableVm__["a" /* TableViewMode */].Stack;
        };
        this.getTableSearchFormId();
    }
    TableComponent.prototype.ngOnInit = function () {
        this.table.downloadItems();
        this.updateAddUrl();
    };
    TableComponent.prototype.ngOnDestroy = function () {
    };
    TableComponent.prototype.onPageSelected = function (pageNumber) {
        this.table.currentPage = pageNumber;
        this.table.downloadItems();
    };
    TableComponent.prototype.showDeleteConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Are you sure?',
            message: 'Do you want to delete this?',
            buttons: [
                {
                    text: 'Cancel',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.table.delete(item)
                            .map(function (res) {
                            return res.json();
                        })
                            .subscribe(_this.getDeleteResult, _this.errorOnDelete, _this.deleteComplete);
                    }
                }
            ]
        });
        confirm.present();
    };
    return TableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableVm__["b" /* TableVm */])
], TableComponent.prototype, "table", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__EntityMaps_RelationProperty__["a" /* RelationProperty */])
], TableComponent.prototype, "parentProperty", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TableComponent.prototype, "parentId", void 0);
TableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-table',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\table.component.html"*/'﻿\n\n    <table class="rwd-table">\n\n        <thead class="table-header" [table]="table" (sorted)="sort($event)"></thead>\n\n        <tr *ngFor="let row of table.tableData?.value; let i = index">\n\n            <td><input type="checkbox" name="name" value="" /></td>\n\n            <td *ngFor="let column of table.columns" [attr.data-th]="column?.property?.labelText">\n\n                <rd-view-property *ngIf="column.isVisible" [entity]="table.entity" [property]="column.property" [item]="row"></rd-view-property>\n\n            </td>\n\n            <td *ngIf="table.options.tableDataMode === 1">\n\n                <span *ngIf="row?._IsSelected === true">Linked</span>\n\n                <a (click)="unlink(row)" *ngIf="isSelected(row)" class="btn btn-primary"><i class="fa fa-unlink"></i></a>\n\n                <a (click)="link(row)" *ngIf="!isSelected(row)" class="btn btn-primary"><i class="fa fa-link"></i></a>\n\n            </td>\n\n            <td>\n\n                <button (click)="showDeleteConfirm(row)" ion-button>\n\n                    <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n                <!--<rd-modal-dialog [item]="row"\n\n                                     [itemId]="table.entity.name.name + \'_delete_\' + row[table.entity.idColumn.name.name]"\n\n                                     (okClicked)="deleteConfirmed($event)"\n\n                                     [title]="\'Confirm\'"\n\n                                     [message]="\'Are you sure you want to delete?\'"></rd-modal-dialog>-->\n\n            </td>\n\n        </tr>\n\n\n\n    </table>\n\n\n\n\n\n    <ion-fab right bottom>\n\n        <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n\n        <ion-fab-list side="left">\n\n            <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n\n            <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n\n            <button ion-fab><ion-icon name="logo-vimeo"></ion-icon></button>\n\n            <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n\n\n    <!--<div class="row">\n\n        <button type="button" class="btn btn-default btn-lg" data-toggle="modal" [attr.data-target]="\'#\'+ searchFormId">Search</button>\n\n        <a class="btn btn-success" (click)="addNewItem()"><i class="fa fa-plus"></i> Add</a>\n\n        <a class="btn btn-primary" (click)="linkItem()" *ngIf="isLinkItemButtonVisible()"><i class="fa fa-link"></i> Link Existing</a>\n\n        <a class="btn btn-primary" (click)="finishLinkItem()" *ngIf="isFinishLinkItemButtonVisible()"><i class="fa fa-link"></i> Finish Link</a>\n\n        <i class="fa fa-spinner fa-pulse fa-2x fa-fw" *ngIf="table.isLoading"></i>\n\n\n\n\n\n\n\n        <div class="dropdown pull-right">\n\n            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">\n\n                <span class="fa fa-gear"></span>\n\n                <span class="caret"></span>\n\n            </button>\n\n            <ul class="dropdown-menu">\n\n                <li><a (click)="viewRegularTable()"><span class="fa fa-check" *ngIf="table.viewMode===0"></span>Table</a></li>\n\n                <li><a (click)="viewStackTable()"><span class="fa fa-check" *ngIf="table.viewMode===1"></span>Stack</a></li>\n\n            </ul>\n\n        </div>\n\n        <div class="dropdown pull-right">\n\n            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">\n\n                <i class="fa fa-eye"></i>\n\n                <span class="caret"></span>\n\n            </button>\n\n            <ul class="dropdown-menu">\n\n                <li *ngFor="let column of table.columns">\n\n                    <a (click)="table.toggleVisibility(column)"><span class="fa fa-eye" *ngIf="column.isVisible"></span>{{column.property.name.name}}</a>\n\n                </li>\n\n            </ul>\n\n        </div>\n\n    </div>-->\n\n    <!--<div class="container">\n\n\n\n        <div class="modal fade" id="{{searchFormId}}" role="dialog">\n\n            <div class="modal-dialog">\n\n                <div class="modal-content">\n\n                    <div class="modal-header">\n\n                        <button type="button" class="close" data-dismiss="modal">&times;</button>\n\n                        <h4 class="modal-title">Modal Header</h4>\n\n                    </div>\n\n                    <div class="modal-body">\n\n\n\n                        <table class="table">\n\n                            <tr *ngFor="let column of table.columns">\n\n                                <td>\n\n                                    {{column.property.labelText}}\n\n\n\n                                </td>\n\n                                <td>\n\n                                    <rd-search-property [column]="column"></rd-search-property>\n\n                                </td>\n\n                            </tr>\n\n                        </table>\n\n\n\n                    </div>\n\n                    <div class="modal-footer">\n\n                        <button type="button" class="btn btn-default" (click)="search()"><i class="fa fa-search"></i></button>\n\n                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </div>\n\n    </div>-->\n\n    <!--<table class="table" *ngIf="table.viewMode == 1">\n\n        <thead>\n\n            <tr>\n\n                <th>Column Name</th>\n\n                <th>Value</th>\n\n            </tr>\n\n        </thead>\n\n        <tbody *ngFor="let row of table.tableData?.value; let i = index">\n\n            <tr>\n\n                <td></td>\n\n                <td><input type="checkbox" name="name" value="" /></td>\n\n            </tr>\n\n            <tr *ngFor="let column of table.columns">\n\n                <td *ngIf="column.isVisible"><b><table-header-cell [column]="column" (sorted)="sort(column)"></table-header-cell></b> </td>\n\n\n\n                <td *ngIf="column.isVisible"><rd-view-property [entity]="table.entity" [property]="column.property" [item]="row"></rd-view-property></td>\n\n            </tr>\n\n            <tr *ngIf="table.options.tableDataMode === 1">\n\n                <td>Is Linked</td>\n\n                <td>\n\n                    <span *ngIf="row?._IsSelected === true">Linked</span>\n\n                    <a (click)="unlink(row)" *ngIf="isSelected(row)" class="btn btn-primary"><i class="fa fa-unlink"></i></a>\n\n                    <a (click)="link(row)" *ngIf="!isSelected(row)" class="btn btn-primary"><i class="fa fa-link"></i></a>\n\n                </td>\n\n\n\n            </tr>\n\n            <tr>\n\n                <td></td>\n\n\n\n                <td>\n\n                    <rd-modal-dialog [item]="row"\n\n                                     [itemId]="table.entity.name.name + \'_delete_\' + row[table.entity.idColumn.name.name]"\n\n                                     (okClicked)="deleteConfirmed($event)"\n\n                                     [title]="\'Confirm\'"\n\n                                     [message]="\'Are you sure you want to delete?\'"></rd-modal-dialog>\n\n                </td>\n\n            </tr>\n\n        </tbody>\n\n    </table>-->\n\n    <!--<table class="table" *ngIf="table.viewMode == 0">\n\n\n\n        <thead class="table-header" [table]="table" (sorted)="sort($event)"></thead>\n\n        <tbody>\n\n        <tr *ngFor="let row of table.tableData?.value; let i = index">\n\n            <td><input type="checkbox" name="name" value=""/></td>\n\n            <td *ngFor="let column of table.columns">\n\n                <rd-view-property *ngIf="column.isVisible" [entity]="table.entity" [property]="column.property" [item]="row"></rd-view-property>\n\n            </td>\n\n            <td *ngIf="table.options.tableDataMode === 1">\n\n                <span *ngIf="row?._IsSelected === true">Linked</span>\n\n                <a (click)="unlink(row)" *ngIf="isSelected(row)" class="btn btn-primary"><i class="fa fa-unlink"></i></a>\n\n                <a (click)="link(row)" *ngIf="!isSelected(row)" class="btn btn-primary"><i class="fa fa-link"></i></a>\n\n            </td>\n\n            <td>\n\n                <rd-modal-dialog [item]="row"\n\n                                 [itemId]="table.entity.name.name + \'_delete_\' + row[table.entity.idColumn.name.name]"\n\n                                 (okClicked)="deleteConfirmed($event)"\n\n                                 [title]="\'Confirm\'"\n\n                                 [message]="\'Are you sure you want to delete?\'"></rd-modal-dialog>\n\n            </td>\n\n        </tr>\n\n        </tbody>\n\n    </table>-->\n\n\n\n    <rd-table-pagination (pageSelected)="onPageSelected($event)" [totalPageCount]="table.pageCount" [current]="1"></rd-table-pagination>\n\n\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\table.component.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__Services_modal_dialog_service__["a" /* ModalDialogService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_6__Services_RelationService__["a" /* RelationService */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_8__Commons_GuidService__["a" /* GuidService */]])
], TableComponent);

//# sourceMappingURL=table.component.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableColumnVm__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__EntityMaps_PropertyType__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPropertyComponent = (function () {
    function SearchPropertyComponent(entityMap) {
        this.entityMap = entityMap;
    }
    SearchPropertyComponent.prototype.ngOnInit = function () {
        if (!this.column.table.filterData) {
            this.column.table.filterData = {};
        }
        var type = this.column.property.type;
        var filter = this.column.table.filterData;
        if (type === __WEBPACK_IMPORTED_MODULE_3__EntityMaps_PropertyType__["a" /* PropertyType */].Number || type === __WEBPACK_IMPORTED_MODULE_3__EntityMaps_PropertyType__["a" /* PropertyType */].Date) {
            var propertyName = this.column.property.name.name;
            if (!filter[propertyName]) {
                filter[propertyName] = {};
            }
        }
    };
    return SearchPropertyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableColumnVm__["a" /* TableColumnVm */])
], SearchPropertyComponent.prototype, "column", void 0);
SearchPropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-search-property',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\search-property.component.html"*/'﻿<div [ngSwitch]="column.property.type">\n\n	<div *ngSwitchCase="0" class="form-group row">\n\n		<div class="col-md-12">\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name]" class="form-control" />\n\n		</div>\n\n	</div>\n\n	<div *ngSwitchCase="1" class="form-group row">\n\n		<div class="col-md-6 pull-left">\n\n			<label class="col-2 col-form-label">From</label>\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name].min" class="form-control" />\n\n		</div>\n\n		<div class="col-md-6 pull-left">\n\n			<label class="col-2 col-form-label">To</label>\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name].max" class="form-control" />\n\n		</div>\n\n	</div>\n\n	<div *ngSwitchCase="2" class="form-group row">\n\n		<div class="col-md-6 pull-left">\n\n			<label class="col-2 col-form-label">From</label>\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name].min" type="date" class="form-control" />\n\n		</div>\n\n		<div class="col-md-6 pull-left">\n\n			<label class="col-2 col-form-label">To</label>\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name].max" type="date" class="form-control" />\n\n		</div>\n\n	</div>\n\n	<div *ngSwitchCase="3" class="form-group row">\n\n		<div class="col-md-12">\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name]" class="col-12 form-control" />\n\n		</div>\n\n	</div>\n\n	<div *ngSwitchCase="4" class="form-group row">\n\n		<div class="col-md-12">\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name]" class="col-12 form-control" />\n\n		</div>\n\n	</div>\n\n	<div *ngSwitchCase="5" class="form-group row">\n\n		<div class="col-md-12">\n\n			<input [(ngModel)]="column.table.filterData[column.property.name.name]" class="col-12 form-control" />\n\n		</div>\n\n	</div>\n\n</div>\n\n\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\search-property.component.html"*/,
        styleUrls: ['']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__EntityMaps_EntityMap__["a" /* EntityMap */]])
], SearchPropertyComponent);

//# sourceMappingURL=search-property.component.js.map

/***/ }),

/***/ 617:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableHeaderCellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortDirection__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableColumnVm__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableHeaderCellComponent = (function () {
    function TableHeaderCellComponent() {
        var _this = this;
        this.sorted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ascClass = "arrow-up";
        this.descClass = "arrow-down";
        this.unsortedClass = "fa-sort";
        this.toggleSort = function () {
            if (_this.column.property.canSort) {
                if (_this.column.sortDirection === __WEBPACK_IMPORTED_MODULE_1__SortDirection__["a" /* SortDirection */].Asc) {
                    _this.column.sortDirection = __WEBPACK_IMPORTED_MODULE_1__SortDirection__["a" /* SortDirection */].Desc;
                }
                else {
                    _this.column.sortDirection = __WEBPACK_IMPORTED_MODULE_1__SortDirection__["a" /* SortDirection */].Asc;
                }
                _this.sorted.emit(_this.column);
            }
        };
        this.resetSortToUnsort = function () {
            if (_this.column.property.canSort) {
                _this.column.sortDirection = __WEBPACK_IMPORTED_MODULE_1__SortDirection__["a" /* SortDirection */].Unsorted;
            }
        };
    }
    Object.defineProperty(TableHeaderCellComponent.prototype, "sortClass", {
        get: function () {
            if (this.column.property.canSort) {
                if (this.column.sortDirection === __WEBPACK_IMPORTED_MODULE_1__SortDirection__["a" /* SortDirection */].Asc) {
                    return this.ascClass;
                }
                else if (this.column.sortDirection === __WEBPACK_IMPORTED_MODULE_1__SortDirection__["a" /* SortDirection */].Desc) {
                    return this.descClass;
                }
                else {
                    return this.unsortedClass;
                }
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableHeaderCellComponent.prototype, "sortableClass", {
        get: function () {
            if (this.column.property.canSort) {
                return " sortable ";
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    TableHeaderCellComponent.prototype.ngOnInit = function () { };
    return TableHeaderCellComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableColumnVm__["a" /* TableColumnVm */])
], TableHeaderCellComponent.prototype, "column", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TableHeaderCellComponent.prototype, "sorted", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TableHeaderCellComponent.prototype, "ascClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TableHeaderCellComponent.prototype, "descClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TableHeaderCellComponent.prototype, "unsortedClass", void 0);
TableHeaderCellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'table-header-cell',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\table-header-cell.component.html"*/'﻿<div (click)="toggleSort()"> {{column?.property?.labelText}} <ion-icon name="{{sortClass}}"></ion-icon> <span class="fa {{sortClass}}{{sortableClass}}"></span> </div>'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\table-header-cell.component.html"*/,
        styles: [".sortable tr {\n    cursor: pointer;\n}"]
    })
], TableHeaderCellComponent);

//# sourceMappingURL=table-header-cell.component.js.map

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_Entity__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_entityDetails_entity_details__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewPropertyComponent = (function () {
    function ViewPropertyComponent(entityMap, navCtrl) {
        var _this = this;
        this.entityMap = entityMap;
        this.navCtrl = navCtrl;
        this.item = {};
        this.showDetailPage = function (event, entity) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_entityDetails_entity_details__["a" /* EntityDetailsPage */], {
                entity: _this.entity,
                item: _this.item,
                app: _this.entityMap.app.name,
                entityName: _this.entity.name.name,
                itemId: "ItemId0"
            });
            return;
        };
    }
    ViewPropertyComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ViewPropertyComponent.prototype, "value", {
        get: function () {
            return this.item ? this.item[this.property.name.name] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPropertyComponent.prototype, "detailsUrl", {
        get: function () {
            return '/' + this.entity.name.name + "/view/" + this.item[this.entity.idColumn.name.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewPropertyComponent.prototype, "parentUrl", {
        get: function () {
            var parentProperty = this.property;
            return '/' + parentProperty.entityName.name + "/view/" + this.item[this.property.name.name];
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ViewPropertyComponent.prototype, "parentText", {
        get: function () {
            var parentProperty = this.property;
            var parentEntity = this.entityMap.getEntity(parentProperty.entityName.name);
            var parentDescriptionProperty = parentEntity.properties[1];
            if (parentDescriptionProperty) {
                var parentItem = this.item[parentProperty.entityName.name];
                if (parentItem) {
                    return [parentDescriptionProperty.name.name];
                }
            }
            return null;
            //return this.item[parentProperty.displayPropertyName.name];
        },
        enumerable: true,
        configurable: true
    });
    return ViewPropertyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ViewPropertyComponent.prototype, "property", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__EntityMaps_Entity__["a" /* Entity */])
], ViewPropertyComponent.prototype, "entity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ViewPropertyComponent.prototype, "item", void 0);
ViewPropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-view-property',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\view-property.component.html"*/'﻿<a *ngIf="property.type===0"\n\n   [href]="\'/#/\' + entityMap.app.name + \'/\' + entity.name.name +\'/\' + item[entity.idColumn.name.name]"\n\n>{{value}}</a>\n\n\n\n<span *ngIf="property.type===1"  (click)="showDetailPage($event, item)" >\n\n    {{item[property.name.name]}}\n\n</span>\n\n<span *ngIf="property.type===2">\n\n    {{item[property.name.name] | date}}\n\n</span>\n\n\n\n<a *ngIf="property.type===3 && item!=null && item!=undefined && item[property.name.name]"\n\n   [href]="\'/File/\' + entity.name.name +\'/\' + property.name.name+\'/\'+item[entity.idColumn.name.name]+\'/Big_\'+item[property.name.name]"\n\n   [attr.data-lightbox]="entity.name.name +\'-\' + property.name.name+\'-\'+item[entity.idColumn.name.name]"\n\n   [attr.data-title]="item[property.name.name]">\n\n    <img [src]="\'/File/\' + entity.name.name +\'/\' + property.name.name+\'/\'+item[entity.idColumn.name.name]+\'/Thumbnail_\'+item[property.name.name]"\n\n         style="border-width: 0px;" />\n\n</a>\n\n\n\n\n\n\n\n<a *ngIf="property.type===4 && item!=null && item!=undefined && item[property.name.name]" \n\n   [href]="\'/File/\' + entity.name.name +\'/\' + property.name.name+\'/\'+item[entity.idColumn.name.name]+\'/\'+item[property.name.name]"\n\n   (click)="showDetailPage($event, item)" >\n\n    {{item[property.name.name]}}\n\n</a>\n\n\n\n\n\n\n\n<!--<a routerLink="[parentUrl]" routerLinkActive="active">{{parentText}}</a>-->\n\n<a  (click)="showDetailPage($event, item)" \n\n    *ngIf="property.type===5">{{parentText}}</a>\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\view-property.component.html"*/,
        styleUrls: ['']
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
], ViewPropertyComponent);

//# sourceMappingURL=view-property.component.js.map

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalDialogComponent = (function () {
    function ModalDialogComponent() {
        var _this = this;
        this.cancelClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.okClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.clickOk = function () {
            _this.okClicked.emit(_this.item);
        };
        this.clickCancel = function () {
            _this.cancelClicked.emit(_this.item);
        };
        this.open = function () {
            jQuery("#" + _this.dialogId).modal('show');
        };
    }
    Object.defineProperty(ModalDialogComponent.prototype, "dialogId", {
        get: function () {
            return "dialog_" + this.itemId;
        },
        enumerable: true,
        configurable: true
    });
    return ModalDialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "message", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalDialogComponent.prototype, "buttonIconClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "itemId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "cancelClicked", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ModalDialogComponent.prototype, "okClicked", void 0);
ModalDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-modal-dialog',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\modal-dialog.component.html"*/'﻿<button type="button" class="btn btn-info " data-toggle="modal" [attr.data-target]="dialogId" (click)="open()"><i class="fa fa-trash"></i></button>\n\n<div class="modal fade" [attr.id]="dialogId" role="dialog">\n\n	<div class="modal-dialog">\n\n		<div class="modal-content">\n\n			<div class="modal-header">\n\n				<button type="button" class="close" data-dismiss="modal">&times;</button>\n\n				<h4 class="modal-title">{{title}}</h4>\n\n			</div>\n\n			<div class="modal-body">\n\n				<p>{{message}}</p>\n\n			</div>\n\n			<div class="modal-footer">\n\n				<button type="button" class="btn btn-primary" data-dismiss="modal" (click)="clickOk()">Ok</button>\n\n				<button type="button" class="btn btn-default" data-dismiss="modal" (click)="clickCancel()">Cancel</button>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</div>'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\modal-dialog.component.html"*/
    })
], ModalDialogComponent);

//# sourceMappingURL=modal-dialog.component.js.map

/***/ }),

/***/ 620:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        var _this = this;
        this.current = 1;
        this.totalPageCount = 1;
        this.maxButtonCount = 5;
        this.pageSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.getCurrentPage = function () {
            if (_this.current < 1) {
                return 1;
            }
            else if (_this.current > _this.totalPageCount) {
                return _this.totalPageCount;
            }
            else {
                return _this.current;
            }
        };
        this.isPreviousPageEnabled = function () {
            return _this.getCurrentPage() > 1;
        };
        this.isNextPageEnabled = function () {
            return _this.getCurrentPage() < _this.totalPageCount;
        };
        this.isFirstPageEnabled = function () {
            return _this.getCurrentPage() > 1;
        };
        this.isLastPageEnabled = function () {
            return _this.getCurrentPage() < _this.totalPageCount;
        };
        this.getFirstShownPage = function () {
            if (_this.totalPageCount <= _this.maxButtonCount) {
                return 1;
            }
            else {
                var firstShownPage = _this.getCurrentPage() - Math.floor(_this.maxButtonCount / 2);
                if (_this.totalPageCount - firstShownPage < _this.maxButtonCount) {
                    firstShownPage = _this.totalPageCount - _this.maxButtonCount + 1;
                }
                firstShownPage = Math.max(firstShownPage, 1);
                return firstShownPage;
            }
        };
        this.getLastShownPage = function () {
            if (_this.totalPageCount <= _this.maxButtonCount) {
                return Math.min(_this.maxButtonCount, _this.totalPageCount);
            }
            else {
                return Math.min(_this.getFirstShownPage() + _this.maxButtonCount - 1, _this.totalPageCount);
            }
        };
        this.getPageNumbers = function () {
            var pages = [];
            for (var page = _this.getFirstShownPage(); page <= _this.getLastShownPage(); page++) {
                pages.push(page);
            }
            return pages;
        };
    }
    PaginationComponent.prototype.getPreviousPage = function () {
        if (this.getCurrentPage() > 1) {
            return this.getCurrentPage() - 1;
        }
        return 1;
    };
    ;
    PaginationComponent.prototype.getNextPage = function () {
        if (this.getCurrentPage() < this.totalPageCount) {
            return this.getCurrentPage() + 1;
        }
        else {
            return this.totalPageCount;
        }
    };
    ;
    PaginationComponent.prototype.selectPage = function (pageNumber) {
        if (pageNumber === void 0) { pageNumber = 1; }
        var previousPage = this.current;
        this.current = pageNumber;
        this.current = this.getCurrentPage();
        if (previousPage != this.current) {
            this.pageSelected.emit(pageNumber);
        }
    };
    ;
    PaginationComponent.prototype.getNumber = function (length) {
        return new Array(length);
    };
    ;
    return PaginationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "current", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "totalPageCount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], PaginationComponent.prototype, "maxButtonCount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "pageSelected", void 0);
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-table-pagination',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\pagination.component.html"*/'﻿<button ion-button [class.disabled]="!isFirstPageEnabled()" (click)="selectPage(1)" >\n\n    <ion-icon name="skip-backward" ></ion-icon>\n\n</button>\n\n<button ion-button [class.disabled]="!isPreviousPageEnabled()"  (click)="selectPage(getPreviousPage())" >\n\n    <ion-icon name="rewind"></ion-icon>\n\n</button>\n\n<button ion-button  [class.active]="page == current" *ngFor="let page of getPageNumbers()"  (click)="selectPage(page)">\n\n    {{page}}\n\n</button>\n\n<button ion-button [class.disabled]="!isNextPageEnabled()"  (click)="selectPage(getNextPage())" >\n\n    <ion-icon name="fastforward"></ion-icon>\n\n</button>\n\n<button ion-button  [class.disabled]="!isLastPageEnabled()" (click)="selectPage(totalPageCount)" >\n\n    <ion-icon name="skip-forward"></ion-icon>\n\n</button>\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\pagination.component.html"*/
    })
], PaginationComponent);

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEntityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_request__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SortDirection__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ViewModels_TableVm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_modal_dialog_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__EntityMaps_Entity__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_data_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Services_RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ViewModels_TableRequestService__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__FormControlService__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var EditEntityComponent = (function () {
    function EditEntityComponent(dataService, entityMap, cdr, fb, dialogService, relationService, tableRequestService, formControlService) {
        var _this = this;
        this.dataService = dataService;
        this.entityMap = entityMap;
        this.cdr = cdr;
        this.fb = fb;
        this.dialogService = dialogService;
        this.relationService = relationService;
        this.tableRequestService = tableRequestService;
        this.formControlService = formControlService;
        this.item = {};
        this.eventName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.parents = {};
        this.parentSelectionTable = {};
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
        this.createTableVmListForParentProperties = function () {
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                _this.parentSelectionTable[property.name.name] = new __WEBPACK_IMPORTED_MODULE_4__ViewModels_TableVm__["b" /* TableVm */](_this.dataService, _this.entity, _this.relationService, _this.tableRequestService);
            }
        };
        this.getUploader = function (property) {
            //this.uploadManager.getUploader(property);
        };
        this.downloadEntity = function (entity, id) {
            if (id) {
                _this.dataService.getEntity(_this.entity, id)
                    .map(function (res) {
                    return res.json();
                })
                    .subscribe(_this.acceptData, function (err) { return console.log('downloadEntity() error: ' + err); }, _this.downloadComplete);
            }
        };
        this.downloadParents = function () {
            var _loop_1 = function () {
                if (property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                    var parentProperty_1 = property;
                    var isManyToOne = _this.relationService.isManyToOneProperty(parentProperty_1);
                    if (isManyToOne) {
                        var parentEntity_1 = _this.entityMap.getEntity(parentProperty_1.entityName.name);
                        var options = new __WEBPACK_IMPORTED_MODULE_2__table_request__["b" /* TableRequest */]();
                        options.limit = -1;
                        options.offset = 0;
                        options.sortDirection = __WEBPACK_IMPORTED_MODULE_3__SortDirection__["a" /* SortDirection */].Asc;
                        options.sortColumn = parentProperty_1.displayPropertyName.name;
                        var parentColumnName_1 = parentProperty_1.name.name;
                        _this.dataService.getEntitySummaries(parentEntity_1, options)
                            .map(function (res) {
                            return res.json();
                        })
                            .subscribe(function (data) {
                            var items = [];
                            for (var _i = 0, _a = data.rows; _i < _a.length; _i++) {
                                var row = _a[_i];
                                var parentItem = {};
                                parentItem.id = row[parentEntity_1.idColumn.name.name];
                                parentItem.text = row[parentProperty_1.displayPropertyName.name];
                                items.push(parentItem);
                            }
                            _this.parents[parentColumnName_1] = items;
                            _this.updateDropDownLists();
                        }, function (err) { return console.log('downloadParents() error:' + err); }, _this.downloadComplete);
                    }
                }
            };
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                _loop_1();
            }
        };
        this.dropDownOnChangeHandlers = {};
        this.createDropDownListOnChangeHandlers = function () {
            var _loop_2 = function () {
                if (property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                    var changedProperty_1 = property;
                    _this.dropDownOnChangeHandlers[property.name.name] = function (e) {
                        var value = jQuery(e.target).val();
                        _this.selectionChanged(changedProperty_1, value);
                    };
                }
            };
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                _loop_2();
            }
        };
        this.updateParent = function () {
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                    if (property.name.name === _this.parentPropertyName) {
                        _this.item[property.name.name] = _this.parentId;
                    }
                }
            }
        };
        this.updateDropDownLists = function () {
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                    var selector = ".select_" + property.name.name;
                    var change = "change";
                    var handler = _this.dropDownOnChangeHandlers[property.name.name];
                    jQuery(selector).off(change, handler);
                    jQuery(selector).on(change, handler);
                }
            }
        };
        this.selectionChanged = function (property, newValue) {
            _this.item[property.name.name] = newValue;
        };
        this.showSelectParentDialog = function (property, item) {
            jQuery("#parentModel_" + property.name.name).modal("show");
            console.log("showSelectParentDialog" + property.name + "->" + JSON.stringify(item));
        };
        this.createFormControls = function () {
            var controls = _this.formControlService.createFormControlsForProperties(_this.entity.properties);
            _this.form = _this.fb.group(controls);
        };
        this.acceptData = function (data) {
            _this.item = data;
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Date) {
                    if (data[property.name.name]) {
                        //TODO
                        var date = new Date(data[property.name.name]);
                        //let newDataFormat = moment(date.getTime()).format("YYYY-MM-DD");
                        //data[property.name.name] = newDataFormat;
                    }
                }
            }
            //TODO
            //this.uploadManager.setupFileUploader(this.entity, this.item);
            _this.setupUploaderFilenames();
            _this.item = data;
        };
        this.setupUploaderFilenames = function () {
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Image || property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].File) {
                    //this.uploadManager.setFilename(this.entity, property, this.itemId.toString(), this.item[property.name.name]);
                }
            }
        };
        this.downloadComplete = function () {
            //TODO
            //this.uploadManager.setupFileUploader(this.entity, this.item);
            _this.cdr.detectChanges();
        };
        this.saveComplete = function () {
            console.log("saveComplete");
        };
        this.acceptSubmitResult = function (result) {
            _this.itemId = result.value;
            //this.router.navigateByUrl(this.detailsUrl);
        };
        this.submitEntity = function () {
            _this.isAdd = !_this.hasId();
            _this.dataService.save(_this.entity, _this.item)
                .map(function (res) {
                return res.json();
            })
                .subscribe(_this.acceptSubmitResult, _this.processSaveError, _this.saveComplete);
        };
        this.processSaveError = function (err) {
            _this.dialogService.showErrorDialog("Error", "Failed to save data");
        };
        this.isFormValid = function () {
        };
        this.hasError = function (property, errorKey) {
            var control = _this.controlOf(property);
            return control ? control.hasError(errorKey) : null;
        };
        this.isTouched = function (property) {
            return _this.controlOf(property).touched;
        };
        this.controlOf = function (property) {
            return _this.form.controls[property.name.name];
        };
    }
    EditEntityComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    EditEntityComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    EditEntityComponent.prototype.ngOnInit = function () {
        //TODO: download parent
        //     this.sub = this.route.params.subscribe((params: any) => {
        //const entityNameParam = 'entityName';
        //const idParam = 'id';
        //const parentPropertyNameParam = 'parentPropertyName';
        //const parentIdParam = 'parentId';
        //this.parentId = params[parentIdParam];
        //this.parentPropertyName = params[parentPropertyNameParam];
        //         if (params[entityNameParam] !== undefined) {
        //             let entityName = params[entityNameParam];
        //	let id = params[idParam];
        //             this.entity = this.entityMap.getEntity(entityName);
        //	this.uploadManager.setupFileUploader(this.entity,this.item);
        //	this.createFormControls();
        //	this.downloadEntity(this.entity, id);
        //	this.downloadParents();
        //         } 
        //     });
        this.cdr.detectChanges();
        this.createDropDownListOnChangeHandlers();
        this.updateParent();
    };
    EditEntityComponent.prototype.createGuid = function () {
        function f() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }
        return f() + f() + '-' + f() + '-' + f() + '-' + f() + '-' + f() + f() + f();
    };
    EditEntityComponent.prototype.is1ToNProperty = function (property) {
        return property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Relation &&
            this.relationService.is1toNRelation(property);
    };
    EditEntityComponent.prototype.isManyToOneProperty = function (property) {
        return property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Relation &&
            this.relationService.isManyToOneProperty(property);
    };
    EditEntityComponent.prototype.isOneToManyOrManyToManyProperty = function (property) {
        return property.type === __WEBPACK_IMPORTED_MODULE_11__EntityMaps_PropertyType__["a" /* PropertyType */].Relation &&
            this.relationService.isOneToManyOrManyToManyProperty(property);
    };
    EditEntityComponent.prototype.getKeys = function (obj) {
        var keys = [];
        for (var key in obj) {
            keys.push(key);
        }
        return keys;
    };
    EditEntityComponent.prototype.hasPropertyError = function (property) {
        if (this.form.controls[property.name.name]) {
            return !this.form.controls[property.name.name].valid;
        }
        return false;
    };
    Object.defineProperty(EditEntityComponent.prototype, "detailsUrl", {
        get: function () {
            return '/' + this.entity.name.name + "/view/" + this.itemId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditEntityComponent.prototype, "itemId", {
        get: function () {
            var id = this.item[this.entity.idColumn.name.name];
            return id ? id : '';
        },
        set: function (id) {
            this.item[this.entity.idColumn.name.name] = id;
        },
        enumerable: true,
        configurable: true
    });
    EditEntityComponent.prototype.hasId = function () {
        if (this.itemId) {
            return false;
        }
        else {
            return true;
        }
    };
    return EditEntityComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__EntityMaps_Entity__["a" /* Entity */])
], EditEntityComponent.prototype, "entity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditEntityComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], EditEntityComponent.prototype, "eventName", void 0);
EditEntityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-edit-entity',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\edit-entity.component.html"*/'﻿\n\n<h2>Edit {{entity.name.name}}!</h2>\n\n<div class="container">\n\n    <div>\n\n        <form (ngSubmit)="onSubmit()" #entityForm="ngForm" [formGroup]="form" method="post" enctype="multipart/form-data" target="uploadTrg">\n\n            <div class="form-group row" *ngFor="let property of entity.properties">\n\n                <div [ngSwitch]="property.type">\n\n                    <div *ngSwitchCase="0" [class.has-error]="hasPropertyError(property)">\n\n                        <label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n                        <div class="col-sm-10">\n\n                            <div>\n\n                                <input class="form-control" [formControl]="form.controls[property.name.name]" [(ngModel)]="item[property.name.name]" />\n\n                                <div *ngIf="isTouched(property)">\n\n                                    <div *ngIf="hasError(property,\'required\')" class="alert alert-danger">\n\n                                        <strong>{{property.labelText}} is required</strong>\n\n                                    </div>\n\n                                    <div *ngIf="hasError(property,\'pattern\')" class="alert alert-danger">\n\n                                        <strong>{{property.labelText}} does not have correct format</strong>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <div *ngSwitchCase="1" [class.has-error]="hasPropertyError(property)">\n\n                        <label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n                        <div class="col-sm-10">\n\n                            <div>\n\n                                <input class="form-control" type="number" [formControl]="form.controls[property.name.name]" [(ngModel)]="item[property.name.name]" />\n\n                                <div *ngIf="isTouched(property)">\n\n                                    <div *ngIf="hasError(property,\'required\')" class="alert alert-danger">\n\n                                        <strong>{{property.labelText}} is required</strong>\n\n                                    </div>\n\n                                    <div *ngIf="hasError(property,\'pattern\')" class="alert alert-danger">\n\n                                        <strong>{{property.labelText}} does not have correct format</strong>\n\n                                    </div>\n\n                                    <div *ngIf="hasError(property,\'maxValue\')" class="alert alert-danger">\n\n                                        <strong>Maximum value of {{property.labelText}} is {{property.maxValue}}</strong>\n\n                                    </div>\n\n                                    <div *ngIf="hasError(property,\'minValue\')" class="alert alert-danger">\n\n                                        <strong>Minimum value of {{property.labelText}} is {{property.minValue}}</strong>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <div *ngSwitchCase="2" [class.has-error]="hasPropertyError(property)">\n\n                        <label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n                        <div class="col-sm-10">\n\n                            <div>\n\n                                <input class="form-control" type="date" [formControl]="form.controls[property.name.name]" [(ngModel)]="item[property.name.name]" />\n\n                                <div *ngIf="isTouched(property)">\n\n                                    <div *ngIf="hasError(property,\'required\')" class="alert alert-danger">\n\n                                        <strong>{{property.labelText}} is required</strong>\n\n                                    </div>\n\n                                    <div *ngIf="hasError(property,\'pattern\')" class="alert alert-danger">\n\n                                        <strong>{{property.labelText}} does not have correct format</strong>\n\n                                    </div>\n\n                                    <div *ngIf="hasError(property,\'maxValue\')" class="alert alert-danger">\n\n                                        <strong>Maximum value of {{property.labelText}} is {{property.maxValue}}</strong>\n\n                                    </div>\n\n                                    <div *ngIf="hasError(property,\'minValue\')" class="alert alert-danger">\n\n                                        <strong>Minimum value of {{property.labelText}} is {{property.minValue}}</strong>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <div *ngSwitchCase="3" [class.has-error]="hasPropertyError(property)">\n\n                        <label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n                        <div class="col-sm-10">\n\n                            <div>\n\n                                <input type="hidden" [formControl]="form.controls[property.name.name]" [(ngModel)]="item[property.name.name]" />\n\n                                <div class="row">\n\n                                    <div class="col-md-3">\n\n                                        <a [href]="uploadManager.filenames[property.name.name]" [attr.data-lightbox]="uploadManager.imageIds[property.name.name]" [attr.data-title]="uploadManager.originalFilenames[property.name.name]">\n\n                                            <img [src]="uploadManager.thumbnails[property.name.name]" style="border-width: 0px;" />\n\n                                        </a>\n\n                                        <input type="file" ng2FileSelect uploader="uploadManager.uploader[property.name.name]" />\n\n                                    </div>\n\n\n\n                                    <div class="col-md-9" style="margin-bottom: 40px">\n\n                                        <table class="table">\n\n                                            <thead>\n\n                                                <tr>\n\n                                                    <th>Progress</th>\n\n                                                    <th>Status</th>\n\n                                                    <th>Actions</th>\n\n                                                </tr>\n\n                                            </thead>\n\n                                            <tbody>\n\n                                                <tr *ngFor="let item of uploadManager.uploader[property.name.name]?.queue">\n\n                                                    <td *ngIf="getUploader(property)?.isHTML5">\n\n                                                        <div class="progress" style="margin-bottom: 0;">\n\n                                                            <div class="progress-bar" role="progressbar" [ngStyle]="{ \'width\': item.progress + \'%\' }"></div>\n\n                                                        </div>\n\n                                                    </td>\n\n                                                    <td class="text-center">\n\n                                                        <span *ngIf="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>\n\n                                                        <span *ngIf="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>\n\n                                                        <span *ngIf="item.isError"><i class="glyphicon glyphicon-remove"></i></span>\n\n                                                    </td>\n\n                                                    <td nowrap>\n\n                                                        <button type="button" class="btn btn-success btn-xs"\n\n                                                                (click)="item.upload()" [disabled]="item.isReady || item.isUploading || item.isSuccess">\n\n                                                            <span class="glyphicon glyphicon-upload"></span> Upload\n\n                                                        </button>\n\n                                                        <button type="button" class="btn btn-warning btn-xs"\n\n                                                                (click)="item.cancel()" [disabled]="!item.isUploading">\n\n                                                            <span class="glyphicon glyphicon-ban-circle"></span> Cancel\n\n                                                        </button>\n\n                                                        <button type="button" class="btn btn-danger btn-xs"\n\n                                                                (click)="item.remove()">\n\n                                                            <span class="glyphicon glyphicon-trash"></span> Remove\n\n                                                        </button>\n\n                                                    </td>\n\n                                                </tr>\n\n                                            </tbody>\n\n                                        </table>\n\n\n\n                                        <div>\n\n                                            <div>\n\n                                                Queue progress:\n\n                                                <div class="progress" style="">\n\n                                                    <div class="progress-bar" role="progressbar" [ngStyle]="{ \'width\': uploadManager.uploader[property.name.name]?.progress + \'%\' }"></div>\n\n                                                </div>\n\n                                            </div>\n\n                                            <button type="button" class="btn btn-success btn-s"\n\n                                                    (click)="uploadManager.uploader[property.name.name]?.uploadAll()" [disabled]="!uploadManager.uploader[property.name.name]?.getNotUploadedItems()?.length">\n\n                                                <span class="glyphicon glyphicon-upload"></span> Upload all\n\n                                            </button>\n\n                                            <button type="button" class="btn btn-warning btn-s"\n\n                                                    (click)="uploadManager.uploader[property.name.name]?.cancelAll()" [disabled]="!uploadManager.uploader[property.name.name]?.isUploading">\n\n                                                <span class="glyphicon glyphicon-ban-circle"></span> Cancel all\n\n                                            </button>\n\n                                            <button type="button" class="btn btn-danger btn-s"\n\n                                                    (click)="uploadManager.uploader[property.name.name]?.clearQueue()" [disabled]="!uploadManager.uploader[property.name.name]?.queue?.length">\n\n                                                <span class="glyphicon glyphicon-trash"></span> Remove all\n\n                                            </button>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <div *ngSwitchCase="4" [class.has-error]="hasPropertyError(property)">\n\n                        <label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n                        <div class="col-sm-10">\n\n                            <div>\n\n                                <input type="hidden" [formControl]="form.controls[property.name.name]" [(ngModel)]="item[property.name.name]" />\n\n                                <div class="row">\n\n                                    <div class="col-md-3">\n\n                                        <a [href]="uploadManager.filenames[property.name.name]" data-lightbox="uploadManager.imageIds[property.name.name]" data-title="uploadManager.filenames[property.name.name]">\n\n                                            <img [src]="uploadManager.thumbnails[property.name.name]" style="border-width: 0px;" />\n\n                                        </a>\n\n                                        <input type="file" ng2FileSelect uploader="uploadManager.uploader[property.name.name]" />\n\n                                    </div>\n\n                                    <div class="col-md-9" style="margin-bottom: 40px">\n\n                                        <table class="table">\n\n                                            <thead>\n\n                                                <tr>\n\n                                                    <th>Progress</th>\n\n                                                    <th>Status</th>\n\n                                                    <th>Actions</th>\n\n                                                </tr>\n\n                                            </thead>\n\n                                            <tbody>\n\n                                                <tr *ngFor="let item of uploadManager.uploader[property.name.name]?.queue">\n\n                                                    <td *ngIf="getUploader(property)?.isHTML5">\n\n                                                        <div class="progress" style="margin-bottom: 0;">\n\n                                                            <div class="progress-bar" role="progressbar" [ngStyle]="{ \'width\': item.progress + \'%\' }"></div>\n\n                                                        </div>\n\n                                                    </td>\n\n                                                    <td class="text-center">\n\n                                                        <span *ngIf="item.isSuccess"><i class="glyphicon glyphicon-ok"></i></span>\n\n                                                        <span *ngIf="item.isCancel"><i class="glyphicon glyphicon-ban-circle"></i></span>\n\n                                                        <span *ngIf="item.isError"><i class="glyphicon glyphicon-remove"></i></span>\n\n                                                    </td>\n\n                                                    <td nowrap>\n\n                                                        <button type="button" class="btn btn-success btn-xs"\n\n                                                                (click)="item.upload()" [disabled]="item.isReady || item.isUploading || item.isSuccess">\n\n                                                            <span class="glyphicon glyphicon-upload"></span> Upload\n\n                                                        </button>\n\n                                                        <button type="button" class="btn btn-warning btn-xs"\n\n                                                                (click)="item.cancel()" [disabled]="!item.isUploading">\n\n                                                            <span class="glyphicon glyphicon-ban-circle"></span> Cancel\n\n                                                        </button>\n\n                                                        <button type="button" class="btn btn-danger btn-xs"\n\n                                                                (click)="item.remove()">\n\n                                                            <span class="glyphicon glyphicon-trash"></span> Remove\n\n                                                        </button>\n\n                                                    </td>\n\n                                                </tr>\n\n                                            </tbody>\n\n                                        </table>\n\n\n\n                                        <div>\n\n                                            <div>\n\n                                                Queue progress:\n\n                                                <div class="progress" style="">\n\n                                                    <div class="progress-bar" role="progressbar" [ngStyle]="{ \'width\': uploadManager.uploader[property.name.name]?.progress + \'%\' }"></div>\n\n                                                </div>\n\n                                            </div>\n\n                                            <button type="button" class="btn btn-success btn-s"\n\n                                                    (click)="uploadManager.uploader[property.name.name]?.uploadAll()" [disabled]="!uploadManager.uploader[property.name.name]?.getNotUploadedItems()?.length">\n\n                                                <span class="glyphicon glyphicon-upload"></span> Upload all\n\n                                            </button>\n\n                                            <button type="button" class="btn btn-warning btn-s"\n\n                                                    (click)="uploadManager.uploader[property.name.name]?.cancelAll()" [disabled]="!uploadManager.uploader[property.name.name]?.isUploading">\n\n                                                <span class="glyphicon glyphicon-ban-circle"></span> Cancel all\n\n                                            </button>\n\n                                            <button type="button" class="btn btn-danger btn-s"\n\n                                                    (click)="uploadManager.uploader[property.name.name]?.clearQueue()" [disabled]="!uploadManager.uploader[property.name.name]?.queue?.length">\n\n                                                <span class="glyphicon glyphicon-trash"></span> Remove all\n\n                                            </button>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n\n                            </div>\n\n                        </div>\n\n                    </div>\n\n\n\n                    <div *ngSwitchCase="5" [class.has-error]="hasPropertyError(property)">\n\n                        <label [attr.for]="property.name.name" *ngIf="isManyToOneProperty(property)" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n                        <div class="col-sm-10" *ngIf="isManyToOneProperty(property)">\n\n\n\n                            <!--<select name="{{name}}" id="select_{{property.name.name}}" class="select_{{property.name.name}} col-md-10 form-control" (onChange)="selectionChanged(property)" [formControl]="form.controls[property.name.name]" [(ngModel)]="item[property.name.name]">\n\n                                <option value="{{item.id}}" *ngFor="let item of parents[property.name.name]">{{item.text}}</option>\n\n                            </select>-->\n\n\n\n                            <select name="{{name}}" id="select_{{property.name.name}}" class="select_{{property.name.name}} col-md-10 form-control" (click)="showSelectParentDialog(property, item)"></select>\n\n\n\n                            <!-- Modal -->\n\n                            <div id="parentModel_{{property.name.name}}" class="modal fade" role="dialog">\n\n                                <div class="modal-dialog">\n\n\n\n                                    <!-- Modal content-->\n\n                                    <div class="modal-content">\n\n                                        <div class="modal-header">\n\n                                            <button type="button" class="close" data-dismiss="modal">&times;</button>\n\n                                            <h4 class="modal-title">Modal Header</h4>\n\n                                        </div>\n\n                                        <div class="modal-body">\n\n                                            <p>Some text in the modal.</p>\n\n                                            <!--<rd-table id="table_{{entity.name.name}}_{{property.name.name}}" \n\n                                                      [table]="parentSelectionTable[property.name.name]"></rd-table>-->\n\n                                        </div>\n\n                                        <div class="modal-footer">\n\n                                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\n\n                                        </div>\n\n                                    </div>\n\n\n\n                                </div>\n\n                            </div>\n\n\n\n                            <div *ngIf="isTouched(property)">\n\n                                <div *ngIf="hasError(property,\'required\')" class="alert alert-danger">\n\n                                    <strong>{{property.labelText}} is required</strong>\n\n                                </div>\n\n                                <div *ngIf="hasError(property,\'pattern\')" class="alert alert-danger">\n\n                                    <strong>{{property.labelText}} does not have correct format</strong>\n\n                                </div>\n\n                                <div *ngIf="hasError(property,\'maxValue\')" class="alert alert-danger">\n\n                                    <strong>Maximum value of {{property.labelText}} is {{property.maxValue}}</strong>\n\n                                </div>\n\n                                <div *ngIf="hasError(property,\'minValue\')" class="alert alert-danger">\n\n                                    <strong>Minimum value of {{property.labelText}} is {{property.minValue}}</strong>\n\n                                </div>\n\n                            </div>\n\n\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n            <div class="form-group row">\n\n                <div class="offset-sm-2 col-sm-10">\n\n                    <button type="button" class="btn btn-default" [disabled]="!entityForm.form.valid" (click)="submitEntity()">Submit</button>\n\n                    <a routerLink="[detailsUrl]" class="btn btn-default" routerLinkActive="active">Cancel</a>\n\n                </div>\n\n            </div>\n\n        </form>\n\n    </div>\n\n</div>'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\edit-entity.component.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__Services_modal_dialog_service__["a" /* ModalDialogService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__Services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_8__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__Services_modal_dialog_service__["a" /* ModalDialogService */],
        __WEBPACK_IMPORTED_MODULE_9__Services_RelationService__["a" /* RelationService */],
        __WEBPACK_IMPORTED_MODULE_10__ViewModels_TableRequestService__["a" /* TableRequestService */],
        __WEBPACK_IMPORTED_MODULE_12__FormControlService__["a" /* FormControlService */]])
], EditEntityComponent);

//# sourceMappingURL=edit-entity.component.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPropertyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_Entity__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditPropertyComponent = (function () {
    function EditPropertyComponent(entityMap) {
        this.entityMap = entityMap;
        this.item = {};
    }
    EditPropertyComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EditPropertyComponent.prototype, "propertyValue", {
        get: function () {
            return this.item[this.property.name.name];
        },
        set: function (v) {
            this.item[this.property.name.name] = v;
        },
        enumerable: true,
        configurable: true
    });
    return EditPropertyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditPropertyComponent.prototype, "property", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__EntityMaps_Entity__["a" /* Entity */])
], EditPropertyComponent.prototype, "entity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditPropertyComponent.prototype, "item", void 0);
EditPropertyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-edit-property',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\edit-property.component.html"*/'﻿<div [ngSwitch]="property.type">\n\n	<div *ngSwitchCase="0">\n\n		\n\n	</div>\n\n	<div *ngSwitchCase="1"  class="form-group row" >\n\n		<label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n		<div class="col-sm-10">\n\n			<input class="form-control"\n\n			       name="{{property.name.name}}"\n\n			       placeholder="{{property.labelText}}"\n\n			       [(ngModel)]="item[property.name.name]"\n\n			       [required]="property.required"\n\n\n\n				   />\n\n			propertyValue:{{propertyValue}}\n\n		</div>\n\n\n\n	</div>\n\n	<div *ngSwitchCase="2">\n\n		<label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n		<div class="col-sm-10">\n\n			<img [src]="item[property.name.name]"\n\n				  class="form-control"/>\n\n	\n\n			propertyValue:{{propertyValue}}\n\n		</div>\n\n	</div>\n\n	<div *ngSwitchCase="3">Image</div>\n\n	<div *ngSwitchCase="4">File</div>\n\n	<div *ngSwitchCase="5">Relation</div>\n\n</div>\n\n\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\edit-property.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__["a" /* EntityMap */]])
], EditPropertyComponent);

//# sourceMappingURL=edit-property.component.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageDisplayComponent = (function () {
    function ImageDisplayComponent() {
    }
    ImageDisplayComponent.prototype.ngOnInit = function () { };
    return ImageDisplayComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ImageDisplayComponent.prototype, "filename", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ImageDisplayComponent.prototype, "thumbnail", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ImageDisplayComponent.prototype, "imageid", void 0);
ImageDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-image-display',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\image-display.component.html"*/'﻿<a [href]="filename" [attr.data-lightbox]="imageid" data-title="{{filename}}">\n\n	<img [src]="thumbnail" style="border-width: 0px;" />\n\n</a>'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\image-display.component.html"*/
    })
], ImageDisplayComponent);

//# sourceMappingURL=image-display.component.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SortDirection__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableVm__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TableHeaderComponent = (function () {
    function TableHeaderComponent() {
        this.sorted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TableHeaderComponent.prototype.ngOnInit = function () { };
    TableHeaderComponent.prototype.sort = function (property) {
        this.sorted.emit(property);
    };
    ;
    return TableHeaderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__ViewModels_TableVm__["b" /* TableVm */])
], TableHeaderComponent.prototype, "table", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TableHeaderComponent.prototype, "sortColumn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TableHeaderComponent.prototype, "sortDirection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TableHeaderComponent.prototype, "sorted", void 0);
TableHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'thead.table-header',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\table-header.component.html"*/'﻿<th *ngFor="let column of table?.columns">\n\n    <table-header-cell *ngIf="column.isVisible" [column]="column" (sorted)="sort(column)"></table-header-cell>\n\n</th>\n\n<th *ngIf="table.options.tableDataMode === 1"><span *ngIf="table.options.tableDataMode === 1">Linked</span></th>\n\n\n\n<th></th>'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\table-header.component.html"*/
    }),
    __metadata("design:paramtypes", [])
], TableHeaderComponent);

//# sourceMappingURL=table-header.component.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEntityComponent; });
/* unused harmony export ResponsiveTab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityMaps_Entity__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_data_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_RelationService__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ViewModels_TableRequestService__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__EntityMaps_PropertyType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ViewModels_TableVm__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Validators_number_validators__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ViewEntityComponent = (function () {
    function ViewEntityComponent(dataService, entityMap, cdr, fb, relationService, tableRequestService) {
        var _this = this;
        this.dataService = dataService;
        this.entityMap = entityMap;
        this.cdr = cdr;
        this.fb = fb;
        this.relationService = relationService;
        this.tableRequestService = tableRequestService;
        this.item = {};
        this.eventName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.routeParameterChanged = function (params) {
            var entityNameParam = 'entityName';
            var idParam = 'id';
            jQuery('#tabHeader_details').click();
            if (params[entityNameParam] !== undefined) {
                var entityName = params[entityNameParam];
                _this.id = params[idParam];
                _this.entity = _this.entityMap.getEntity(entityName);
                _this.setChildProperties(_this.entity);
                _this.createFormControls();
                _this.dataService.getEntity(_this.entity, _this.id)
                    .map(function (res) {
                    return res.json();
                })
                    .subscribe(_this.acceptData, function (err) { return console.log(err); }, _this.downloadComplete);
            }
        };
        this.setChildProperties = function (entity) {
            var childTabs = [];
            for (var _i = 0, _a = entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_7__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                    var relationProperty = property;
                    var isChild = _this.relationService.isOneToManyOrManyToManyProperty(relationProperty);
                    if (isChild) {
                        var tab = new ResponsiveTab();
                        tab.childProperty = relationProperty;
                        tab.anchor = "tab_" + relationProperty.name.name;
                        var relationEntity = _this.entityMap.getEntity(relationProperty.entityName.name);
                        tab.headerText = relationProperty.name.name;
                        tab.relationEntity = relationEntity;
                        childTabs.push(tab);
                    }
                }
            }
            _this.childTabs = childTabs;
        };
        this.showChildrenTable = function (tab) {
            if (!tab.table) {
                var table = new __WEBPACK_IMPORTED_MODULE_8__ViewModels_TableVm__["b" /* TableVm */](_this.dataService, tab.relationEntity, _this.relationService, _this.tableRequestService);
                table.filterData[tab.childProperty.thatEndPropertyName] = _this.id;
                tab.table = table;
            }
        };
        this.createFormControls = function () {
            var controls = {};
            for (var _i = 0, _a = _this.entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                var control = [''];
                var validators = [];
                if (property.required) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required);
                }
                if (property.pattern) {
                    validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(property.pattern));
                }
                switch (property.type) {
                    case __WEBPACK_IMPORTED_MODULE_7__EntityMaps_PropertyType__["a" /* PropertyType */].String:
                        if (property.maxValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(property.maxValue));
                        }
                        if (property.minValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(property.minValue));
                        }
                        break;
                    case __WEBPACK_IMPORTED_MODULE_7__EntityMaps_PropertyType__["a" /* PropertyType */].Number:
                        if (property.maxValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_9__Validators_number_validators__["a" /* NumberValidator */].max(property.maxValue));
                        }
                        if (property.minValue) {
                            validators.push(__WEBPACK_IMPORTED_MODULE_9__Validators_number_validators__["a" /* NumberValidator */].max(property.minValue));
                        }
                        break;
                    default:
                }
                control.push(validators);
                controls[property.name.name] = control;
            }
            _this.form = _this.fb.group(controls);
        };
        this.acceptData = function (data) {
            _this.item = data;
            _this.cdr.detectChanges();
        };
        this.downloadComplete = function () {
        };
        this.acceptSubmitResult = function (result) {
        };
        this.submitEntity = function () {
            _this.dataService.save(_this.entity, _this.item)
                .map(function (res) {
                return res.json();
            })
                .subscribe(_this.acceptSubmitResult, function (err) { return console.log(err); }, _this.downloadComplete);
        };
        this.isFormValid = function () {
        };
    }
    ViewEntityComponent.prototype.ngOnInit = function () {
        //TODO
        //this.sub = this.route.params.subscribe(this.routeParameterChanged);
        this.cdr.detectChanges();
        jQuery('#viewDetailsTabs').tabCollapse();
    };
    ViewEntityComponent.prototype.is1ToNProperty = function (property) {
        return property.type === __WEBPACK_IMPORTED_MODULE_7__EntityMaps_PropertyType__["a" /* PropertyType */].Relation &&
            this.relationService.is1toNRelation(property);
    };
    ViewEntityComponent.prototype.isManyToOneProperty = function (property) {
        return property.type === __WEBPACK_IMPORTED_MODULE_7__EntityMaps_PropertyType__["a" /* PropertyType */].Relation &&
            this.relationService.isManyToOneProperty(property);
    };
    Object.defineProperty(ViewEntityComponent.prototype, "editUrl", {
        get: function () {
            return '/' + this.entity.name.name + "/edit/" + this.item[this.entity.idColumn.name.name];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewEntityComponent.prototype, "listUrl", {
        get: function () {
            return '/' + this.entity.name.name + "/list/";
        },
        enumerable: true,
        configurable: true
    });
    return ViewEntityComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__EntityMaps_Entity__["a" /* Entity */])
], ViewEntityComponent.prototype, "entity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ViewEntityComponent.prototype, "item", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ViewEntityComponent.prototype, "eventName", void 0);
ViewEntityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rd-view-entity',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\view-entity.component.html"*/'﻿<h2>{{entity.name.name}} Details</h2>\n\n<div class="container">\n\n	<div class="container" style="margin-top: 50px;">\n\n		<ul id="viewDetailsTabs" class="nav nav-tabs" style="margin-bottom: 15px;">\n\n			<li class="active"><a href="#details" data-toggle="tab" id="tabHeader_details">Details</a></li>\n\n			<li *ngFor="let tab of childTabs">\n\n				<a href="#{{tab.anchor}}" (click)="showChildrenTable(tab)" data-toggle="tab">{{tab.headerText}}</a>\n\n			</li>\n\n		</ul>\n\n		<div id="myTabContent" class="tab-content">\n\n			<div class="tab-pane fade active in" id="details">\n\n				<div class="container">\n\n					<form (ngSubmit)="onSubmit()" #entityForm="ngForm" [formGroup]="form">\n\n						<div class="form-group row" *ngFor="let property of entity.properties">\n\n							<div [ngSwitch]="property.type">\n\n								<div *ngSwitchCase="0" class="form-group row">\n\n									<label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n									<div class="col-sm-10">\n\n										<div>\n\n											<rd-view-property [entity]="entity" [property]="property" [(item)]="item"></rd-view-property>\n\n										</div>\n\n									</div>\n\n								</div>\n\n\n\n								<div *ngSwitchCase="1">\n\n									<label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n									<div class="col-sm-10">\n\n										<div>\n\n											<rd-view-property [entity]="entity" [property]="property" [(item)]="item"></rd-view-property>\n\n										</div>\n\n									</div>\n\n								</div>\n\n\n\n								<div *ngSwitchCase="2">\n\n									<label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n									<div class="col-sm-10">\n\n										<div>\n\n											<rd-view-property [entity]="entity" [property]="property" [(item)]="item"></rd-view-property>\n\n										</div>\n\n									</div>\n\n								</div>\n\n								<div *ngSwitchCase="3">\n\n									<label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n									<div class="col-sm-10">\n\n										<rd-view-property [entity]="entity" [property]="property" [(item)]="item"></rd-view-property>\n\n									</div>\n\n								</div>\n\n								<div *ngSwitchCase="4">\n\n									<label [attr.for]="property.name.name" class="col-sm-2 col-form-label">{{property.labelText}}</label>\n\n									<rd-view-property [entity]="entity" [property]="property" [(item)]="item"></rd-view-property>\n\n								</div>\n\n								<div *ngSwitchCase="5">\n\n									<label [attr.for]="property.name.name" class="col-sm-2 col-form-label" *ngIf="isManyToOneProperty(property)" >{{property.labelText}}</label>\n\n									<div class="col-sm-10" *ngIf="isManyToOneProperty(property)" >\n\n										<rd-view-property [entity]="entity" [property]="property" [(item)]="item"></rd-view-property>\n\n									</div>\n\n								</div>\n\n							</div>\n\n\n\n						</div>\n\n						<div class="form-group row">\n\n							<div class="offset-sm-2 col-sm-10">\n\n								<a routerLink="editUrl" class="btn btn-primary" routerLinkActive="active">Edit</a>\n\n								<a routerLink="listUrl" class="btn btn-default" routerLinkActive="active">Back to List</a>\n\n							</div>\n\n						</div>\n\n					</form>\n\n				</div>\n\n			</div>\n\n			<div id="{{tab.anchor}}" class="tab-pane fade in " [class.active]="tab.active" *ngFor="let tab of childTabs">\n\n				<div class="container" *ngIf="tab.table">\n\n					<rd-table [table]="tab.table" [parentProperty]="tab.childProperty" [parentId]="item[entity.idColumn.name.name]"></rd-table>\n\n				</div>\n\n			</div>\n\n		</div>\n\n	</div>\n\n</div>'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\ResponsiveTable\view-entity.component.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__Services_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_4__EntityMaps_EntityMap__["a" /* EntityMap */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_5__Services_RelationService__["a" /* RelationService */],
        __WEBPACK_IMPORTED_MODULE_6__ViewModels_TableRequestService__["a" /* TableRequestService */]])
], ViewEntityComponent);

var ResponsiveTab = (function () {
    function ResponsiveTab() {
    }
    return ResponsiveTab;
}());

//# sourceMappingURL=view-entity.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_data_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EntityDetailsPage = (function () {
    function EntityDetailsPage(dataService, navCtrl, navParams, entityMap, loadingCtrl) {
        var _this = this;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entityMap = entityMap;
        this.loadingCtrl = loadingCtrl;
        this.itemTapped = function (event, item) {
            // That's right, we're pushing to ourselves!
        };
        this.getItem = function () {
            if (_this.entityName) {
                _this.entity = _this.entityMap.getEntity(_this.entityName);
                if (_this.entity) {
                    _this.getItemDetails();
                }
                else {
                    _this.entityMap.addCompletedSubscribers(_this.downloadEntityMapCompleted);
                }
            }
            return;
        };
        this.getItemDetails = function () {
            var observable = _this.dataService.getEntity(_this.entity, _this.itemId);
            observable.map(function (res) {
                return res.json();
            })
                .subscribe(_this.acceptData, _this.downloadItemDetailsFailed, _this.downloadComplete);
            return;
        };
        this.downloadEntityMapCompleted = function () {
            _this.entity = _this.entityMap.getEntity(_this.entityName);
            _this.getItemDetails();
        };
        this.downloadItemDetailsFailed = function (err) {
            console.log("EntityDetailsPage.downloadItemDetailsFailed");
            console.log(err);
        };
        this.acceptData = function (data) {
            console.log("EntityDetailsPage.acceptData:" + data);
            _this.item = data;
        };
        this.downloadComplete = function () {
        };
        // If we navigated to this page, we will have an item available as a nav param
        this.item = navParams.get('item');
        this.entity = navParams.get('entity');
        if (!this.item) {
            this.entityName = navParams.get('entityName');
            this.itemId = navParams.get('itemId');
            this.getItem();
        }
    }
    return EntityDetailsPage;
}());
EntityDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'entity-details',template:/*ion-inline-start:"C:\Src\MvcAngular\IonicApp\src\pages\entityDetails\entity-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Details</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n  <ion-list *ngIf="entity && item">\n\n\n\n    <ion-item *ngFor="let property of entity.properties">\n\n      <ion-label>{{property.name.name}}</ion-label>\n\n      <ion-label type="text">{{item[property.name.name]}}</ion-label>\n\n    </ion-item>\n\n\n\n\n\n\n\n  </ion-list>\n\n\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Src\MvcAngular\IonicApp\src\pages\entityDetails\entity-details.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__Services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__["a" /* EntityMap */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__EntityMaps_EntityMap__["a" /* EntityMap */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
], EntityDetailsPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=entity-details.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntityPropertyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__RelationService__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EntityPropertyService = (function () {
    function EntityPropertyService(relationService) {
        var _this = this;
        this.relationService = relationService;
        this.get1ToNProperties = function (entity) {
            var relationProperties = [];
            for (var _i = 0, _a = entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                    var relationProperty = property;
                    var isParent = _this.relationService.isManyToOneProperty(relationProperty);
                    if (isParent) {
                        relationProperties.push(relationProperty);
                    }
                }
            }
            return relationProperties;
        };
        this.getNtoNProperties = function (entity) {
            var relationProperties = [];
            for (var _i = 0, _a = entity.properties; _i < _a.length; _i++) {
                var property = _a[_i];
                if (property.type === __WEBPACK_IMPORTED_MODULE_1__EntityMaps_PropertyType__["a" /* PropertyType */].Relation) {
                    var relationProperty = property;
                    var isNtoN = _this.relationService.isNtoNRelation(relationProperty);
                    if (isNtoN) {
                        relationProperties.push(relationProperty);
                    }
                }
            }
            return relationProperties;
        };
    }
    return EntityPropertyService;
}());
EntityPropertyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__RelationService__["a" /* RelationService */]])
], EntityPropertyService);

//# sourceMappingURL=EntityPropertyService.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResponsiveTable_table_request__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TableRequestService = (function () {
    function TableRequestService() {
        var _this = this;
        this.setFilterDataToRequest = function (filterData, request) {
            if (!request.filterData) {
                request.filterData = {};
            }
            for (var filterName in filterData) {
                if (Object.prototype.hasOwnProperty.call(filterData, filterName)) {
                    var filterValue = filterData[filterName];
                    request.filterData[filterName] = filterValue;
                }
            }
            if (request.tableDataMode === __WEBPACK_IMPORTED_MODULE_1__ResponsiveTable_table_request__["a" /* TableDataMode */].Link) {
                var parentId = _this.getParentId(request);
                if (parentId) {
                    request.parentId = parentId;
                }
                delete request.filterData[request.parentProperty];
            }
        };
        this.getParentId = function (request) {
            return request.filterData[request.parentProperty];
        };
    }
    return TableRequestService;
}());
TableRequestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], TableRequestService);

//# sourceMappingURL=TableRequestService.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
var Entity = (function () {
    function Entity(name, pluralName, idColumn) {
        this.name = name;
        this.pluralName = pluralName;
        this.idColumn = idColumn;
        this.canDelete = true;
        this.canEdit = true;
        this.canAdd = true;
    }
    return Entity;
}());

//# sourceMappingURL=Entity.js.map

/***/ })

},[295]);
//# sourceMappingURL=main.js.map