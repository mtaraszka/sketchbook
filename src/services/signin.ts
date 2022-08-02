import axios from "axios";

import { deleteAuthToken } from "utils/deleteAuthToken";
import { setAuthToken } from "utils/setAuthToken";

export const singin = async (email: string, password: string) => {
    console.log(email, password)

    return axios.post('/login', {
        email,
        password
    }).then(res => {
        setAuthToken(res.data.token);
        return {
            data: res.data.user,
            loggedIn: true,
        }
    }).catch(() => {
        deleteAuthToken();
        return null;
    });
};
