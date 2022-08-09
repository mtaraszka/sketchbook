import axios from "axios";

export const singup = async (name: string, email: string, password: string) => {
    return axios.post('/register', {
        name,
        email,
        password
    });
};
