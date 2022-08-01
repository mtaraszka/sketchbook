import { UserData } from "./types";

export interface User {
    data: UserData,
    loggedIn: boolean
}

export interface SignupInterface {
    email: string,
    password: string
}