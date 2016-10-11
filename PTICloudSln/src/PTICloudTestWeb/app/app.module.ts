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

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(
            [
                { path: '', component: AzureVirtualMachineImageListComponent },
                { path: 'AzureVirtualMachines', component: AzureVirtualMachineImageListComponent },
                { path: 'Azure/SubscriptionsList', component: AzureSubscriptionListComponent }
            ])

    ],
    declarations:
    [
        AppComponent,
        AzureVirtualMachineImageListComponent,
        AzureSubscriptionListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
