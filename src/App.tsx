import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import './App.scss';
import BMIForm from './organisms/BMIForm';
import Form, { formProps } from './templates/form';
import { BMIFormValuesType } from './types/bmiTypes';
import { BMIFormInitialValues, BMIFormValidationSchema } from './utils/bmiUtils';

function App() {
    
    const [showBMIScoreComponent, setShowBMIScoreComponent] = useState(false);

    const submitHandler: formProps<BMIFormValuesType>['onSubmit'] = (value) => setShowBMIScoreComponent(true)

    return (
        <div className="App">
            <Form onSubmit={submitHandler} useFormProps={{
                resolver: yupResolver(BMIFormValidationSchema),
                mode: 'onTouched',
                defaultValues: BMIFormInitialValues,
            }}>
                <BMIForm formIsValid={showBMIScoreComponent} />
            </Form>
        </div>
    );
}

export default App;
