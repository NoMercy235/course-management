/// <reference path="../typings/index.d.ts" />

import {Component} from '@angular/core';

@Component({
    selector: 'course-management',
    template: `
        <nav-bar> </nav-bar>
        <router-outlet> </router-outlet>
    `
})

export class AppComponent {}
