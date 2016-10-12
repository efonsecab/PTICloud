import { IAzureVirtualMachineImage } from './IAzureVirtualMachineImage';
import { Component, OnInit } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azurevm-publisher-offers',
    templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachinePublisherOffers.component.html',
    providers: [AzureVirtualMachineService, HttpModule]
})
export class AzureVirtualMachinePublisherOffersComponent implements OnInit {
    listFilter: string;
    Offers: IAzureVirtualMachineImage[];
    SelectedSubscriptionId: string;
    SelectedPublisherName: string;

    constructor(private _azureVMsService: AzureVirtualMachineService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log("AzureVirtualMachinePublisherOffersComponent init");
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(params => this.SelectedSubscriptionId = params["subscriptionId"]);
        this.route.queryParams.subscribe(params => this.SelectedPublisherName = params["publisherName"]);
        console.log("AzureVirtualMachinePublisherOffersComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
        console.log("AzureVirtualMachinePublisherOffersComponent.SelectedPublisherName=" + this.SelectedPublisherName);
        this._azureVMsService.getOffers(this.SelectedPublisherName, this.SelectedSubscriptionId).subscribe(
            offers => this.Offers = offers,
            error => console.log("Error getting Offers: " + error));
    }
}