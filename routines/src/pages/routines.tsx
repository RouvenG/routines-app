
'use client'

import Layout from "@/components/layout";
import Table from "@/features/listRoutines/components/table";
import ListRoutinesService from "@/features/listRoutines/services/listRoutinesService";
import TableModel from "@/features/listRoutines/view_models/table_model";
import loginService from "@/features/login/services/login_service";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



export default function Routines() {

    const [tableData, setTableData] = useState<TableModel>();
    const currentUser = loginService.auth.currentUser;
    const router = useRouter();
    useEffect(() => {
        if (currentUser == null) {

            router.push('/login');
        } else {
            const listRoutinesService = new ListRoutinesService(currentUser);
            if (tableData == null) {
                listRoutinesService.getRoutinesTableData().then((table) => {
                    setTableData(table);
                });
            }
        }
    });


    return (
        <Layout>
            <main className="flex min-h-screen flex-col items-center justify-center p-4">
                {tableData && <Table {...tableData} />}

            </main>

        </Layout>
    )
}

