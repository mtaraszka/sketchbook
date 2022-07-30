import axios from 'axios';

export const setAuthToken = (token: string | null) => {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
}

export const singin = (email?: string, password?: string) => {
    let response = {
        user: {},
        loggedIn: false
    };

    axios.post('http://localhost:4200/login', {
        email,
        password
    }).then(res => {
        const { token } = res.data;
        if (token) {
            localStorage.setItem('token', token);
            setAuthToken(token);
        }

        response.user = res.data;
        response.loggedIn = true;
    }).catch((err) => console.log(err))

    return response;
}

export const logout = () => {
    delete axios.defaults.headers.common["Authorization"];
}