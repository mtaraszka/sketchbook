import axios from "axios";

export const deleteAuthToken = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common["Authorization"];
}
