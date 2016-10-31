import { IResourceGroup } from './IResourceGroup';
import { Component, OnInit } from '@angular/core';
import { AzureResourceGroupService } from './AzureResourceGroupsService';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azurerg-create',
    templateUrl: './app/Azure/ResourceGroups/azureresourcegroupcreate.component.html',
    providers: [AzureResourceGroupService]
})
export class AzureResourceGroupCreateComponent implements OnInit
{
    ResourceGroup: IResourceGroup;
    SelectedSubscriptionId: string;

    constructor(private _azureRGGroupService: AzureResourceGroupService, private router: Router, private route: ActivatedRoute)
    {

    }

    ngOnInit(): void {
        console.log('Initializing AzureResourceGroupCreateComponent');
        this.route.queryParams.subscribe(params => this.SelectedSubscriptionId = params["subscriptionId"]);
        this.ResourceGroup = <IResourceGroup>{};
    }

    onSubmit()
    {
        console.log("AzureResourceGroupCreateComponent submitted. Name: " + this.ResourceGroup.name);
        this._azureRGGroupService.createResourceGroup(this.SelectedSubscriptionId, this.ResourceGroup.name)
            .subscribe(resourceGroup => this.ResourceGroup = resourceGroup,
                error => console.log("Error creating Resource Group: " + error));
    }
}