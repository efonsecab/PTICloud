using PTICloud.Packages.Cloud.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Rest;
using System.Security.Cryptography.X509Certificates;

namespace PTICloud.Packages.Cloud.Azure
{
    public abstract class AzureBaseManager
    {
        public enum AzureLocation
        {
            SouthCentralUS
        }
        protected IAzureCloudAuthenticationInfo AuthInfo { get; set; } = null;
        public ServiceClientCredentials ServiceCredentials { get; set; }

        public AzureBaseManager(IAzureCloudAuthenticationInfo authInfo)
        {
            this.AuthInfo = authInfo;
            switch (this.AuthInfo.AuthenticationMode)
            {
                case CloudAuthenticationMode.AccessToken:
                    Microsoft.Rest.TokenCredentials tokenCredentials =
                        new Microsoft.Rest.TokenCredentials(this.AuthInfo.AzureAccessToken);
                    this.ServiceCredentials = tokenCredentials;
                    break;
                case CloudAuthenticationMode.Certificate:
                    X509Certificate2 cert = new X509Certificate2(this.AuthInfo.CertificateBytes, this.AuthInfo.PfxCertificatePassword,
                            X509KeyStorageFlags.MachineKeySet |
                            X509KeyStorageFlags.PersistKeySet |
                            X509KeyStorageFlags.Exportable);
                    Microsoft.Rest.CertificateCredentials certificateCredentials =
                        new Microsoft.Rest.CertificateCredentials(cert);
                    this.ServiceCredentials = certificateCredentials;
                    break;
                case CloudAuthenticationMode.PublishingProfile:
                    byte[] managementCertificateBytes = Convert.FromBase64String(this.AuthInfo.ManagementCertificate);
                    X509Certificate2 publishingCert = new X509Certificate2(managementCertificateBytes, string.Empty,
                        X509KeyStorageFlags.MachineKeySet |
                        X509KeyStorageFlags.PersistKeySet |
                        X509KeyStorageFlags.Exportable);
                    Microsoft.Rest.CertificateCredentials publishingCredentials = new CertificateCredentials(publishingCert);
                    this.ServiceCredentials = publishingCredentials;
                    break;
            }
        }

        protected string GetStringFromAzureLocation(AzureLocation location)
        {
            string locationString = string.Empty;
            switch (location)
            {
                case AzureLocation.SouthCentralUS:
                    locationString = "South Central US";
                    break;
            }
            if (string.IsNullOrWhiteSpace(locationString))
                throw new Exception("Invalid Azure Location: " + location.ToString());
            return locationString;
        }

    }
}
