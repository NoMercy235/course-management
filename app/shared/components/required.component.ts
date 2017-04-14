import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cm-required',
    template: `
        <span class="text-danger"> * </span>
    `
})

export class RequiredComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}