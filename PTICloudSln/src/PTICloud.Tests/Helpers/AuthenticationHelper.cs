using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PTICloud.Tests.Helpers
{
    internal sealed class AuthenticationHelper
    {
        internal static async Task<AuthenticationResult> GetTokenForApplication()
        {
            string aadInstance = ConfigurationManager.AppSettings["ida:AADInstance"];
            string tenant = ConfigurationManager.AppSettings["ida:Tenant"];
            string clientId = ConfigurationManager.AppSettings["ida:ClientId"];
            string appKey = ConfigurationManager.AppSettings["ida:AppKey"];

            string graphResourceId = ConfigurationManager.AppSettings["ida:GraphResourceId"];
            string graphUserUrl = ConfigurationManager.AppSettings["ida:GraphUserUrl"];

            AuthenticationResult result = null;

            string authority = string.Format(CultureInfo.InvariantCulture, aadInstance, tenant);

            AuthenticationContext authContext = new AuthenticationContext(authority);
            result = await authContext.AcquireTokenAsync(resource: graphResourceId,
                clientCredential: new ClientCredential(clientId, appKey));
            return result;
        }
    }
}
