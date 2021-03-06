﻿import { Injectable } from '@angular/core';
import { IAzureVirtualMachineImageResource } from './IAzureVirtualMachineImageResource';
import { IAzureVirtualMachine, IPage } from './IAzureVirtualMachine';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AzureVirtualMachineService {
    private _getVMListUrl = "";
    private _getVMImagesListUrl = "api/azurevms/List";
    private _getVMImagePublishersUrl = "api/azurevmImages/publishers";
    private _getPublisherOffersUrl = 'api/azurevmImages/offers';
    private _getPublisherOfferSkusUrl = 'api/azurevmImages/skus';

    constructor(private _http: Http) { }

    getPublishers(subscriptionId: string): Observable<IAzureVirtualMachineImageResource[]> {
        return this._http.get(this._getVMImagePublishersUrl + "?subscriptionId=" + subscriptionId)
            .map((response: Response) => <IAzureVirtualMachineImageResource[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVMs(subscriptionId: string): Observable<IPage<IAzureVirtualMachine>>
    {
        return this._http.get(this._getVMImagesListUrl + "?subscriptionId=" + subscriptionId)
            .map((response: Response) => <IPage<IAzureVirtualMachine>>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVMImages(subscriptionId: string, publisherName: string, offerName: string, skus: string): Observable<IAzureVirtualMachineImageResource[]> {
        return this._http.get(this._getVMImagesListUrl + "?subscriptionId=" + subscriptionId + "&publisherName=" + publisherName + "&offerName=" + offerName + "&skus=" + skus)
            .map((response: Response) => <IAzureVirtualMachineImageResource[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSkus(offerName: string, publisherName: string, subscriptionId: string): Observable<IAzureVirtualMachineImageResource[]> {
        return this._http.get(this._getPublisherOfferSkusUrl + "?publisherName=" + publisherName + "&subscriptionId=" + subscriptionId + "&offerName=" + offerName)
            .map((response: Response) => <IAzureVirtualMachineImageResource[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOffers(publisherName: string, subscriptionId: string): Observable<IAzureVirtualMachineImageResource[]> {
        return this._http.get(this._getPublisherOffersUrl + "?publisherName=" + publisherName + "&subscriptionId=" + subscriptionId)
            .map((response: Response) => <IAzureVirtualMachineImageResource[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
