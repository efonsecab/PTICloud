export interface IUser
{
    accountEnabled: boolean;
    birthday: Date;
    companyName: string;
    country: string;
    department: string;
    displayName: string;
    givenName: string;
    hireDate: Date;
    jobTitle: string;
    mail: string;
    mailNickname: string;
    mobilePhone: string;
    mySite: string;
    officeLocation: string;
    passwordPolicies: string;
    surname: string;
    userPrincipalName: string;
    userType: string;
}

export interface IGraphServiceUsersCollectionRequest
{

}
export interface IGraphServiceUsersCollectionPage
{
    NextPageRequest: IGraphServiceUsersCollectionRequest;
    value: IUser[];
}