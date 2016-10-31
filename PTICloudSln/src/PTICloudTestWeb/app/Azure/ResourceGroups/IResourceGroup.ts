export interface IResourceGroupProperties
{
    provisioningState: string;
}
export interface IResourceGroup
{
    id: string;
    location: string;
    propertyies: IResourceGroupProperties;
    name: string;
}