import { APIResponse } from '../shared/response.model';
import { Course } from './course.model';
import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
    template: `
        <div>
            <div class="col-md-12">
                <h2> 
                    Course Overview | 
                    <span>
                        <cm-course-save (courseSaved)="addCourse($event)">
                            <button class="btn btn-default btn-lg">
                                <i class="glyphicon glyphicon-plus"> </i>
                            </button>
                        </cm-course-save>
                    </span>
                </h2>
            </div>
            <cm-searching *ngIf="!courses" class="text-center" [maxIndex]="5"> </cm-searching>
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

    addCourse(course: Course): void {
        this.courses.push(course);
    }
}