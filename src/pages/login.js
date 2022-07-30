import axios from "axios";
import { Formik, Form } from "formik";
import { setAuthToken } from "../utils";

const onSubmit = (login, password) => {
    axios.post('http://localhost:4200/login', {
        email: 'test@test.pl',
        password: 'password'
    }).then(res => {
        const token = res.data.token;

        localStorage.setItem('token', token);

        setAuthToken(token);

        console.log('Login successfull')
    }).catch(() => console.log('Login unsuccessfull.'))

}

const LoginPage = () => {
    const initialValues = {
        email: '',
        password: '',
    }

    return (
        <div>
            <h1>Welcome to login page.</h1>

            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default LoginPage;
