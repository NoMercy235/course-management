import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'cm-progress-bar',
    template: `
        <div class="progress">
            <div class="progress-bar" style="color: lightgrey;" [ngClass]="getClasses()" role="progressbar" [attr.aria-valuenow]="percent" aria-valuemin="0" aria-valuemax="100" [style.width]="percent+ '%'">
                {{ shownLabel }}
            </div>
        </div>
    `
})
export class ProgressBarComponent implements OnInit, OnChanges {
    @Input() currentValue: number;
    @Input() maxValue: number;
    @Input() label?: string;

    private percent: number;
    private shownLabel: string;

    constructor() { }

    ngOnInit() {
        this.calculate();
    }

    calculate(): void {
        this.percent = +(this.currentValue * 100 / this.maxValue).toFixed(2);
        this.shownLabel = this.label ? this.label : this.percent + '%';
    }

    ngOnChanges(changes) {
        if (changes.currentValue) {
            this.calculate();
        }
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