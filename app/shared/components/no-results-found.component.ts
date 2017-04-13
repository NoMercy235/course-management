import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cm-no-results-found',
    template: `
        <h1> No results found </h1>
    `
})
export class NoResultsFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}