import { Formik, Form, Field } from "formik";
import { initialPublishAssetsValues } from "./publishAssets.constants";
import { useAssets } from "./useAssets";

export const PublishAssetsForm = () => {
    const { publishAsset, handleFileLoad } = useAssets();

    return (
        <Formik initialValues={initialPublishAssetsValues} onSubmit={publishAsset}>
            {({ setFieldValue }) => (
                <Form>
                    <Field type={'text'} name={'title'} placeholder={'Title'} />
                    <input type={'file'} name={'file'} onChange={e => handleFileLoad(e, setFieldValue)} />
                    <button type="submit">Send files</button>
                </Form>
            )}
        </Formik>
    )
}
