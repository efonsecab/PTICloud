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
var http_1 = require('@angular/http');
var rxjs_1 = require('rxjs');
var AzureVirtualMachineService = (function () {
    function AzureVirtualMachineService(_http) {
        this._http = _http;
        this._getVMImagesListUrl = "api/azurevmImages/images";
        this._getVMImagePublishersUrl = "api/azurevmImages/publishers";
        this._getPublisherOffersUrl = 'api/azurevmImages/offers';
        this._getPublisherOfferSkusUrl = 'api/azurevmImages/skus';
    }
    AzureVirtualMachineService.prototype.getPublishers = function (subscriptionId) {
        return this._http.get(this._getVMImagePublishersUrl + "?subscriptionId=" + subscriptionId)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AzureVirtualMachineService.prototype.getVMImages = function (subscriptionId, publisherName, offerName, skus) {
        return this._http.get(this._getVMImagesListUrl + "?subscriptionId=" + subscriptionId + "&publisherName=" + publisherName + "&offerName=" + offerName + "&skus=" + skus)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AzureVirtualMachineService.prototype.getSkus = function (offerName, publisherName, subscriptionId) {
        return this._http.get(this._getPublisherOfferSkusUrl + "?publisherName=" + publisherName + "&subscriptionId=" + subscriptionId + "&offerName=" + offerName)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AzureVirtualMachineService.prototype.getOffers = function (publisherName, subscriptionId) {
        return this._http.get(this._getPublisherOffersUrl + "?publisherName=" + publisherName + "&subscriptionId=" + subscriptionId)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    AzureVirtualMachineService.prototype.handleError = function (error) {
        console.error(error);
        return rxjs_1.Observable.throw(error.json().error || 'Server error');
    };
    AzureVirtualMachineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AzureVirtualMachineService);
    return AzureVirtualMachineService;
}());
exports.AzureVirtualMachineService = AzureVirtualMachineService;
//# sourceMappingURL=AzureVirtualMachineService.js.map