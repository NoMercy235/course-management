/// <reference path="../typings/index.d.ts" />

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'course-management',
    template: `
        <nav-bar> </nav-bar>
        <div class="container-fluid">
            <div class="row content">
                <router-outlet> </router-outlet>
            </div>
        </div>
    `,
    styles: [
        require('./assets/styles/main.css')
    ],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {}
