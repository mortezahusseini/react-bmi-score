import { yupResolver } from '@hookform/resolvers/yup';
import FormField from '../../molecules/FormField';
import { FC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import Form from './Form';

type formType = {
    simple_field: string;
    custom_onchange_field: number;
    username: string;
    password: string;
    confirm_password: string;
};

const validationSchema: yup.SchemaOf<formType> = yup.object({
    simple_field: yup.string().required().min(3).max(20),
    custom_onchange_field: yup.number().required().min(20).max(150),
    username: yup
        .string()
        .required()
        .min(4)
        .max(20)
        .matches(/[a-zA-z]/),
    password: yup.string().required().min(3).max(20),
    confirm_password: yup
        .string()
        .required()
        .min(3)
        .max(20)
        .oneOf([yup.ref('password'), null]),
});

const defaultValues: formType = { simple_field: '', custom_onchange_field: 0, username: '', password: '', confirm_password: '' };

const TestForm: FC<{ submit: SubmitHandler<formType> }> = ({ submit }) => (
    <Form onSubmit={(v) => submit(v)} useFormProps={{ resolver: yupResolver(validationSchema), mode: 'onTouched', defaultValues }}>
        {/* <FormField name="simple_field" label="simple_field" id="ss-simple-field" />
        <FormField
            name="custom_onchange_field"
            label="custom_onchange_field"
            id="ss-custom-onchange-field"
            type="tel"
            customOnChange={(v) => v.match(/\d+/g)?.join('') || ''}
        />
        <FormField name="username" label="username" id="ss-username" /> */}
    </Form>
);
export default TestForm;
