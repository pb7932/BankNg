import * as internal from "stream";

export class MySorter {

    public field: string;

    public order: number;

    public static updateSorter(pSorter: MySorter, pField: string, pOrder: number) {
        pSorter.field = pField;
        pSorter.order = pOrder;
    }
}