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
/// <reference path="microsoftgraph/microsoftgraphservice.ts" />
require('rxjs');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var azurevirtualmachinepublisherlist_component_1 = require('./azure/virtualmachines/azurevirtualmachinepublisherlist.component');
var azuresubscriptionlist_component_1 = require('./azure/subscriptions/azuresubscriptionlist.component');
var azuresubscriptioninfo_component_1 = require('./azure/subscriptions/azuresubscriptioninfo.component');
var azurevirtualmachinepublisheroffers_component_1 = require('./azure/virtualmachines/azurevirtualmachinepublisheroffers.component');
var AzureVirtualMachinePublisherOfferSkus_component_1 = require('./azure/virtualmachines/AzureVirtualMachinePublisherOfferSkus.component');
var azurevirtualmachineimageslist_component_1 = require('./azure/virtualmachines/azurevirtualmachineimageslist.component');
var azurevirtualmachinelist_component_1 = require('./azure/virtualmachines/azurevirtualmachinelist.component');
var UserList_component_1 = require('./microsoftgraph/UserList.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: azuresubscriptionlist_component_1.AzureSubscriptionListComponent },
                    { path: 'Azure/VirtualMachines/Publishers', component: azurevirtualmachinepublisherlist_component_1.AzureVirtualMachinePublisherListComponent },
                    { path: 'Azure/SubscriptionsList', component: azuresubscriptionlist_component_1.AzureSubscriptionListComponent },
                    { path: 'Azure/SubscriptionInfo', component: azuresubscriptioninfo_component_1.AzureSubscriptionInfoComponent },
                    { path: 'Azure/VirtualMachines/Offers', component: azurevirtualmachinepublisheroffers_component_1.AzureVirtualMachinePublisherOffersComponent },
                    { path: 'Azure/VirtualMachines/Skus', component: AzureVirtualMachinePublisherOfferSkus_component_1.AzureVirtualMachinePublisherOfferSkusComponent },
                    { path: 'Azure/VirtualMachines/ImageList', component: azurevirtualmachineimageslist_component_1.AzureVirtualMachineImagesListComponent },
                    { path: 'Azure/VirtualMachines/List', component: azurevirtualmachinelist_component_1.AzureVirtualMachineListComponent },
                    { path: 'MicrosoftGraph/UserList', component: UserList_component_1.UserListComponent }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                azurevirtualmachinepublisherlist_component_1.AzureVirtualMachinePublisherListComponent,
                azuresubscriptionlist_component_1.AzureSubscriptionListComponent,
                azuresubscriptioninfo_component_1.AzureSubscriptionInfoComponent,
                azurevirtualmachinepublisheroffers_component_1.AzureVirtualMachinePublisherOffersComponent,
                AzureVirtualMachinePublisherOfferSkus_component_1.AzureVirtualMachinePublisherOfferSkusComponent,
                azurevirtualmachineimageslist_component_1.AzureVirtualMachineImagesListComponent,
                azurevirtualmachinelist_component_1.AzureVirtualMachineListComponent,
                UserList_component_1.UserListComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map