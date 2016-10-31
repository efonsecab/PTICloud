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
/// <reference path="azureresourcegroupcreate.component.ts" />
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var rxjs_1 = require('rxjs');
var AzureResourceGroupService = (function () {
    function AzureResourceGroupService(_http) {
        this._http = _http;
        this._createResourceGroupUrl = "api/Azure/ResourceGroups/Create";
    }
    AzureResourceGroupService.prototype.createResourceGroup = function (pSubscriptionId, pResourceGroupName) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify({
            subscriptionId: pSubscriptionId,
            resourceGroupName: pResourceGroupName
        });
        return this._http.post(this._createResourceGroupUrl, body, options)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("Created: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AzureResourceGroupService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs_1.Observable.throw(error.json().error || 'Server error');
    };
    AzureResourceGroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AzureResourceGroupService);
    return AzureResourceGroupService;
}());
exports.AzureResourceGroupService = AzureResourceGroupService;
//# sourceMappingURL=AzureResourceGroupsService.js.map