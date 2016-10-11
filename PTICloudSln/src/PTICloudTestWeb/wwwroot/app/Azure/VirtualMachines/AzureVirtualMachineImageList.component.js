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
var AzureVirtualMachineImageListComponent = (function () {
    //constructor(private _azureVMsService: AzureVirtualMachineService, subscriptionId: string, token: string) {
    //    this.Publishers = _azureVMsService.getPublishers(subscriptionId, token);
    //}
    function AzureVirtualMachineImageListComponent(_azureVMsService) {
        this._azureVMsService = _azureVMsService;
    }
    AzureVirtualMachineImageListComponent = __decorate([
        core_1.Component({
            selector: 'azurevm-list',
            templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachineImageList.component.html',
            providers: [AzureVirtualMachineService_1.AzureVirtualMachineService, http_1.HttpModule]
        }), 
        __metadata('design:paramtypes', [AzureVirtualMachineService_1.AzureVirtualMachineService])
    ], AzureVirtualMachineImageListComponent);
    return AzureVirtualMachineImageListComponent;
}());
exports.AzureVirtualMachineImageListComponent = AzureVirtualMachineImageListComponent;
//# sourceMappingURL=AzureVirtualMachineImageList.component.js.map