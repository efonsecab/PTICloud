import { IAzureVirtualMachine, IPage } from './IAzureVirtualMachine';
import { Component, OnInit } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azurevms-list',
    templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachineList.component.html',
    providers: [AzureVirtualMachineService, HttpModule]
})
export class AzureVirtualMachineListComponent implements OnInit {
    SelectedSubscriptionId: string;
    listFilter: string;
    VMList: IPage<IAzureVirtualMachine>;

    constructor(private _azureVMsService: AzureVirtualMachineService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log("AzureVirtualMachineListComponent init");
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(params => this.SelectedSubscriptionId = params["subscriptionId"]);
        console.log("AzureVirtualMachineListComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
        this._azureVMsService.getVMs(this.SelectedSubscriptionId).subscribe(
            vms => this.VMList = vms,
            error => console.log("Error getting Virtual MAchines List: " + error));
    }
}