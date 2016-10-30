export interface IUser
{
    AccountEnabled: boolean;
    Birthday: Date;
    CompanyName: string;
    Country: string;
    Department: string;
    DisplayName: string;
    GivenName: string;
    HireDate: Date;
    JobTitle: string;
    Mail: string;
    MailNickname: string;
    MobilePhone: string;
    MySite: string;
    OfficeLocation: string;
    PasswordPolicies: string;
    UserPrincipalName: string;
    UserType: string;
}

export interface IGraphServiceUsersCollectionRequest
{

}
export interface IGraphServiceUsersCollectionPage
{
    NextPageRequest: IGraphServiceUsersCollectionRequest;
    value: IUser[];
}