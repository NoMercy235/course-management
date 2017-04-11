import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { Http, Response } from '@angular/http';

import { BaseService } from './base.service';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [],
    exports: [CommonModule, FormsModule],
    providers: [CommonModule, FormsModule, BaseService]
})
export class SharedModule {
    static API_URL: string = 'https://private-anon-6b84098792-coursemgmt.apiary-mock.com/';
}