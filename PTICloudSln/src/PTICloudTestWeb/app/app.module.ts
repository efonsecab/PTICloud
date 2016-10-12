import 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AzureVirtualMachineImageListComponent } from './azure/virtualmachines/azurevirtualmachineimagelist.component';
import { AzureVirtualMachineService } from './azure/virtualmachines/azurevirtualmachineservice';
import { AzureSubscriptionListComponent } from './azure/subscriptions/azuresubscriptionlist.component';
import { AzureSubscriptionInfoComponent } from './azure/subscriptions/azuresubscriptioninfo.component';
import { AzureVirtualMachinePublisherOffersComponent } from './azure/virtualmachines/azurevirtualmachinepublisheroffers.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            [
                { path: '', component: AzureSubscriptionListComponent },
                { path: 'Azure/VirtualMachines', component: AzureVirtualMachineImageListComponent },
                { path: 'Azure/SubscriptionsList', component: AzureSubscriptionListComponent },
                { path: 'Azure/SubscriptionInfo', component: AzureSubscriptionInfoComponent },
                { path: 'Azure/VirtualMachines/Offers', component: AzureVirtualMachinePublisherOffersComponent }
            ])

    ],
    declarations:
    [
        AppComponent,
        AzureVirtualMachineImageListComponent,
        AzureSubscriptionListComponent,
        AzureSubscriptionInfoComponent,
        AzureVirtualMachinePublisherOffersComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
