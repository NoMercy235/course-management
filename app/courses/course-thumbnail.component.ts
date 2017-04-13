import { User } from '../users/user.model';
import { Course } from './course.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cm-course-thumbnail',
    template: `
        <div class="col-lg-3 col-md-4 col-sm-6 text-center course-thumbnail">
            <div class="col-md-12">
                <h3> {{ course.title }} </h3>
            </div>
            <div class="col-md-12">
                <div class="col-md-12">
                    From: <span class="text-muted"> {{ (course.begin | millisecondsDate) | date: 'medium' }} </span>
                </div>
                <div class="col-md-12">
                    To: <span class="text-muted"> {{ (course.end | millisecondsDate) | date: 'medium' }} </span>
                </div>
            </div>
            <div class="col-md-12">
                <label> Occupancy </label> | <cm-course-add-user [course]="course" (addNewUser)="onUserAdded($event)"></cm-course-add-user>
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

    constructor( ) { }

    ngOnInit() { }

    onUserAdded(user: User): void {
        this.course.candidates.push(user);
    }
}