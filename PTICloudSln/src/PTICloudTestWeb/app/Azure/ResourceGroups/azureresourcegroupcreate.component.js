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
var AzureResourceGroupsService_1 = require('./AzureResourceGroupsService');
var router_1 = require('@angular/router');
var AzureResourceGroupCreateComponent = (function () {
    function AzureResourceGroupCreateComponent(_azureRGGroupService, router, route) {
        this._azureRGGroupService = _azureRGGroupService;
        this.router = router;
        this.route = route;
    }
    AzureResourceGroupCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Initializing AzureResourceGroupCreateComponent');
        this.route.queryParams.subscribe(function (params) { return _this.SelectedSubscriptionId = params["subscriptionId"]; });
        this.ResourceGroup = {};
    };
    AzureResourceGroupCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("AzureResourceGroupCreateComponent submitted. Name: " + this.ResourceGroup.name);
        this._azureRGGroupService.createResourceGroup(this.SelectedSubscriptionId, this.ResourceGroup.name)
            .subscribe(function (resourceGroup) { return _this.ResourceGroup = resourceGroup; }, function (error) { return console.log("Error creating Resource Group: " + error); });
    };
    AzureResourceGroupCreateComponent = __decorate([
        core_1.Component({
            selector: 'azurerg-create',
            templateUrl: './app/Azure/ResourceGroups/azureresourcegroupcreate.component.html',
            providers: [AzureResourceGroupsService_1.AzureResourceGroupService]
        }), 
        __metadata('design:paramtypes', [AzureResourceGroupsService_1.AzureResourceGroupService, router_1.Router, router_1.ActivatedRoute])
    ], AzureResourceGroupCreateComponent);
    return AzureResourceGroupCreateComponent;
}());
exports.AzureResourceGroupCreateComponent = AzureResourceGroupCreateComponent;
//# sourceMappingURL=azureresourcegroupcreate.component.js.map