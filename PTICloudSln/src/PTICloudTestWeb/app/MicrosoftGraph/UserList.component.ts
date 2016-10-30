import { IGraphServiceUsersCollectionPage, IGraphServiceUsersCollectionRequest, IUser } from './IUser';
import { MicrosoftGraphService } from './MicrosoftGraphService';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'msgraph-userlist',
    templateUrl : '.app/microsoftgraph/userlist.component.html',
    providers: [MicrosoftGraphService, HttpModule]
})
export class UserListComponent implements OnInit
{
    listFilter: string;
    UserList: IGraphServiceUsersCollectionPage;
    constructor(private _msGraphService: MicrosoftGraphService, private router: Router, private route: ActivatedRoute)
    {

    }
    ngOnInit(): void {
        console.log("UserListComponent init");
        this._msGraphService.getUsers().subscribe(
            users => this.UserList = users,
            error => console.log("Error getting MS Graph Users " + error));
    }
}