import { APIResponse } from '../shared/response.model';
import { UserService } from './user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal.component';
import { User } from './user.model';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'cm-user-save',
    template: require('./user-save.component.html')
})

export class UserSaveComponent implements OnInit {
    @ViewChild(ModalComponent) public readonly modal: ModalComponent;
    @Input() user?: User;
    @Output() userSaved = new EventEmitter();

    public first_name: FormControl;
    public last_name: FormControl;
    public gender: FormControl;
    public saveUserForm: FormGroup;

    constructor(
        private _userService: UserService
    ) { }

    ngOnInit() {
        this.initForm();
     }

    validateControl(control: FormControl): boolean {
        return !(control.invalid && control.dirty);
    }

    initForm(): void {
        this.first_name = new FormControl(this.user ? this.user.first_name : '', Validators.required);
        this.last_name = new FormControl(this.user ? this.user.last_name : '', Validators.required);
        this.gender = new FormControl(this.user ? this.user.gender : '', Validators.required);
        this.saveUserForm = new FormGroup({
            first_name: this.first_name,
            last_name: this.last_name,
            gender: this.gender
        });
    }

    showModal(): void {
        this.initForm();
        this.modal.show();
    }

    saveUser(): void {
        let user = {
            id: this.user ? this.user.id : undefined,
            first_name: this.saveUserForm.value.first_name,
            last_name: this.saveUserForm.value.last_name,
            gender: this.saveUserForm.value.gender
        }
        this._userService.saveUser(user).subscribe((response: APIResponse) => {
            if (response.data) user.id = response.data.id;
            this.userSaved.emit(user);
            this.modal.hide();
            this.saveUserForm.reset();
        });
    }
}