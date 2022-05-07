import { FC, useMemo } from "react";
import { BMIScoreOptionsValue } from "../utils/bmiUtils";
import './BMIScoreVisualization.scss'

type BMIScoreVisualization = {
    score: number
}

const BMIScoreVisualization: FC<BMIScoreVisualization> = ({ score }) => {

    const arrowLeftDistance = useMemo(() => {
        const scoreContainer = document.getElementsByClassName('score-container')[0]
        
        const baseWidth = scoreContainer?.clientWidth;

        // this value is the percent of score at base on 120. because the max of value is that.
        // at the end of our return we decrease 10px because of scoreArrow element border width.
        return ((baseWidth * score) / 120) - 10
    }, [score])

    return (
        <div className="score-container">
            <div className="score-container__score-arrow" style={{ left: arrowLeftDistance || 0 }} />
            {BMIScoreOptionsValue.map(item => (
                // we know that title is unique. so we use it as key
                <div key={item.title} className="score-container__widget" >
                    <div className={`score-container__widget-${item.title} score-container__widget-badge`} />
                    <p className="score-container__widget-title"> { item.title } </p>
                </div>
            ))}
        </div>
    )
}

export default BMIScoreVisualization;