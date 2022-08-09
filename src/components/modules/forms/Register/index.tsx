import { Formik, Form, Field } from "formik";
import { useRegistration } from "components/modules/forms/Register/useRegistration";

export const RegisterForm = () => {
    const { onSubmit, initialRegistrationValues } = useRegistration();

    return (
        <Formik initialValues={initialRegistrationValues} onSubmit={onSubmit}>
            <Form>
                <Field type={'text'} name={'name'} placeholder={'Name'} />
                <Field type={'email'} name={'email'} placeholder={'Email'} />
                <Field type={'password'} name={'password'} />
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}
