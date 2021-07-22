export class MyPager {

    public start: number = 0; //rows to offset
    public rowsNum: number = 0; //how many rows to fetch

    public static updatePager(pPager: MyPager, pStart: number, pRowsNum: number) {
        pPager.start = pStart;
        pPager.rowsNum = pRowsNum;
    }
}