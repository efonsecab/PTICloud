# PTI Cloud

PTI Cloud is an Open Source project with the purpose of allowing anyone to easily consume Azure SDKs from any kind of application,
while at the same time offering a .NET Core based website where users would be able to handle Azure Tenants.

The goal of this project is to offer a solution to automate the hosting and resource creation of the major Cloud Providers(Azure, Amazon, Google).
Starting with Microsoft Azure.

## Getting Started
For development it is required to have the following
* [Visual Studio 2015 Update 3 or higher](https://www.visualstudio.com/downloads/)
* [.NET Core](https://www.microsoft.com/net/core#windows)


## Azure SDKs
At the moment of the creation of this document most if not all of the Azure SDKs for .NET Core are still in preview, 
[you can check Microsoft Azure SDK for .NET here](https://github.com/Azure/azure-sdk-for-net)

## Configuring the application
Download the latest version of the app from the development branch.

The application requires you to have Azure AD and an application created on that Azure AD.
The Azure AD application requires the following permissions
* Microsoft Graph
  * Application Permissions
    * Read directory data
    * Read and write directory data
  * Delegated Permissions
    * Sign in and read user profile
    * Read all users' full profiles
    * Read directory data
    * Read and write directory data
* Windows Azure Active Directory
  * Application Permissions
    * Read all hidden memberships
  * Delegated Permissions
    * Sign in and read user profile
* Windows Azure Service Management API
  * Application Permissions
    * N/A
  * Delegated Permissions
    * Access Azure Service Management as organizaton users


Most of the application's configuration is in the appsettings.json file on the webproject.
It contains the structure of what you would need to be able to log in with Azure. Replace the values with the correct ones for your selected Azure Tenant and Azure AD app.

* "ClientId": "[Your Azure AD App Id]"
* "ClientSecret": "[Your Azure AD Key]",
* "AADInstance": "https://login.microsoftonline.com/",
* "PostLogoutRedirectUri": "http://localhost:28080/Home/SignIn",
* "Domain": "[Your Azure Tenant Domain]",
* "TenantId": "[Your Azure Tenant Id]",
* "GraphUrl": "https://graph.windows.net",
* "CallbackPath": "/Home/SignIn"

For Development purposes it is strongly recommended not to use the appsettings, and instead take advantage of user secrets.
To know how to use and configure user screts check 
* [Safe storage of app secrets during development](https://docs.asp.net/en/latest/security/app-secrets.html#safe-storage-of-app-secrets-during-development)

The application Startup.cs file is configured to look for User Secrets when in Development mode. Check the Startup class constructor at Startup.cs.

Once you have configure your Azure AD app and user secrets, you are ready to start with development.

## Knowledge Base
This is the list of common errors found in the application and how to solve them

* **"error":"invalid_grant","error_description":"AADSTS65001: The user or administrator has not consented to use the application with ID...**
  * This error happens when trying to get the mangement access token. Usually happens when you are not the tenant administrator or co-administrator.

## How To Use
Check a sample of how to use the app on it's current development state (October 12, 2016)
[PTI Cloud How to Use Development Sample](https://youtu.be/yu5Tbdk8u_0)