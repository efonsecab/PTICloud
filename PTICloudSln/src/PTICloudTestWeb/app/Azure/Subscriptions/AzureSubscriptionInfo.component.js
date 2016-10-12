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
var core_1 = require('@angular/core');
var AzureSubscriptionsService_1 = require('./AzureSubscriptionsService');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var AzureSubscriptionInfoComponent = (function () {
    function AzureSubscriptionInfoComponent(_azureSubscriptionsService, router, route) {
        this._azureSubscriptionsService = _azureSubscriptionsService;
        this.router = router;
        this.route = route;
    }
    AzureSubscriptionInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(function (params) { return _this.SelectedSubscriptionId = params["subscriptionId"]; });
        console.log("AzureSubscriptionInfoComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
    };
    AzureSubscriptionInfoComponent = __decorate([
        core_1.Component({
            selector: 'azureSubscriptionInfo',
            templateUrl: './app/Azure/Subscriptions/AzureSubscriptionInfo.component.html',
            providers: [AzureSubscriptionsService_1.AzureSubscriptionsService, http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [AzureSubscriptionsService_1.AzureSubscriptionsService, router_1.Router, router_1.ActivatedRoute])
    ], AzureSubscriptionInfoComponent);
    return AzureSubscriptionInfoComponent;
}());
exports.AzureSubscriptionInfoComponent = AzureSubscriptionInfoComponent;
//# sourceMappingURL=AzureSubscriptionInfo.component.js.map