import React, { useEffect, useState } from "react";
import { setAuthToken } from "../../functions/setAuthToken";
import { singin } from "../../functions/singin";
import { UserContext } from "./context";
import { User } from "./interface";

export const LoginProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const value = { user, setUser };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setAuthToken(token);
            singin().then((user) => setUser(user));
        };
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
