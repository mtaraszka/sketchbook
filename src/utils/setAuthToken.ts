import axios from 'axios';
import { setDataInLocalStorage } from './localStorageOperations';

export const setAuthToken = (token: string) => {
    setDataInLocalStorage('token', token);
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
}
