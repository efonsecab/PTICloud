using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using System.Configuration;
using System.Security.Claims;
using System.Globalization;
using System.Linq;
using Microsoft.IdentityModel.Clients.ActiveDirectory;

namespace PTICloud.Tests
{

    [TestClass]
    public class AzureVirtualMachinesUT
    {

        [TestMethod]
        public async Task TestGetAzureADToken()
        {
            var authResult = await Helpers.AuthenticationHelper.GetTokenForApplication();
            Assert.IsNotNull(authResult, "Unable to get an Authentication Result");
            Assert.IsTrue(!string.IsNullOrWhiteSpace(authResult.AccessToken), "Unable to get an Access Token");
        }

        [TestMethod]
        public async Task TestGetAllVirtualMachinesImages()
        {
            var authResult = await Helpers.AuthenticationHelper.GetTokenForApplication();
        }
    }
}
