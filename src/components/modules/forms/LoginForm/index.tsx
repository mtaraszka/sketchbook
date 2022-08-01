import { Formik, Form } from "formik";
import { useContext } from "react";

import { singin } from "services/signin";
import { UserContext } from "store/user/context";
import { initialValues } from "./login.constants";

interface LoginValues {
    email: string,
    password: string
}

export const LoginForm = () => {
    const { setUser } = useContext(UserContext);

    const onSubmit = ({ email, password }: LoginValues) => {
        singin(email, password).then(user => setUser(user))
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}
