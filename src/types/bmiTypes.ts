export type BMIFormValuesType = {
    weight: number;
    height: number;
    name: string;
    gender: string;
}

export type genderType = { title: string, id: number }

export type BMIScoreValueType = { min: number, max: number, title: BMIWeightTitleType }

export type BMIWeightTitleType = 'UnderWeight' | 'Normal' | 'OverWeight';