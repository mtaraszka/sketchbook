import React, { useEffect, useState } from "react";

import { singinViaToken } from "services/signinViaToken";
import { User } from "types/user/interfaces";
import { UserContext } from "./context";

export const LoginProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const value = { user, setUser };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            singinViaToken(token).then((user) => setUser(user));
        };
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
