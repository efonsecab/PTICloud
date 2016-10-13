import { Injectable } from '@angular/core';
import { IAzureVirtualMachineImage } from './IAzureVirtualMachineImage';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AzureVirtualMachineService {
    private _getVMImagesListUrl = "api/azurevms/vmsList";
    private _getVMImagePublishersUrl = "api/azurevmImages/publishers";
    private _getPublisherOffersUrl = 'api/azurevmImages/offers';
    private _getPublisherOfferSkusUrl = 'api/azurevmImages/skus';

    constructor(private _http: Http) { }

    getPublishers(subscriptionId: string): Observable<IAzureVirtualMachineImage[]> {
        return this._http.get(this._getVMImagePublishersUrl + "?subscriptionId=" + subscriptionId)
            .map((response: Response) => <IAzureVirtualMachineImage[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getVirtualMachineImages(subscriptionId: string): Observable<IAzureVirtualMachineImage[]> {
        return this._http.get(this._getVMImagesListUrl + "?subscriptionId=" + subscriptionId)
            .map((response: Response) => <IAzureVirtualMachineImage[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getSkus(offerName: string, publisherName: string, subscriptionId: string): Observable<IAzureVirtualMachineImage[]> {
        return this._http.get(this._getPublisherOfferSkusUrl + "?publisherName=" + publisherName + "&subscriptionId=" + subscriptionId + "&offerName=" + offerName)
            .map((response: Response) => <IAzureVirtualMachineImage[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOffers(publisherName: string, subscriptionId: string): Observable<IAzureVirtualMachineImage[]> {
        return this._http.get(this._getPublisherOffersUrl + "?publisherName=" + publisherName + "&subscriptionId=" + subscriptionId)
            .map((response: Response) => <IAzureVirtualMachineImage[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
