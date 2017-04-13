import { User } from '../users/user.model';
import { APIResponse } from '../shared/response.model';
import { UserService } from '../users/user.service';
import { ModalComponent } from '../shared/components/modal.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'cm-course-add-user',
    template: `
        <span>
            <button class="btn btn-default btn-sm" (click)="showModal()">
                <i class="glyphicon glyphicon-plus"></i>
            </button>

            <cm-modal>
                <div class="app-modal-header">
                    Register user
                </div>
                <div class="app-modal-body">
                    <div class="col-md-12" *ngFor="let user of users; let i = index;">
                        {{ user }}
                    </div>
                    <i class="clearfix"> </i>
                </div>
                <div class="app-modal-footer">
                    <button type="button" class="btn btn-default" (click)="modal.hide()">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </cm-modal>
        </span>
    `
})
export class CourseAddUserComponent implements OnInit {
    @ViewChild(ModalComponent) public readonly modal: ModalComponent;
    @Input() courseId: number;

    public users: User[];
    public pagination;

    constructor(
        private _userService: UserService
    ) { }

    ngOnInit() { }

    showModal(): void {
        this._userService.list({}).subscribe((data: APIResponse) => {
            this.users = data.data.users;
            this.pagination = data.data.pagination;
        });
        this.modal.show();
    }
}