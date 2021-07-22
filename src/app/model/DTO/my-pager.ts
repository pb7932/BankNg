export class MyPager {

    public start: number = 0; //rows to offset
    public rowsNum: number = 7; //how many rows to fetch

    public static updatePager(pPager: MyPager, pStart: number, pRowsNum: number) {
        pPager.start = pStart;
        pPager.rowsNum = pRowsNum;
    }
}