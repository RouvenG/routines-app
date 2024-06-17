import RowModel from "./row_model";

class TableModel {
    rows: Array<RowModel> = [];
    headers: Array<string> = [];

    constructor(rows: Array<RowModel>, headers: Array<string>) {


        this.rows = rows;
        this.headers = headers;
    }

}

export default TableModel;