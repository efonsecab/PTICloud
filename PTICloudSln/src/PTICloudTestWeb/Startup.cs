using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System.IO;
using Microsoft.Extensions.FileProviders;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.IdentityModel.Clients.ActiveDirectory;
using System.Security.Claims;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using PTICloudTestWeb.Helpers;

namespace PTICloudTestWeb
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
            services.AddSession();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();
            app.UseSession();
            app.UseCookieAuthentication(options: new CookieAuthenticationOptions()
            {
                AutomaticAuthenticate = true
            });
            #region Azure AD
            string clientId = Configuration["Authentication:AzureAd:ClientId"];
            string clientSecret = Configuration["Authentication:AzureAd:ClientSecret"];
            string authority = Configuration["Authentication:AzureAd:AADInstance"] + Configuration["Authentication:AzureAd:TenantId"];
            app.UseOpenIdConnectAuthentication(options: new OpenIdConnectOptions()
            {
                AutomaticChallenge = true,
                ClientId = clientId,
                ClientSecret = clientSecret,
                Authority = Configuration["Authentication:AzureAd:AADInstance"] + Configuration["Authentication:AzureAd:TenantId"],
                CallbackPath = Configuration["Authentication:AzureAd:CallbackPath"],
                SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme,
                PostLogoutRedirectUri = Configuration["Authentication:AzureAd:PostLogoutRedirectUri"],
                ResponseType = OpenIdConnectResponseTypes.CodeIdToken,
                SaveTokens = true,
                Events = new Microsoft.AspNetCore.Authentication.OpenIdConnect.OpenIdConnectEvents()
                {
                    OnAuthorizationCodeReceived = async (context) =>
                    {
                        string graphUrl = Configuration["Authentication:AzureAd:GraphUrl"];
                        var request = context.HttpContext.Request;
                        var absoluteUrl = string.Concat(request.Scheme, "://", request.Host.ToUriComponent(), request.Path.ToUriComponent());
                        string code = context.TokenEndpointRequest.Code;
                        ClientCredential credential = new ClientCredential(clientId, clientSecret);
                        string userObjectID = context.Ticket.Principal.Claims.First(p => p.Type == "http://schemas.microsoft.com/identity/claims/objectidentifier").Value;
                        string userPrincipalName = context.Ticket.Principal.Identity.Name;
                        AuthenticationContext authContext = new AuthenticationContext(authority);

                        #region User Access Token
                        AuthenticationResult result = await authContext.AcquireTokenByAuthorizationCodeAsync(
                                code, new Uri(absoluteUrl), credential, graphUrl);
                        context.HttpContext.Session.SetString(Constants.USER_ACCESSTOKEN, result.AccessToken);
                        #endregion User Access Token

                        #region Management Access Token
                        AuthenticationResult managementAuthResult = await authContext.AcquireTokenByAuthorizationCodeAsync(code, new Uri(absoluteUrl), credential, "https://management.core.windows.net/");
                        context.HttpContext.Session.SetString(Constants.MANAGEMENT_ACCESSTOKEN, managementAuthResult.AccessToken);
                        #endregion Management Access Token

                        #region Microsoft Graph Token
                        AuthenticationResult microsoftGraphAuthResult = await authContext.AcquireTokenByAuthorizationCodeAsync(
                            code,// the auth 'code' parameter from the Azure redirect.
                            new Uri(absoluteUrl), // same redirectUri as used before in Login method.
                            credential, // use the client ID and secret to establish app identity.
                            "https://graph.microsoft.com/");
                        context.HttpContext.Session.SetString(Constants.MICROSOFTGRAPH_ACCESSTOKEN, microsoftGraphAuthResult.AccessToken);
                        #endregion Microsoft Graph Token

                        var authTicketClaims = context.Ticket.Principal.Identity as ClaimsIdentity;
                    }
                }
            });
            #endregion Azure AD
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
            app.Use(async (context, next) =>
            {
                await next();

                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });
        }
    }
}
