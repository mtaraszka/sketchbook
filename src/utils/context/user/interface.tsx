import { Dispatch, SetStateAction } from "react"
import { UsersData } from "./types"

export interface UserContextInterface {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
}

export interface User {
    data: UsersData,
    loggedIn: boolean
}
