/* eslint-disable @typescript-eslint/no-explicit-any */
// in this template we should use 'any' type for 'objectType' because the value of any parameters in object has any type.

import { FC, ReactNode } from 'react';
import { FormProvider, SubmitHandler, useForm, UseFormProps } from 'react-hook-form';

type ObjectType = Record<string, any>

export type formProps<T extends ObjectType> = { onSubmit: SubmitHandler<T>; useFormProps: UseFormProps<T, object> };

function Form<T extends ObjectType>(
    { onSubmit, children, useFormProps }: Parameters<FC<formProps<T> & { children: ReactNode }>>[0]
): ReturnType<FC> {
    const methods = useForm(useFormProps);

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit as SubmitHandler<ObjectType>)}>{children}</form>
        </FormProvider>
    );
}

export default Form;