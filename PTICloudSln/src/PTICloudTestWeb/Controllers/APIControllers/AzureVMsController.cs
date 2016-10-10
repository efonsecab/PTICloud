using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PTICloudTestWeb.Controllers.APIControllers
{
    public class AzureVMsController : BaseApiController
    {
        [HttpGet]
        [Route("api/azurevms/vmimages")]
        public async Task<IActionResult> GetAllVMImages(string subscriptionId, string token)
        {
            PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo authInfo =
                new PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo()
                {
                    AuthenticationMode = PTICloud.Packages.Cloud.Azure.CloudAuthenticationMode.AccessToken,
                    AzureAccessToken = token,
                    SubscriptionId = subscriptionId

                };
            PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager vmManager = new PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager(authInfo);
            var allvmImages = await vmManager.GetAllVirtualMachinesImages(PTICloud.Packages.Cloud.Azure.AzureBaseManager.AzureLocation.SouthCentralUS);
            return Ok(allvmImages);
        }

        [HttpGet]
        [Route("api/azurevmImages/publishers")]
        public async Task<IActionResult> GetVMImagesPublishers(string subscriptionId, string token)
        {
            PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo authInfo =
                new PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo()
                {
                    AuthenticationMode = PTICloud.Packages.Cloud.Azure.CloudAuthenticationMode.AccessToken,
                    AzureAccessToken = token,
                    SubscriptionId = subscriptionId

                };
            PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager vmManager = new PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager(authInfo);
            var publishers = await vmManager.GetVirtualMachinesPublishers(PTICloud.Packages.Cloud.Azure.AzureBaseManager.AzureLocation.SouthCentralUS);
            return Ok(publishers);
        }
    }
}
