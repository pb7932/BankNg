import { NgModule } from "@angular/core";
import { MyDatePipe } from "./my-date.pipe";
import { MyZavodPipe } from "./my-text.pipe";


const MY_PIPES = [
    MyDatePipe,
    MyZavodPipe,
]

@NgModule({
    declarations: MY_PIPES,
    exports: MY_PIPES
})
export class MyPipesModule {}