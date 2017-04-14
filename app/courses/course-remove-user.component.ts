import { Course } from './course.model';
import { CourseService } from './course.service';
import { User } from '../users/user.model';
import { APIResponse } from '../shared/response.model';
import { UserService } from '../users/user.service';
import { ModalComponent } from '../shared/components/modal.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'cm-course-remove-user',
    template: require('./course-remove-user.component.html')
})
export class CourseRemoveUserComponent implements OnInit {
    @ViewChild(ModalComponent) public readonly modal: ModalComponent;
    @Input() course: Course;
    @Output() removeUser = new EventEmitter();

    public selectedUser: User;
    public user: User;

    constructor(
        private _courseService: CourseService
    ) { }

    ngOnInit() { }

    remove(userId): void {
        this._courseService.registerUser(this.course.id, userId).subscribe(response => {
            this.removeUser.emit(userId);
            this.modal.hide();
        });
    }
}