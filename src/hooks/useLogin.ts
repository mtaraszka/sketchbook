import { initialLoginValues } from "components/modules/forms/LoginForm/login.constants";
import { useContext } from "react";
import { singin } from "services/signin";
import { UserContext } from "store/user/context";
import { SigninInterface } from "types/user/interfaces";

export const useLogin = () => {
    const { setUser } = useContext(UserContext);

    const onSubmit = ({ email, password }: SigninInterface) => {
        singin(email, password).then(user => setUser(user));
    };

    return { onSubmit, initialLoginValues };
};
