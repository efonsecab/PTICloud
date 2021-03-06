﻿import { IAzureVirtualMachineImageResource } from './IAzureVirtualMachineImageResource'
import { Component, OnInit } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azurevmpublihser-list',
    templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachinePublisherList.component.html',
    providers: [AzureVirtualMachineService, HttpModule]
})
export class AzureVirtualMachinePublisherListComponent implements OnInit {
    SelectedSubscriptionId: string;
    listFilter: string;
    Publishers: IAzureVirtualMachineImageResource[];

    constructor(private _azureVMsService: AzureVirtualMachineService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log("AzureVirtualMachineImageListComponent init");
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(params => this.SelectedSubscriptionId = params["subscriptionId"]);
        console.log("AzureVirtualMachineImageListComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
        this._azureVMsService.getPublishers(this.SelectedSubscriptionId).subscribe(
            publishers => this.Publishers = publishers,
            error => console.log("Error getting Publishers: " + error));
    }
}