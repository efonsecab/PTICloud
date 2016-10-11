import 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AzureVirtualMachineImageListComponent } from './azure/virtualmachines/azurevirtualmachineimagelist.component';
import { AzureVirtualMachineService } from './azure/virtualmachines/azurevirtualmachineservice';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations:
    [
        AppComponent,
        AzureVirtualMachineImageListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
