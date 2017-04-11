import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
    imports:[ BrowserModule, HttpModule, SharedModule,
        RouterModule.forRoot([

        ], {
            useHash: true
        })
    ],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [ HttpModule ]
})
export class AppModule {}
