import { Course } from './course.model';
import { CourseService } from './course.service';
import { User } from '../users/user.model';
import { APIResponse } from '../shared/response.model';
import { UserService } from '../users/user.service';
import { ModalComponent } from '../shared/components/modal.component';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'cm-course-remove-user',
    template: `
        <span>
            <button [disabled]="!course.candidates.length" class="btn btn-default btn-sm" (click)="modal.show()">
                <i class="glyphicon glyphicon-pencil"></i>
            </button>

            <cm-modal>
                <div class="cm-modal-header text-left">
                    <h3> Remove User </h3>
                </div>
                <div class="cm-modal-body">
                    <div class="col-md-12" *ngFor="let user of course.candidates; let i = index;">
                        <div class="col-md-10 text-left">
                            <h4> <b> {{ i + 1 }}. </b> <span class="text-muted"> {{ user.first_name }} {{ user.last_name }} </span> </h4>
                        </div>
                        <div class="col-md-2 text-right">
                            <button class="btn btn-danger btn-md" (click)="remove(user.id)" style="margin-top: 4px;">
                                <i class="glyphicon glyphicon-remove"></i>
                            </button>
                        </div>
                    </div>
                    <i class="clearfix"> </i>
                </div>
                <div class="cm-modal-footer">
                    <button type="button" class="btn btn-default" (click)="modal.hide()">Cancel</button>
                </div>
            </cm-modal>
        </span>
    `
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