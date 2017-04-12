import { APIResponse } from '../shared/response.model';
import { Course } from './course.model';
import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
    template: require('./course-list.component.html')
})

export class CourseListComponent implements OnInit {
    public courses: Course[];

    constructor(
        private _courseService: CourseService
    ) { }

    ngOnInit() {
        this._courseService.list({}).subscribe((data: APIResponse) => {
            this.courses = data.data.courses;
        });
    }
}