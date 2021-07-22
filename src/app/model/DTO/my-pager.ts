export class MyPager {

    public start: number; //rows to offset
    public rowsNum: number; //how many rows to fetch

    public static updatePager(pPager: MyPager, pStart: number, pRowsNum: number) {
        pPager.start = pStart;
        pPager.rowsNum = pRowsNum;
    }
}