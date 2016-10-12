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
var AzureSubscriptionsService_1 = require('./AzureSubscriptionsService');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var AzureSubscriptionListComponent = (function () {
    function AzureSubscriptionListComponent(_azureSubscriptionsService) {
        this._azureSubscriptionsService = _azureSubscriptionsService;
    }
    AzureSubscriptionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("reached AzureSubscriptionListComponent  ngOnInit");
        this._azureSubscriptionsService.getSubscriptions().subscribe(function (subscriptions) { return _this.SubscriptionsList = subscriptions; }, function (error) { return console.log("Error getting Subscriptions: " + error); });
    };
    AzureSubscriptionListComponent.prototype.selectSubscription = function () {
    };
    AzureSubscriptionListComponent = __decorate([
        core_1.Component({
            selector: 'azureSubscriptionsList',
            templateUrl: './app/Azure/Subscriptions/AzureSubscriptionList.component.html',
            providers: [AzureSubscriptionsService_1.AzureSubscriptionsService, http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [AzureSubscriptionsService_1.AzureSubscriptionsService])
    ], AzureSubscriptionListComponent);
    return AzureSubscriptionListComponent;
}());
exports.AzureSubscriptionListComponent = AzureSubscriptionListComponent;
//# sourceMappingURL=AzureSubscriptionList.component.js.map