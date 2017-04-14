import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';

import { COMPONENTS } from './components';
import { PIPES } from './pipes';
import { SERVICES } from './services';

import { BaseService } from './base.service';

@NgModule({
    imports: [ CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, NguiDatetimePickerModule ],
    declarations: [ COMPONENTS, PIPES ],
    exports: [ CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, NguiDatetimePickerModule, COMPONENTS, PIPES ],
    providers: [ BaseService, SERVICES ]
})
export class SharedModule {
    static API_URL: string = 'https://private-anon-6b84098792-coursemgmt.apiary-mock.com/';
}