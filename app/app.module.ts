import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';

@NgModule({
    imports:[ BrowserModule, HttpModule,
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
