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
        [Route("api/azurevmImages/allimages")]
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
        [Route("api/azurevmImages/images")]
        public async Task<IActionResult> GetVMImages(string subscriptionId, string publisherName, string offerName, string skus, string managementToken)
        {
            this.VerifyOrGetManagementToken(ref managementToken);
            PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo authInfo = new PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo()
            {
                AuthenticationMode = PTICloud.Packages.Cloud.Azure.CloudAuthenticationMode.AccessToken,
                SubscriptionId = subscriptionId,
                AzureAccessToken = managementToken
            };
            PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager avm = new PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager(authInfo);
            var result = await avm.GetVirtualMachineImages(PTICloud.Packages.Cloud.Azure.AzureBaseManager.AzureLocation.SouthCentralUS, publisherName, offerName, skus);
            return Ok(result);
        }

        private void VerifyOrGetManagementToken(ref string currentToken)
        {
            if (string.IsNullOrWhiteSpace(currentToken))
                currentToken = PTICloudTestWeb.Helpers.SessionHelper.AzureManagementAccessToken;
        }

        [HttpGet]
        [Route("api/azurevmImages/offers")]
        public async Task<IActionResult> GetPublisherOffers(string publisherName, string subscriptionId, string managementToken)
        {
            VerifyOrGetManagementToken(ref managementToken);
            PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo authInfo =
                new PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo()
                {
                    AuthenticationMode = PTICloud.Packages.Cloud.Azure.CloudAuthenticationMode.AccessToken,
                    AzureAccessToken = managementToken,
                    SubscriptionId = subscriptionId
                };
            PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager avm = new PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager(authInfo);
            var result = await avm.GetVirtualMachinesOffersForPublisher(PTICloud.Packages.Cloud.Azure.AzureBaseManager.AzureLocation.SouthCentralUS, publisherName);
            return Ok(result);
        }


        [HttpGet]
        [Route("api/azurevmImages/skus")]
        public async Task<IActionResult> GetVMImagesSkus(string subscriptionId, string managementToken, string publisherName, string offerName)
        {
            this.VerifyOrGetManagementToken(ref managementToken);
            PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo authInfo =
                new PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo()
                {
                    AuthenticationMode = PTICloud.Packages.Cloud.Azure.CloudAuthenticationMode.AccessToken,
                    SubscriptionId = subscriptionId,
                    AzureAccessToken = managementToken
                };
            PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager avm = new PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager(authInfo);
            var result = await avm.GetVirtualMachineSkus(PTICloud.Packages.Cloud.Azure.AzureBaseManager.AzureLocation.SouthCentralUS, publisherName, offerName);
            return Ok(result);
        }

        [HttpGet]
        [Route("api/azurevmImages/publishers")]
        public async Task<IActionResult> GetVMImagesPublishers(string subscriptionId, string managementToken)
        {
            if (string.IsNullOrWhiteSpace(managementToken) && ControllerContext.HttpContext != null && ControllerContext.HttpContext.Session != null)
            {
                managementToken = PTICloudTestWeb.Helpers.SessionHelper.AzureManagementAccessToken;
            }
            PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo authInfo =
                new PTICloud.Packages.Cloud.Azure.AzureCloudAthenticationInfo()
                {
                    AuthenticationMode = PTICloud.Packages.Cloud.Azure.CloudAuthenticationMode.AccessToken,
                    AzureAccessToken = managementToken,
                    SubscriptionId = subscriptionId

                };
            PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager vmManager = new PTICloud.Packages.Cloud.Azure.AzureVirtualMachinesManager(authInfo);
            var publishers = await vmManager.GetVirtualMachinesPublishers(PTICloud.Packages.Cloud.Azure.AzureBaseManager.AzureLocation.SouthCentralUS);
            return Ok(publishers);
        }
    }
}
