import { Controller, useFormContext, useWatch } from "react-hook-form";
import { FC, HTMLInputTypeAttribute } from "react";
import { flatten } from 'flat';

type formFieldProps = {
    label: string
    id: string;
    name: string;
    valueType: HTMLInputTypeAttribute;
}

const FormField: FC<formFieldProps> = ({ label, id, name, valueType }) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    // flatten has an issue for using params of error object; we know that this is safe and always we have message param.
    // @ts-expect-error It's already type-safe
    const error = flatten(errors)[`${name}.message`];

    const value = useWatch({ control, name });

    return (
        <Controller
            render={({ field }) => (
                <>
                    <label htmlFor={id}> {label} </label>
                    <input type={valueType} onChange={field.onChange} name={name} id={id} value={value} />
                    <p className="error-message">{error}</p>
                </>
            )}
            control={control}
            name={name}
        />
    )
}

export default FormField;