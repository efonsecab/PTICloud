import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { AzureVirtualMachineService } from './azure/virtualmachines/azurevirtualmachineservice';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [AzureVirtualMachineService]);
