import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'millisecondsDate'
})

export class MillisecondsDatePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        let ok: boolean = true;
        if (typeof value !== 'number') ok = false;
        if (typeof value === 'number' && value < 0) ok = false;
        if (!ok) return '' + value;
        return new Date(value);
    }
}