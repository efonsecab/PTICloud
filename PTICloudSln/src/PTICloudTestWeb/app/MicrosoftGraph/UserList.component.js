"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MicrosoftGraphService_1 = require('./MicrosoftGraphService');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var UserListComponent = (function () {
    function UserListComponent(_msGraphService, router, route) {
        this._msGraphService = _msGraphService;
        this.router = router;
        this.route = route;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("UserListComponent init");
        this._msGraphService.getUsers().subscribe(function (users) { return _this.UserList = users; }, function (error) { return console.log("Error getting MS Graph Users " + error); });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'msgraph-userlist',
            templateUrl: '.app/microsoftgraph/userlist.component.html',
            providers: [MicrosoftGraphService_1.MicrosoftGraphService, http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [MicrosoftGraphService_1.MicrosoftGraphService, router_1.Router, router_1.ActivatedRoute])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=UserList.component.js.map