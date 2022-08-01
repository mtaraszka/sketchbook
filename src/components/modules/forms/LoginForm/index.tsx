import { Formik, Form } from "formik";
import { useContext } from "react";
import { singin } from "../../../../api/signin";
import { UserContext } from "../../../../store/user/context";

interface LoginValues {
    email: string,
    password: string
}

const LoginForm = () => {
    const { setUser } = useContext(UserContext);

    const initialValues = {
        email: 'test@test.pl',
        password: 'password',
    }

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

export default LoginForm;
