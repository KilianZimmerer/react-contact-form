import { React, useState } from 'react'
import Buttons from './Buttons'
import Step from './Step'
import ProgressBar from './ProgressBar'
import "./style.css"


export default function MultiStepForm({ steps }) {
    const [state, setState] = useState(
        {
            page: 0
        }
    )
    return (
        <div className="App">
            <div className="container-md pt-3">
                <div className="shadow-lg p-5">
                    <Step state={state} step={steps[state["page"]]} />
                    <Buttons state={state} maxStep={steps.length - 1} setState={setState} />
                    <ProgressBar state={state} steps={steps} />
                </div>
            </div>
        </div>
    )
}
