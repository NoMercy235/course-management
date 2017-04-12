import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'cm-progress-bar',
    template: `
        <div class="progress">
            <div class="progress-bar" [ngClass]="getClasses()" role="progressbar" [attr.aria-valuenow]="percent" aria-valuemin="0" aria-valuemax="100" [style.width]="percent">
                {{ label }}
            </div>
        </div>
    `
})
export class ProgressBarComponent implements OnInit {
    @Input() currentValue: number;
    @Input() maxValue: number;
    @Input() label?: string;

    private ranges = [0, 50, 80];
    private percent: number;

    constructor() { }

    ngOnInit() {
        this.percent = +(this.currentValue * 100 / this.maxValue).toFixed(2);
        this.label = this.label ? this.label : this.percent + '%';
    }

    getClasses(): Object {
        let classes = {};
        if (this.percent < 50) {
            classes['progress-bar-success'] = true;
        } else
        if (this.percent < 80) {
            classes['progress-bar-warning'] = true;
        } else {
            classes['progress-bar-danger'] = true;
        }
        return classes;
    }
}