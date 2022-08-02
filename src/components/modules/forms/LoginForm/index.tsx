import { Formik, Form } from "formik";
import { useLogin } from "hooks/useLogin";

export const LoginForm = () => {
    const { onSubmit, initialValues } = useLogin();

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <Form>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}
