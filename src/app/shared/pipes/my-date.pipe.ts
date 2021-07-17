import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'myDate'})
export class MyDatePipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        let newDate = '';
        let date = value.split('T');

        let parts = date.slice(0, 1).toString().split('-');
        let month;
        switch(parts[1]) {
            case '01': month = 'sijecnja'; break;
            case '02': month = 'veljace'; break;
            case '03': month = 'ozujka'; break;
            case '04': month = 'travnja'; break;
            case '05': month = 'svibnja'; break;
            case '06': month = 'lipnja'; break;
            case '07': month = 'srpnja'; break;
            case '08': month = 'kolovoza'; break;
            case '09': month = 'rujna'; break;
            case '10': month = 'listopada'; break;
            case '11': month = 'studenog'; break;
            case '12': month = 'prosinca'; break;
            default: '';
        }
        newDate = parts[2] + '. ' + month + ' ' + parts[0] + '.';
        return newDate;
    }

}