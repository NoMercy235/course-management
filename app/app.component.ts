/// <reference path="../typings/index.d.ts" />

import {Component} from '@angular/core';

@Component({
    selector: 'course-management',
    template: `
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
    `
})

export class AppComponent {}
