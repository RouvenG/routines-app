import { DefaultApi } from "@/routinesApi/client";
import getRoutinesAPI from "@/routinesApi/getRoutinesApi";
import { User } from "firebase/auth";
import TableModel from "../view_models/table_model";
import RowModel from "../view_models/row_model";

class ListRoutinesService {

    currentUser: User;
    client: DefaultApi

    constructor(currentUser: User) {
        this.currentUser = currentUser;
        this.client = getRoutinesAPI(currentUser)
    }

    getRoutinesTableData(): Promise<TableModel> {
        return this.client.listWorkflows().then((response) => {

            const rows: Array<RowModel> = [];
            response.map((flow) => {
                rows.push(new RowModel(flow.name ?? "", flow.flowId ?? ""));
            });

            return new TableModel(rows, ["Name"]);

        });
    }



}

export default ListRoutinesService;