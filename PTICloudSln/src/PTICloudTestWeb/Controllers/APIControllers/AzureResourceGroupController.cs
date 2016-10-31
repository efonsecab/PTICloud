using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PTICloudTestWeb.Controllers.APIControllers
{
    public class AzureResourceGroupController : BaseApiController
    {
        [Route("api/Azure/ResourceGroups/Create")]
        [HttpPost]
        public async Task<IActionResult> CreateResourceGroup(
            [FromBody]string resourceGroupName,
            [FromBody]string managementToken,
            [FromBody]string subscriptionId)
        {
            this.VerifyOrGetManagementToken(ref managementToken);
            PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo authInfo = new PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo()
            {
                AuthenticationMode = PTICloud.Packages.Cloud.Azure.CloudAuthenticationMode.AccessToken,
                SubscriptionId = subscriptionId,
                AzureAccessToken = managementToken
            };
            PTICloud.Packages.Cloud.Azure.AzureResourceGroupsManager argManager = new PTICloud.Packages.Cloud.Azure.AzureResourceGroupsManager(authInfo);
            var result = await argManager.CreateResourceGroup(resourceGroupName, PTICloud.Packages.Cloud.Azure.AzureBaseManager.AzureLocation.SouthCentralUS);
            return Ok(result);
        }
    }
}
