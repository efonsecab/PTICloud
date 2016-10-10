using PTICloud.Packages.Cloud.Azure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PTICloud.Packages.Cloud.Interfaces
{
    public interface IAzureCloudAuthenticationInfo : ICloudAthenticationInfo
    {
        CloudAuthenticationMode AuthenticationMode { get; set; }
        string TenantId { get; set; }
        string ClientId { get; set; }
        string RedirectUrl { get; set; }
        string SubscriptionId { get; set; }
        string AzureAccessToken { get; set; }
        string CertificateThumbprint { get; set; }
        byte[] CertificateBytes { get; set; }
        string ManagementCertificate { get; set; }
        string PfxCertificatePassword { get; set; }
    }
}
