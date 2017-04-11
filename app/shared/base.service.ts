import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SharedModule } from '../shared/shared.module';

interface StringMap { [s: string]: string; }

@Injectable()
export class BaseService {
    protected _baseUrl: string = SharedModule.API_URL;
    protected _baseOptons: RequestOptions = new RequestOptions({
        withCredentials: true, // TODO: most likely wont be needed since there's no authentication
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': true // TODO: check if it'll be needed
        })
    });

    constructor (protected _http: Http) { }

    protected list<R>(url: string, params: StringMap): Observable<R[]> {
        let queryParams: URLSearchParams = new URLSearchParams();
        for (let key of Object.keys(params)) {
            queryParams.set(key, params[key]);
        }

        let options = new RequestOptions(this._baseOptons);
        options.search = queryParams;

        return this._http.get(url, options).map((response: Response) => <R[]>response.json())
            .catch(this.handleError);
    }

    protected get<R>(url: string): Observable<R> {
        return this._http.get(url, this._baseOptons).map((response: Response) => <R>response.json())
            .catch(this.handleError);
    }

    protected post<R, T>(url: string, data: T): Observable<R> {
        return this._http.post(url, data, this._baseOptons).map((response: Response) => <R>response.json())
            .catch(this.handleError);
    }

    protected update<R, T>(url: string, data: T): Observable<R> {
        return this._http.put(url, data, this._baseOptons).map((response: Response) => <R>response.json())
            .catch(this.handleError);
    }

    protected delete<R>(url: string): Observable<R> {
        return this._http.delete(url, this._baseOptons).map((response: Response) => <R>response.json())
            .catch(this.handleError);
    }

    protected handleError(error: Response) {
        return Observable.throw(error.json().error || 'server error');
    }
}