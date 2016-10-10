using PTICloud.Packages.Cloud.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PTICloud.Packages.Cloud.Azure
{
    public enum CloudAuthenticationMode
    {
        AccessToken,
        Certificate,
        PublishingProfile
    }
    public class AzureCloudAthenticationInfo : IAzureCloudAuthenticationInfo
    {
        public CloudAuthenticationMode AuthenticationMode { get; set; } = CloudAuthenticationMode.AccessToken;
        public const string LOGIN_SERVER_URL = "https://login.windows.net/{0}";
        public const string API_ENDPOINT = "https://management.core.windows.net/";
        public string TenantId { get; set; }
        public string ClientId { get; set; }
        public string RedirectUrl { get; set; }
        public string SubscriptionId { get; set; }
        public string AzureAccessToken { get; set; }
        public string CertificateThumbprint { get; set; }
        public byte[] CertificateBytes { get; set; }
        public string ManagementCertificate { get; set; }
        public string PfxCertificatePassword { get; set; }
    }
}
