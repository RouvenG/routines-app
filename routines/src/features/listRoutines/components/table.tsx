
'use client'
import TableModel from "../view_models/table_model"


export default function Table(tableData: TableModel) {

    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl shadow-xl">

                {tableData.rows.map((row) => {
                    return (<div className="p-4 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300">
                        {row.name}
                    </div>)
                })}

            </div>
        </div>

    )
}

