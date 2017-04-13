import { APIResponse } from '../shared/response.model';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import { BaseService } from '../shared/base.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService extends BaseService {
    private _url: string = this._baseUrl + 'users';

    constructor(
        protected _http: Http
    ) {
        super(_http);
    }

    public list(filters): Observable<any> {
        return super.list<APIResponse>(this._url, filters);
    }
}