import { Course } from './course.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cm-course-thumbnail',
    template: `
        <div class="col-lg-3 col-md-4 col-sm-6 text-center course-thumbnail">
            <div class="col-md-12">
                <h3> {{ course.title }} </h3>
            </div>
            <div class="col-md-12">
                <span class="text-muted"> {{ (course.begin | millisecondsDate) | date:medium }} </span>
                -
                <span class="text-muted"> {{ (course.begin | millisecondsDate) | date:medium }} </span>
            </div>
            <div class="col-md-12">
                <label> Occupancy </label> | <cm-course-add-user [courseId]="course.id"></cm-course-add-user>
            </div>
            <br />
            <div class="col-md-12">
                <cm-progress-bar *ngIf="course.candidates.length" [currentValue]="course.candidates.length" [maxValue]="course.candidate_limit"></cm-progress-bar>
                <span *ngIf="!course.candidates.length" class="text-info">
                    No candidates. <a href=""> Add one? </a>
                </span>
            </div>
        </div>
    `
})
export class CourseThumbnailComponent implements OnInit {
    @Input() course: Course;

    constructor() { }

    ngOnInit() { }
}