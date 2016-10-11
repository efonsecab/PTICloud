using PTICloud.Packages.Cloud.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Azure.Management.Resources;
using Microsoft.Azure.Management.Resources.Models;
using System.Net.Http;
using System.Threading;

namespace PTICloud.Packages.Cloud.Azure
{
    public class AzureAuthorizationHeaderHandler : DelegatingHandler
    {
        private string BearerToken { get; set; } = string.Empty;
        public AzureAuthorizationHeaderHandler(string bearerToken)
        {
            this.BearerToken = bearerToken;
        }
        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            request.Headers.Authorization =
                new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", this.BearerToken);

            return base.SendAsync(request, cancellationToken);
        }
    }
    public class AzureSubscriptionsManager
    {
        private Microsoft.Azure.Management.Resources.SubscriptionClient _subscriptionClient = null;
        public AzureSubscriptionsManager(string token)
        {
            Microsoft.Rest.BasicAuthenticationCredentials credentials =
                new Microsoft.Rest.BasicAuthenticationCredentials();
            HttpClientHandler a;
            this._subscriptionClient = new SubscriptionClient(credentials, new AzureAuthorizationHeaderHandler(token));
        }

        public async Task GetAllLocations(string subscriptionId)
        {
            var locationsList = await this._subscriptionClient.Subscriptions.ListLocationsAsync(subscriptionId, System.Threading.CancellationToken.None);
        }

        public IList<Subscription> GetAllSubscriptions()
        {
            List<Subscription> lstSubscriptions = new List<Subscription>();
            try
            {
                var subscriptionsList = this._subscriptionClient.Subscriptions.List();
                if (subscriptionsList != null && subscriptionsList.Count() > 0)
                    lstSubscriptions.AddRange(subscriptionsList);
            }
            catch (AggregateException aggrEx)
            {
                throw aggrEx;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return lstSubscriptions;
        }

    }
}
