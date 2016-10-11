using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PTICloudTestWeb.Controllers.APIControllers
{
    public class AzureSubscriptionsController : Controller
    {
        [HttpGet]
        [Route("api/AzureSubscriptions/List")]
        public IActionResult GetSubscriptions(string managementToken)
        {
            if (string.IsNullOrWhiteSpace(managementToken) && ControllerContext.HttpContext != null && ControllerContext.HttpContext.Session != null)
            {
                managementToken = PTICloudTestWeb.Helpers.SessionHelper.AzureManagementAccessToken;
            }
            //TODO: Find a way to pass access token to angular
            //TODO: Move token to Header instead of querystring
            PTICloud.Packages.Cloud.Azure.AzureSubscriptionsManager asm =
                new PTICloud.Packages.Cloud.Azure.AzureSubscriptionsManager(managementToken);
            var subscriptionsList = asm.GetAllSubscriptions();
            return Ok(subscriptionsList);
        }
    }
}
