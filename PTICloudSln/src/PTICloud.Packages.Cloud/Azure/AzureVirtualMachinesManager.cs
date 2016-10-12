using Microsoft.Azure.Management.Compute;
using Microsoft.Azure.Management.Compute.Models;
using PTICloud.Packages.Cloud.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;

namespace PTICloud.Packages.Cloud.Azure
{
    public class AzureVirtualMachinesManager : AzureBaseManager, IVirtualMachinesManager
    {

        private ComputeManagementClient _computeManagementClient = null;
        public AzureVirtualMachinesManager(IAzureCloudAuthenticationInfo authInfo) : base(authInfo)
        {
            this._computeManagementClient = new Microsoft.Azure.Management.Compute.ComputeManagementClient(base.ServiceCredentials);
            this._computeManagementClient.SubscriptionId = base.AuthInfo.SubscriptionId;
        }

        public async Task GetVirtualMachinesImages(AzureLocation location, string publisherName, string offer, string skus)
        {
            string locationString = base.GetStringFromAzureLocation(location);
            await _computeManagementClient.VirtualMachineImages.ListAsync(location: locationString, publisherName: publisherName, offer: offer,
                skus: skus);
            await Task.Yield();
        }

        public async Task<IList<VirtualMachineImageResource>> GetVirtualMachinesPublishers(AzureLocation location)
        {
            string locationString = base.GetStringFromAzureLocation(location);
            var lstPublishers = await this._computeManagementClient.VirtualMachineImages.ListPublishersAsync(locationString);
            return lstPublishers;
        }

        public async Task<IList<VirtualMachineImageResource>> GetVirtualMachinesOffersForPublisher(AzureLocation location, string publisherName)
        {
            try
            {
                string locationString = base.GetStringFromAzureLocation(location);
                var lstOffers = await this._computeManagementClient.VirtualMachineImages.ListOffersAsync(locationString, publisherName);
                return lstOffers;
            }
            catch (AggregateException aggrEx)
            {
                throw aggrEx;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public async Task<List<VirtualMachineImageResource>> GetAllVirtualMachinesImages(AzureLocation location)
        {
            try
            {
                string locationString = base.GetStringFromAzureLocation(location);
                var lstPublishers = await this._computeManagementClient.VirtualMachineImages.ListPublishersAsync(locationString);
                List<VirtualMachineImageResource> lstVirtualMachines = new List<VirtualMachineImageResource>();
                foreach (var singlePublisher in lstPublishers)
                {
                    var currentPublisherOffers = await this._computeManagementClient.VirtualMachineImages.ListOffersAsync(locationString,
                        singlePublisher.Name);
                    foreach (var singleOffer in currentPublisherOffers)
                    {
                        var offerSKUs = await this._computeManagementClient.VirtualMachineImages.ListSkusAsync(locationString, singlePublisher.Name, singleOffer.Name);
                        foreach (var singleSKU in offerSKUs)
                        {
                            var vmsForSKU = await this._computeManagementClient.VirtualMachineImages.ListAsync(locationString,
                                singlePublisher.Name, singleOffer.Name, singleSKU.Name);
                            if (vmsForSKU != null && vmsForSKU.Count > 0)
                                lstVirtualMachines.AddRange(vmsForSKU);
                        }
                    }
                }
                await Task.Yield();
                return lstVirtualMachines;
            }
            catch (AggregateException aggrEx)
            {
                throw aggrEx;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
