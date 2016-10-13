﻿import { IAzureVirtualMachineImage } from './IAzureVirtualMachineImage';
import { Component, OnInit } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azurevm-publisher-offers-skus',
    templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachinePublisherOfferSkus.component.html',
    providers: [AzureVirtualMachineService, HttpModule ]
})
export class AzureVirtualMachinePublisherOfferSkusComponent implements OnInit {
    listFilter: string;
    Skus: IAzureVirtualMachineImage[];
    SelectedSubscriptionId: string;
    SelectedPublisherName: string;
    SelectedPublisherOffer: string;

    constructor(private _azureVMsService: AzureVirtualMachineService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log("AzureVirtualMachinePublisherOfferSkusComponent init");
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(params => this.SelectedSubscriptionId = params["subscriptionId"]);
        this.route.queryParams.subscribe(params => this.SelectedPublisherName = params["publisherName"]);
        this.route.queryParams.subscribe(params => this.SelectedPublisherOffer = params["offerName"]);
        console.log("AzureVirtualMachinePublisherOfferSkusComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
        console.log("AzureVirtualMachinePublisherOfferSkusComponent.SelectedPublisherName=" + this.SelectedPublisherName);
        console.log("AzureVirtualMachinePublisherOfferSkusComponent.SelectedPublisherOffer=" + this.SelectedPublisherOffer);
        this._azureVMsService.getSkus(this.SelectedPublisherOffer, this.SelectedPublisherName, this.SelectedSubscriptionId).subscribe(
            skus => this.Skus = skus,
            error => console.log("Error getting Offers: " + error));
    }
}