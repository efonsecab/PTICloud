export interface IProperties
{
    vmId: string; 
}

export interface IPlan
{
    name: string;
    product: string;
    promotionCode: string;
    publisher: string;
}
export interface IAzureVirtualMachine
{
    id: string;
    name: string;
    type: string;
    location: string;
    plan: IPlan;
    properties: IProperties;
}

export interface IPage<T>
{
    nextLink;
    value: T[]
}