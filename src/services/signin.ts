import axios from "axios";

import { deleteAuthToken } from "utils/deleteAuthToken";
import { setAuthToken } from "utils/setAuthToken";

export const singin = async (email: string, password: string) => {
    return axios.post('/login', {
        email,
        password
    }).then(({ data }) => {
        setAuthToken(data.token);
        return {
            data: data.user,
            loggedIn: true,
        }
    }).catch(() => {
        deleteAuthToken();
        return null;
    });
};
