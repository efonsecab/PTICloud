"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var azurevirtualmachineservice_1 = require('./azure/virtualmachines/azurevirtualmachineservice');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [azurevirtualmachineservice_1.AzureVirtualMachineService]);
//# sourceMappingURL=main.js.map