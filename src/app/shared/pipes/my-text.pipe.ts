import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'myZavod'})
export class MyZavodPipe implements PipeTransform {
    transform(value: string, ...args: any[]): string {
        let newZavod = '';
        newZavod =  `<div class="ui label">
                        <i class="sitemap icon"></i>
                        ${{value}}
                    </div>`
        return newZavod;
    }

}