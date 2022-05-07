import { BMIFormValuesType, BMIScoreValueType, genderType } from "../types/bmiTypes";
import * as yup from 'yup';

export const BMIFormInitialValues: BMIFormValuesType = {
    weight: 0,
    height: 0,
    name: '',
    gender: 'mr'
}

// we separate petsGender because we it has value all the time. the default of that is mr and after changing, we will update the state
export const BMIFormValidationSchema: yup.SchemaOf<Omit<BMIFormValuesType, 'gender'>> = yup.object({
    weight: yup.number()
        .required('this field is required')
        .min(10, 'the minimum of weight is 10g')
        .max(
            200000,
            'the maximum of weight is 200000g (200kg)',
        ),
    height: yup.number()
        .required('this field is required')
        .min(1, 'the minimum of height is 1cm')
        .max(
            400,
            'the maximum of height is 400cm(4m)',
        ),
    name: yup.string()
        .required(`this field is required`)
        .min(2, 'the pets name should has at least 2 characters'),
})

export const petsGender: Array<genderType> = [
    { title: 'mr', id: 1 },
    { title: 'ms', id: 2 }
]

export const BMIScoreOptionsValue: Array<BMIScoreValueType> = [
    { min: 0, max: 30, title: 'UnderWeight' },
    { min: 30, max: 90, title: 'Normal' },
    { min: 90, max: 120, title: 'OverWeight' }
]