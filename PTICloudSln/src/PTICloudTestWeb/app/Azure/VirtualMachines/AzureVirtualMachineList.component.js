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
var AzureVirtualMachineListComponent = (function () {
    function AzureVirtualMachineListComponent(_azureVMsService, router, route) {
        this._azureVMsService = _azureVMsService;
        this.router = router;
        this.route = route;
    }
    AzureVirtualMachineListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("AzureVirtualMachineListComponent init");
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(function (params) { return _this.SelectedSubscriptionId = params["subscriptionId"]; });
        console.log("AzureVirtualMachineListComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
        this._azureVMsService.getVMs(this.SelectedSubscriptionId).subscribe(function (vms) { return _this.VMList = vms; }, function (error) { return console.log("Error getting Virtual MAchines List: " + error); });
    };
    AzureVirtualMachineListComponent = __decorate([
        core_1.Component({
            selector: 'azurevms-list',
            templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachineList.component.html',
            providers: [AzureVirtualMachineService_1.AzureVirtualMachineService, http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [AzureVirtualMachineService_1.AzureVirtualMachineService, router_1.Router, router_1.ActivatedRoute])
    ], AzureVirtualMachineListComponent);
    return AzureVirtualMachineListComponent;
}());
exports.AzureVirtualMachineListComponent = AzureVirtualMachineListComponent;
//# sourceMappingURL=AzureVirtualMachineList.component.js.map