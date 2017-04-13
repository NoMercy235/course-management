import { User } from './user.model';
import { APIResponse } from '../shared/response.model';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
    // template: require('./user-list.component.pug') // TODO: change to pug
    template: require('./user-list.component.html')
})
export class UserListComponent implements OnInit {
    public users: User[];
    public pagination;

    constructor(
        private _userService: UserService
    ) { }

    ngOnInit() {
        this.getUsers({});
    }

    getUsers(filters) {
        this._userService.list({}).subscribe((data: APIResponse) => {
            this.users = data.data.users;
            this.pagination = data.pagination;
            this.pagination.max_page = Math.ceil(this.users.length / this.pagination.per_page);
        });
    }

    getArray(nr): number[] {
        let result: number[] = [];
        let i = 0;
        do {
            result.push(++i);
        } while (i < nr);
        return result;
    }

    changePage(page) {
        this.pagination.current_page = page;
        this.getUsers({ page: page });
    }
}