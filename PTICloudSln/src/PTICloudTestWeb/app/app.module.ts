import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs';
import { AppComponent } from './app.component';
import { AzureVirtualMachineImageListComponent } from './azure/virtualmachines/azurevirtualmachineimagelist.component';

@NgModule({
    imports: [BrowserModule],
    declarations:
    [
        AppComponent,
        AzureVirtualMachineImageListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
