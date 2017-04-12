import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { SharedModule } from './shared/shared.module';
import { UserModule } from './users/user.module';
import { CourseModule } from './courses/course.module';

import { NavbarComponent } from './nav/navbar.component';

@NgModule({
    imports: [ SharedModule, HttpModule, UserModule, CourseModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'user', pathMatch: 'full' }
        ], {
            useHash: true
        })
    ],
    declarations: [ AppComponent, NavbarComponent ],
    bootstrap: [ AppComponent ],
    providers: [ HttpModule ]
})
export class AppModule {}
