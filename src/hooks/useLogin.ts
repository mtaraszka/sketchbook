import { useContext } from "react";
import { singin } from "services/signin";
import { UserContext } from "store/user/context";
import { SignupInterface } from "types/user/interfaces";

export const useLogin = () => {
    const { setUser } = useContext(UserContext);

    const initialValues = {
        email: 'test@test.pl',
        password: 'password',
    };

    const onSubmit = ({ email, password }: SignupInterface) => {
        singin(email, password).then(user => setUser(user));
    };

    return { onSubmit, initialValues };
};
