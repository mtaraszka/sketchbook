import axios from "axios";
import { Formik, Form } from "formik";
import { useContext } from "react";
import { singin } from "../utils";
import { UserContext } from "../utils/context/user/context";

const onSubmit2 = () => {
    axios.get('http://localhost:4200/hiddencontent').then(res => {
        console.log(res.data)

        console.log('successfull')
    }).catch(() => console.log('unsuccessfull.'))

}

const LoginPage = () => {
    const user = useContext(UserContext);
    console.log(user);

    const initialValues = {
        email: 'test@test.pl',
        password: 'password',
    }

    return (
        <div>
            <h1>Welcome to login page.</h1>

            <Formik initialValues={initialValues} onSubmit={({email, password}) => singin(email, password)}>
                <Form>
                    <button type="submit">Login</button>
                </Form>
            </Formik>

            <Formik initialValues={{}} onSubmit={onSubmit2}>
                <Form>
                    <button type="submit">hiddencontent</button>
                </Form>
            </Formik>

        </div>
    )
}

export default LoginPage;
