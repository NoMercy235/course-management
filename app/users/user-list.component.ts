import { Component, OnInit } from '@angular/core';

@Component({
    // template: require('./user-list.component.pug') // TODO: change to pug
    template: require('./user-list.component.html')
})

export class UserListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}