import { Dispatch, SetStateAction } from "react"
import { User } from "../../types/user/interfaces"

export interface UserContextInterface {
    user: User | null,
    setUser: Dispatch<SetStateAction<User | null>>,
}
