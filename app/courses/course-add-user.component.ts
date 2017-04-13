import { Course } from './course.model';
import { CourseService } from './course.service';
import { User } from '../users/user.model';
import { APIResponse } from '../shared/response.model';
import { UserService } from '../users/user.service';
import { ModalComponent } from '../shared/components/modal.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'cm-course-add-user',
    template: `
        <span>
            <button [disabled]="course.candidates.length >= course.candidate_limit" class="btn btn-default btn-sm" (click)="showModal()">
                <i class="glyphicon glyphicon-plus"></i>
            </button>

            <cm-modal>
                <div class="cm-modal-header text-left">
                    <h3> Register User </h3>
                </div>
                <div class="cm-modal-body">
                    <form #newUserForm="ngForm" (ngSubmit)="registerUser()" novalidate autocomplete="off">
                        <div class="col-md-12">
                            <typeahead style="width: 100%" [(ngModel)]="user" name="user"
                                [list]="users" [searchProperty]="'name'" [displayProperty]="'name'" [maxSuggestions]="10" (suggestionSelected)="userSelected($event)"
                                placeholder="Search user">
                            </typeahead>
                        </div>
                    </form>
                    <i class="clearfix"> </i>
                </div>
                <div class="cm-modal-footer">
                    <button type="button" class="btn btn-default" (click)="hideModal()">Cancel</button>
                    <button type="button" class="btn btn-primary" (click)="newUserForm.ngSubmit.emit()">Ok</button>
                </div>
            </cm-modal>
        </span>
    `
})
export class CourseAddUserComponent implements OnInit {
    @ViewChild(ModalComponent) public readonly modal: ModalComponent;
    @Input() course: Course;
    @Output() addNewUser = new EventEmitter();

    public users: User[];
    public selectedUser: User;
    public user: User;

    constructor(
        private _userService: UserService,
        private _courseService: CourseService
    ) { }

    ngOnInit() { }

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
        this.user = this.selectedUser = null;
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