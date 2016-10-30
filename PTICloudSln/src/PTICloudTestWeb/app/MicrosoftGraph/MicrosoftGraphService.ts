import { Injectable } from '@angular/core';
import { IGraphServiceUsersCollectionPage, IGraphServiceUsersCollectionRequest, IUser } from './IUser';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class MicrosoftGraphService
{
    private _getUsersListUrl = "api/microsoftgraph/users/list";

    constructor(private _http: Http) { }

    getUsers(): Observable<IGraphServiceUsersCollectionPage>
    {
        return this._http.get(this._getUsersListUrl)
            .map((response: Response) => <IGraphServiceUsersCollectionPage>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}