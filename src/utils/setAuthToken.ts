import axios from 'axios';
import { setItemInLocalStorage } from './localStorageOperations';

export const setAuthToken = (token: string) => {
    setItemInLocalStorage('token', token);
    axios.defaults.headers.common["Authorization"] = `JWT ${token}`;
}
