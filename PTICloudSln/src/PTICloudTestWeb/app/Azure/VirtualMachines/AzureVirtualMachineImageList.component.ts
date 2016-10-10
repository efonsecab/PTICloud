import { IAzureVirtualMachineImage } from './IAzureVirtualMachineImage'
import { Component } from '@angular/core';
import { AzureVirtualMachineService } from './AzureVirtualMachineService';
import { Observable } from 'rxjs';

@Component({
    selector:'azurevm-list',
    templateUrl:'./app/Azure/VirtualMachines/AzureVirtualMachineImageList.component.html'
})
export class AzureVirtualMachineImageListComponent {
    VMImagesList: IAzureVirtualMachineImage[];
    listFilter: string;
    Publishers: Observable<IAzureVirtualMachineImage[]>;

    constructor(private _azureVMsService: AzureVirtualMachineService, subscriptionId: string, token: string) {
        this.Publishers = _azureVMsService.getPublishers(subscriptionId, token);
    }
}