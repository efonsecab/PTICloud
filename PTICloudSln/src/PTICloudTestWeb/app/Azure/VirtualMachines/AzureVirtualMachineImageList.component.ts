import { IAzureVirtualMachineImage } from './IAzureVirtualMachineImage'
import { Component, OnInit } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azurevm-list',
    templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachineImageList.component.html',
    providers: [AzureVirtualMachineService, HttpModule]
})
export class AzureVirtualMachineImageListComponent implements OnInit {
    SelectedSubscriptionId: string;
    VMImagesList: IAzureVirtualMachineImage[];
    listFilter: string;
    Publishers: IAzureVirtualMachineImage[];

    //constructor(private _azureVMsService: AzureVirtualMachineService, subscriptionId: string, token: string) {
    //    this.Publishers = _azureVMsService.getPublishers(subscriptionId, token);
    //}

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