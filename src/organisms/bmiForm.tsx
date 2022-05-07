import { ChangeEventHandler, FC, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import BMIScoreVisualization from "../molecules/BMIScoreVisualization";
import FormField from "../molecules/FormField";
import { BMIFormValuesType } from "../types/bmiTypes";
import { petsGender } from "../utils/bmiUtils";
import './BMIForm.scss';

type bmiFormProps = {
    formIsValid: boolean;
}

const BMIForm: FC<bmiFormProps> = ({ formIsValid }) => {
    const {
        watch,
        setValue
    } = useFormContext<BMIFormValuesType>();

    const petName = watch('name');
    const petWeight = watch('weight');
    const petHeight = watch('height');
    const petGender = watch('gender');

    const bmiScore = useMemo((
        () => ((petWeight / Math.pow(petHeight, 2)) * 10).toFixed(2)
    ), [petWeight, petHeight])

    const bmiScoreIsValid = useMemo(() => (
        Number(bmiScore) > 0 && Number(bmiScore) <= 120
    ), [bmiScore])

    const selectGenderHandler: ChangeEventHandler<HTMLSelectElement> = (event) => {
        setValue('gender', event.target.value)
    }

    return (
        <div className="bmi-form">
            <h4 className="bmi-form_title"> please enter the information of your pet </h4>
            <div className="bmi-form_gender">
                <span> gender: </span>
                <select
                    name="gender"
                    onChange={selectGenderHandler}
                    className="bmi-form_gender__select"
                    id="pet-form-gender">
                    {petsGender.map(gender => (
                        <option key={gender.id}> {gender.title} </option>
                    ))}
                </select>
            </div>
            <FormField
                id='pet-form-name'
                label='name'
                name='name'
                valueType='string'
            />
            <FormField
                id='pet-form-weight'
                label='weight(gr)'
                name='weight'
                valueType='number'
            />
            <FormField
                id='pet-form-height'
                label='height(cm)'
                name='height'
                valueType='number'
            />
            <button className="bmi-form_button" type='submit'> submit </button>
            {formIsValid && <>
                <p> {`${petGender} ${petName}'s BMI is:`} </p>
                <p className="bmi-form_bmi-score"> {bmiScore} </p>
                {!bmiScoreIsValid && <p className="error-message"> BMI score isn't valid, please check your entries </p>}
                {bmiScoreIsValid && <BMIScoreVisualization score={Number(bmiScore)} />}
            </>}
        </div>
    )
}

export default BMIForm;