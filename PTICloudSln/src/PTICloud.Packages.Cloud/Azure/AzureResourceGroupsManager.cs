using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Management.Resources;
using Microsoft.Azure.Management.Resources.Models;

namespace PTICloud.Packages.Cloud.Azure
{
    public class AzureResourceGroupsManager: AzureBaseManager
    {
        private Microsoft.Azure.Management.Resources.ResourceManagementClient _resourceManagementClient = null;
        public AzureResourceGroupsManager(AzureCloudAthenticationInfo authInfo):base(authInfo)
        {
            this._resourceManagementClient = new Microsoft.Azure.Management.Resources.ResourceManagementClient(this.ServiceCredentials);
            this._resourceManagementClient.SubscriptionId = base.AuthInfo.SubscriptionId;
        }

        public async Task<ResourceGroup> CreateResourceGroup(string resourceGroupName, AzureLocation location)
        {
            string locationString = base.GetStringFromAzureLocation(location);
            Microsoft.Azure.Management.Resources.Models.ResourceGroup rgParameters = new Microsoft.Azure.Management.Resources.Models.ResourceGroup()
            {
                Location = locationString,
                Name = resourceGroupName
            };
            var result = await this._resourceManagementClient.ResourceGroups.CreateOrUpdateAsync(resourceGroupName: resourceGroupName, parameters: rgParameters);
            return result;
        }
    }
}
