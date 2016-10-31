/// <reference path="azureresourcegroupcreate.component.ts" />
import { Injectable } from '@angular/core';
import {  IResourceGroup, IResourceGroupProperties } from './IResourceGroup';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AzureResourceGroupService
{
    private _createResourceGroupUrl: string = "api/Azure/ResourceGroups/Create";

    constructor(private _http: Http) { }

    createResourceGroup(pSubscriptionId: string, pResourceGroupName: string): Observable<IResourceGroup>
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers })
        var body = JSON.stringify(
            {
                subscriptionId: pSubscriptionId,
                resourceGroupName: pResourceGroupName
            }
        );
        return this._http.post(this._createResourceGroupUrl, body, options)
            .map((response: Response) => <IResourceGroup>response.json())
            .do(data => console.log("Created: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}