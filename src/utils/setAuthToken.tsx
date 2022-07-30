import axios from 'axios';

export const setAuthToken = (token: string) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
} 