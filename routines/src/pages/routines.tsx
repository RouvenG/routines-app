
'use client'

import Layout from "@/components/layout";
import Table from "@/features/listRoutines/components/table";
import ListRoutinesService from "@/features/listRoutines/services/listRoutinesService";
import TableModel from "@/features/listRoutines/view_models/table_model";
import userManagementService from "@/features/login/services/user_management_service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function Routines() {

    const router = useRouter();
    const [tableData, setTableData] = useState<TableModel>();
    const [listRoutinesService, setListRoutinesService] = useState<ListRoutinesService | null>(null);

    useEffect(() => {
        userManagementService.getCurrentUser().then((user) => {
            if (user) {
                setListRoutinesService(new ListRoutinesService(user));
            } else {
                setListRoutinesService(null);
            }
        })

    }, []);

    useEffect(() => {
        if (tableData == null) {
            if (listRoutinesService) {
                listRoutinesService.getRoutinesTableData().then((table) => {
                    setTableData(table);
                });
            }
        }
    }, [listRoutinesService]);


    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-center p-4">
                {tableData && <Table {...tableData} />}

            </main>

        </Layout>
    )
}

