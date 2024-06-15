'use client'

import { redirect } from "next/navigation";
import loginService from "./login/services/login_service";
import getRoutinesAPI from "./lib/routines_api/get_routines_api";
import { useState } from "react";
import { Flow } from "./lib/routines_api/client";

export default function Home() {

  const [flows, setFlows] = useState<Array<Flow>>();

  const currentUser = loginService.auth.currentUser;



  console.log(currentUser)
  if (currentUser == null) {
    redirect('/login')
  } else {
    const client = getRoutinesAPI(currentUser)
    if (flows == null) {
      client.listWorkflows().then((response) => {
        setFlows(response);

      });
    }
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-semibold">Routines</h1>
      <div className="flex flex-col space-y-4">
        {flows?.map((flow) => {
          return (
            <div key={flow.flowId} className="flex flex-col space-y-2 bg-white p-4 rounded-md shadow-md">

              <h2 className="text-lg font-semibold">{flow.name}</h2>
            </div>
          );
        })}
      </div>

    </main>
  );


}
