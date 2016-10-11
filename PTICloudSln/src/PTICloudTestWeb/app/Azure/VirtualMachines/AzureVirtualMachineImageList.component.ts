import { IAzureVirtualMachineImage } from './IAzureVirtualMachineImage'
import { Component } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';

@Component({
    selector: 'azurevm-list',
    templateUrl: './app/Azure/VirtualMachines/AzureVirtualMachineImageList.component.html',
    providers: [AzureVirtualMachineService, HttpModule]
})
export class AzureVirtualMachineImageListComponent {
    VMImagesList: IAzureVirtualMachineImage[];
    listFilter: string;
    Publishers: Observable<IAzureVirtualMachineImage[]>;

    //constructor(private _azureVMsService: AzureVirtualMachineService, subscriptionId: string, token: string) {
    //    this.Publishers = _azureVMsService.getPublishers(subscriptionId, token);
    //}

    constructor(private _azureVMsService: AzureVirtualMachineService) {
    }
}