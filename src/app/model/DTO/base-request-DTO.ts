import { MyPager } from "./my-pager";
import { MySorter } from "./my-sorter";

export class BaseRequestDTO {

    public data: object;

    public sorter?: MySorter;

    public pager?: MyPager;
}