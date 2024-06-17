
import { Configuration, DefaultApi } from "./client";
import { User } from "firebase/auth";




function getRoutinesAPI(current_user: User): DefaultApi {

    const config = new Configuration({
        accessToken: async () => { return "Bearer " + await current_user.getIdToken() },
        basePath: process.env.ROUTINES_HOST
    })
    return new DefaultApi(config);
}


export default getRoutinesAPI;
