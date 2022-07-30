import React, { useEffect, useState } from "react";
import { setAuthToken, singin } from "../../setAuthToken";
import { UserContext } from "./context";
import { User } from "./interface";

export const LoginProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User>({ user: {}, loggedIn: false });
    const value = { user, setUser };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token !== 'undefined') {
            console.log('inside')
            setAuthToken(token);
            setUser(singin());
        };
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
