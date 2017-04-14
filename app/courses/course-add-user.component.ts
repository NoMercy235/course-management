import { validateConfig } from '@angular/router/src/config';
import { Course } from './course.model';
import { CourseService } from './course.service';
import { User } from '../users/user.model';
import { APIResponse } from '../shared/response.model';
import { UserService } from '../users/user.service';
import { ModalComponent } from '../shared/components/modal.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'cm-course-add-user',
    template: require('./course-add-user.component.html')
})
export class CourseAddUserComponent implements OnInit {
    @ViewChild(ModalComponent) public readonly modal: ModalComponent;
    @Input() course: Course;
    @Output() addNewUser = new EventEmitter();

    public users: User[];
    public selectedUser: User;
    public displayUser: string;

    constructor(
        private _userService: UserService,
        private _courseService: CourseService
    ) { }

    ngOnInit() { }

    updateModel(val: string): void {
        this.displayUser = val;
    }

    showModal(): void {
        this._userService.list({}).subscribe((data: APIResponse) => {
            data.data.users.forEach(el => {
                el.name = el.first_name + ' ' + el.last_name;
            });
            this.users = data.data.users;
        });
        this.modal.show();
    }

    hideModal(): void {
        this.selectedUser = null;
        this.modal.hide();
    }

    userSelected(user: User): void {
        this.selectedUser = user;
    }

    registerUser(): void {
        if (!this.selectedUser) return;
        this._courseService.registerUser(this.course.id, this.selectedUser.id).subscribe(response => {
            this.addNewUser.emit(this.selectedUser);
            this.hideModal();
        });
    }
}