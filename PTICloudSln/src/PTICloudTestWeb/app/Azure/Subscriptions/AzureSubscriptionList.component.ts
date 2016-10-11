import { AzureSubscription } from './AzureSubscription';
import { AzureSubscriptionsService } from './AzureSubscriptionsService';
import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'azureSubscriptionsList',
    templateUrl: './app/Azure/Subscriptions/AzureSubscriptionList.component.html',
    providers: [AzureSubscriptionsService, HttpModule]
})
export class AzureSubscriptionListComponent implements OnInit {
    SubscriptionsList: AzureSubscription[];
    listFilter: string;

    constructor(private _azureSubscriptionsService: AzureSubscriptionsService) {
    }

    ngOnInit(): void {
        console.log("reached AzureSubscriptionListComponent  ngOnInit");
        this._azureSubscriptionsService.getSubscriptions().subscribe(
            subscriptions => this.SubscriptionsList = subscriptions,
            error => console.log("Error getting Subscriptions: " + error));
    }
}