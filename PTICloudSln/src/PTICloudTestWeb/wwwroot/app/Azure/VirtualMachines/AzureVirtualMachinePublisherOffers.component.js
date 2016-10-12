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
var AzureVirtualMachineService_1 = require('./AzureVirtualMachineService');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var AzureVirtualMachinePublisherOffersComponent = (function () {
    function AzureVirtualMachinePublisherOffersComponent(_azureVMsService, router, route) {
        this._azureVMsService = _azureVMsService;
        this.router = router;
        this.route = route;
    }
    AzureVirtualMachinePublisherOffersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("AzureVirtualMachinePublisherOffersComponent init");
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(function (params) { return _this.SelectedSubscriptionId = params["subscriptionId"]; });
        this.route.queryParams.subscribe(function (params) { return _this.SelectedPublisherName = params["publisherName"]; });
        console.log("AzureVirtualMachinePublisherOffersComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
        console.log("AzureVirtualMachinePublisherOffersComponent.SelectedPublisherName=" + this.SelectedPublisherName);
        this._azureVMsService.getOffers(this.SelectedPublisherName, this.SelectedSubscriptionId).subscribe(function (offers) { return _this.Offers = offers; }, function (error) { return console.log("Error getting Offers: " + error); });
    };
    AzureVirtualMachinePublisherOffersComponent = __decorate([
        core_1.Component({
            selector: 'azurevm-publisher-offers',
            templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachinePublisherOffers.component.html',
            providers: [AzureVirtualMachineService_1.AzureVirtualMachineService, http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [AzureVirtualMachineService_1.AzureVirtualMachineService, router_1.Router, router_1.ActivatedRoute])
    ], AzureVirtualMachinePublisherOffersComponent);
    return AzureVirtualMachinePublisherOffersComponent;
}());
exports.AzureVirtualMachinePublisherOffersComponent = AzureVirtualMachinePublisherOffersComponent;
//# sourceMappingURL=AzureVirtualMachinePublisherOffers.component.js.map