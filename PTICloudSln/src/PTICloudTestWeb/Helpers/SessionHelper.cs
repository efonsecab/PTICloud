using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PTICloudTestWeb.Helpers
{
    public class SessionHelper
    {
        public static IHttpContextAccessor HttpContextAccessor { get; set; } = null;
        private static ISession Session
        {
            get
            {
                return HttpContextAccessor.HttpContext.Session;
            }
        }
        public static string AzureUserAccessToken
        {
            get
            {
                return Session.GetString(Constants.USER_ACCESSTOKEN);
            }
        }

        public static string AzureManagementAccessToken
        {
            get
            {
                return Session.GetString(Constants.MANAGEMENT_ACCESSTOKEN);
            }
        }

        public static string MicrosoftGraphAccessToken
        {
            get
            {
                return Session.GetString(Constants.MICROSOFTGRAPH_ACCESSTOKEN);
            }
        }
    }
}
