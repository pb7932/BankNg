export class MyDateHelper {

    //transform fomantics date to dotnet date
    public static transformFomanticDate(date: string): string {
        let newDate = '';
        let day = '';
        let month = '';
        let year = '';

        let parts = date.split(' ');

        switch(parts[0]) {
            case 'January' : month = '01'; break;
            case 'February' : month = '02'; break;
            case 'March' : month = '03'; break;
            case 'April' : month = '04'; break;
            case 'May' : month = '05'; break;
            case 'June' : month = '06'; break;
            case 'July' : month = '07'; break;
            case 'August' : month = '08'; break;
            case 'September' : month = '09'; break;
            case 'October' : month = '10'; break;
            case 'November' : month = '11'; break;
            case 'December' : month = '12'; break;
        }

        let dy = parts[1].slice(0, parts[1].length - 1);
        year = parts[2];
        day = +dy[0] < 10 ? '0' + dy[0] : dy[0] 
        
        newDate = year + '-' + month + '-' + day;
        return newDate;
    }
}