import { APIResponse } from '../shared/response.model';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { BaseService } from '../shared/base.service';
import { Injectable } from '@angular/core';
import { Course } from './course.model';

@Injectable()
export class CourseService extends BaseService {
    private _url: string = this._baseUrl + 'courses';

    constructor(
        protected _http: Http
    ) {
        super(_http);
    }

    public list(filters): Observable<any> {
        return super.list<APIResponse>(this._url, filters);
    }

    public registerUser(courseId: number, userId: number): Observable<any> {
        return this._http.post(
            this._url + '/' + courseId + '/register',
            { id_user: userId },
            this._baseOptons
        ).map((response: Response) => <APIResponse>response.json())
        .catch(this.handleError);
    }

    public saveCourse(course: Course): Observable<any> {
        if (course.id) {
            // TODO: not implemented on backend.
            return super.update<Course, Course>(`${this._url}/${course.id}`, course);
        } else {
            return super.post<Course, Course>(this._url, course);
        }
    }
}