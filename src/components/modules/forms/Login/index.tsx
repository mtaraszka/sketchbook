import { Formik, Form, Field } from "formik";
import { useLogin } from "hooks/useLogin";

export const LoginForm = () => {
    const { onSubmit, initialLoginValues } = useLogin();

    return (
        <Formik initialValues={initialLoginValues} onSubmit={onSubmit}>
            <Form>
                <Field type={'email'} name={'email'} placeholder={'Email'} />
                <Field type={'password'} name={'password'} />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}
