import React from "react";
import { UserContextInterface } from "./interface";

export const UserContext = React.createContext<UserContextInterface>({
    user: {
        data: {
            id: '',
            name: '',
            email: '',
        },
        loggedIn: false
    },
    setUser: () => { }
});
