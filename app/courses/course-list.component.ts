import { APIResponse } from '../shared/response.model';
import { Course } from './course.model';
import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <div>
            <div *ngIf="courses && courses.length">
                <div *ngFor='let course of courses; let i = index'>
                    <cm-course-thumbnail [course]="course"></cm-course-thumbnail>
                </div>
            </div>
            <cm-no-results-found *ngIf="courses && !courses.length"> </cm-no-results-found>
        </div>
    `
})

export class CourseListComponent implements OnInit {
    public courses: Course[];

    constructor(
        private _courseService: CourseService
    ) { }

    ngOnInit(): void {
        this._courseService.list({}).subscribe((data: APIResponse) => {
            this.courses = data.data.courses;

        });
    }
}