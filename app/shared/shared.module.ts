import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { Http, Response } from '@angular/http';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';

import { BaseService } from './base.service';

@NgModule({
    imports: [ CommonModule, BrowserModule, FormsModule ],
    declarations: [ COMPONENTS, PIPES ],
    exports: [ CommonModule, BrowserModule, FormsModule, COMPONENTS, PIPES ],
    providers: [ BaseService ]
})
export class SharedModule {
    static API_URL: string = 'https://private-anon-6b84098792-coursemgmt.apiary-mock.com/';
}