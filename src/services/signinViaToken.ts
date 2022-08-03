import axios from "axios";

import { deleteAuthToken } from "utils/deleteAuthToken";
import { setAuthToken } from "utils/setAuthToken";

export const singinViaToken = async (token: string) => {
    setAuthToken(token);

    return axios.post('/login', {
    }).then(({ data }) => ({
        data: data.user,
        loggedIn: true,
    })).catch(() => {
        deleteAuthToken();
        return null;
    })
};
