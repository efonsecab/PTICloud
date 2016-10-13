import 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AzureVirtualMachinePublisherListComponent } from './azure/virtualmachines/azurevirtualmachinepublisherlist.component';
import { AzureVirtualMachineService } from './azure/virtualmachines/azurevirtualmachineservice';
import { AzureSubscriptionListComponent } from './azure/subscriptions/azuresubscriptionlist.component';
import { AzureSubscriptionInfoComponent } from './azure/subscriptions/azuresubscriptioninfo.component';
import { AzureVirtualMachinePublisherOffersComponent } from './azure/virtualmachines/azurevirtualmachinepublisheroffers.component';
import { AzureVirtualMachinePublisherOfferSkusComponent } from './azure/virtualmachines/AzureVirtualMachinePublisherOfferSkus.component';
import { AzureVirtualMachineImagesListComponent } from './azure/virtualmachines/azurevirtualmachineimageslist.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            [
                { path: '', component: AzureSubscriptionListComponent },
                { path: 'Azure/VirtualMachines/Publishers', component: AzureVirtualMachinePublisherListComponent },
                { path: 'Azure/SubscriptionsList', component: AzureSubscriptionListComponent },
                { path: 'Azure/SubscriptionInfo', component: AzureSubscriptionInfoComponent },
                { path: 'Azure/VirtualMachines/Offers', component: AzureVirtualMachinePublisherOffersComponent },
                { path: 'Azure/VirtualMachines/Skus', component: AzureVirtualMachinePublisherOfferSkusComponent },
                { path: 'Azure/VirtualMachines/ImageList', component: AzureVirtualMachineImagesListComponent }
            ])

    ],
    declarations:
    [
        AppComponent,
        AzureVirtualMachinePublisherListComponent,
        AzureSubscriptionListComponent,
        AzureSubscriptionInfoComponent,
        AzureVirtualMachinePublisherOffersComponent,
        AzureVirtualMachinePublisherOfferSkusComponent,
        AzureVirtualMachineImagesListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
