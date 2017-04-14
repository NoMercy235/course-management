import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cm-searching',
    template: `
        <h3> Searching{{ dots }} </h3>
    `
})

export class SearchingComponent implements OnInit {
    @Input() maxIndex: number

    public dots: string;
    private currIndex: number;

    constructor() {
        this.currIndex = 1;
    }

    ngOnInit() {
        this.drawDots();
     }

    drawDots(): void {
        setTimeout(() => {
            if (this.currIndex == this.maxIndex) this.currIndex = 1;
            this.dots = '';
            for (let i = 0; i < this.currIndex; i ++) {
                this.dots += '.';
            }
            this.currIndex ++;
            this.drawDots();
        }, 300);
    }
}