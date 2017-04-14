import { User } from '../users/user.model';
import { Course } from './course.model';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cm-course-thumbnail',
    template: require('./course-thumbnail.component.html')
})
export class CourseThumbnailComponent implements OnInit {
    @Input() course: Course;

    constructor( ) { }

    ngOnInit() { }

    onUserAdded(user: User): void {
        this.course.candidates.push(user);
    }

    onUserRemoved(userId: User): void {
        this.course.candidates = this.course.candidates.filter(el => el.id !== userId);
        console.log(this.course.candidates);
        console.log(userId);
    }
}