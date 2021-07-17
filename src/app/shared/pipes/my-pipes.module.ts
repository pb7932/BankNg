import { NgModule } from "@angular/core";
import { MyDatePipe } from "./my-date.pipe";


const MY_PIPES = [
    MyDatePipe,
]

@NgModule({
    declarations: MY_PIPES,
    exports: MY_PIPES
})
export class MyPipesModule {}