import axios from "axios";
import { deleteItemFromLocalStorage } from "./localStorageOperations";

export const deleteAuthToken = () => {
    deleteItemFromLocalStorage('token')
    delete axios.defaults.headers.common["Authorization"];
}
