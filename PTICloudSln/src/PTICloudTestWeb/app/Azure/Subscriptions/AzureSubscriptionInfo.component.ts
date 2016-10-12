import { AzureSubscription } from './AzureSubscription';
import { Component, OnInit } from '@angular/core';
import { AzureSubscriptionsService } from './AzureSubscriptionsService';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'azureSubscriptionInfo',
    templateUrl: './app/Azure/Subscriptions/AzureSubscriptionInfo.component.html',
    providers: [AzureSubscriptionsService, HttpModule]
})
export class AzureSubscriptionInfoComponent implements OnInit {
    SelectedSubscriptionId: string;

    constructor(private _azureSubscriptionsService: AzureSubscriptionsService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void
    {
        //check http://stackoverflow.com/questions/34599174/how-to-handle-query-parameters-in-angular-2
        this.route.queryParams.subscribe(params => this.SelectedSubscriptionId = params["subscriptionId"]);
        console.log("AzureSubscriptionInfoComponent.SelectedSubscriptionId=" + this.SelectedSubscriptionId);
    }
}