import axios from 'axios';

export const setAuthToken = (token: string | null) => {
    if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    }
}
