import axios from "axios";

import { deleteAuthToken } from "utils/deleteAuthToken";
import { setAuthToken } from "utils/setAuthToken";

export const singin = async (email: string, password: string) => {
    return axios.post('http://localhost:4200/login', {
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
