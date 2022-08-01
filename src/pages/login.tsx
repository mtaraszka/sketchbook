import { Formik, Form } from "formik";
import { useContext } from "react";
import { UserContext } from "../utils/context/user/context";
import { deleteAuthToken } from "../utils/functions/deleteAuthToken";
import { singin } from "../utils/functions/singin";

interface LoginValues {
    email: string,
    password: string
}

const LoginPage = () => {
    const { user, setUser } = useContext(UserContext);

    const initialValues = {
        email: 'test@test.pl',
        password: 'password',
    }

    const onSubmit = ({ email, password }: LoginValues) => {
        singin(email, password).then(user => setUser(user))
    }

    return (
        <div>
            <h1>Welcome to login page {user?.data.name}</h1>
            {!user ? (
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    <Form>
                        <button type="submit">Login</button>
                    </Form>
                </Formik>
            ) : (
                <button onClick={() => {
                    deleteAuthToken();
                    setUser(null);
                }}>
                    Logout
                </button>
            )}
        </div>
    )
}

export default LoginPage;
