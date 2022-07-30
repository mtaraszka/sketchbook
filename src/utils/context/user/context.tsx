import React, { Dispatch, SetStateAction } from "react";
import { User } from "./interface";

interface UserContextInterface {
    user: User,
    setUser: Dispatch<SetStateAction<User>>,
}

export const UserContext = React.createContext<UserContextInterface | null>(null);
