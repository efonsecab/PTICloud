import { Injectable } from '@angular/core';
import { AzureSubscription } from './AzureSubscription';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AzureSubscriptionsService
{
    private _getAzureSubscriptionsUrl = "api/AzureSubscriptions/List";

    constructor(private _http: Http) { }

    getSubscriptions(): Observable<AzureSubscription[]>
    {
        console.log("At AzureSubscriptionsService" + "getting data from " + this._getAzureSubscriptionsUrl);
        return this._http.get(this._getAzureSubscriptionsUrl)
            .map((response: Response) => <AzureSubscription[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

        private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}