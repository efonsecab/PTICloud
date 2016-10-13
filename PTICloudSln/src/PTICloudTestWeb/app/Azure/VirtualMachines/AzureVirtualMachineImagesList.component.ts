import { IAzureVirtualMachineImageResource } from './IAzureVirtualMachineImageResource'
import { Component, OnInit } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azurevmimage-list',
    templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachineImagesList.component.html',
    providers: [AzureVirtualMachineService, HttpModule]
})
export class AzureVirtualMachineImagesListComponent implements OnInit
{
    SelectedSubscriptionId: string;
    SelectedPublisherName: string;
    SelectedOfferName: string;
    SelectedSkuName: string;
    VMImages: IAzureVirtualMachineImageResource[];
    listFilter: string;

    constructor(private _azureVMsService: AzureVirtualMachineService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log("AzureVirtualMachineImagesList init");
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(params => this.SelectedSubscriptionId = params["subscriptionId"]);
        this.route.queryParams.subscribe(params => this.SelectedPublisherName = params["publisherName"]);
        this.route.queryParams.subscribe(params => this.SelectedOfferName = params["offerName"]);
        this.route.queryParams.subscribe(params => this.SelectedSkuName = params["skuName"]);
        console.log("AzureVirtualMachineImagesList.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
        this._azureVMsService.getVMImages(this.SelectedSubscriptionId, this.SelectedPublisherName, this.SelectedOfferName, this.SelectedSkuName).subscribe(
            images => this.VMImages = images,
            error => console.log("Error getting Publishers: " + error));
    }
}