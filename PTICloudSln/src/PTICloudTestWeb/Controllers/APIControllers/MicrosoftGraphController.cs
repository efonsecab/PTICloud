using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Graph;
using System.Net.Http.Headers;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860
/// <summary>
/// Check https://github.com/microsoftgraph/msgraph-sdk-dotnet/blob/master/docs/overview.md
/// </summary>
namespace PTICloudTestWeb.Controllers.APIControllers
{
    public class MicrosoftGraphController : BaseApiController
    {
        private Microsoft.Graph.GraphServiceClient GetGraphClient(string accessToken)
        {
                //Check https://github.com/microsoftgraph/msgraph-sdk-dotnet/blob/master/docs/overview.md
                var graphserviceClient = new GraphServiceClient(
                        new DelegateAuthenticationProvider(
                            (requestMessage) =>
                            {
                                requestMessage.Headers.Authorization = new AuthenticationHeaderValue("bearer", accessToken);

                                return Task.FromResult(0);
                            }));
                return graphserviceClient;
        }

        [Route("microsoftgraph/users/list")]
        public async Task<IGraphServiceUsersCollectionPage> GetUsersList(string token)
        {
            base.VerifyOrGetManagementToken(ref token);
            var graphClient = this.GetGraphClient(token);
            var users = await graphClient.Users.Request().GetAsync();
            return users;
        }
    }
}
