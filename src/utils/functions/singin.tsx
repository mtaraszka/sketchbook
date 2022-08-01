import axios from "axios";

import { deleteAuthToken } from "./deleteAuthToken";
import { setAuthToken } from "./setAuthToken";

export const singin = async (email?: string, password?: string) => {
    return axios.post('http://localhost:4200/login', {
        email,
        password
    }).then(res => {
        const { token } = res.data;
        if (token) {
            setAuthToken(token);
        }

        return {
            data: res.data.user,
            loggedIn: true,
        }
    }).catch(() => {
        console.log('error while logging')
        deleteAuthToken();
        return null;
    })
}