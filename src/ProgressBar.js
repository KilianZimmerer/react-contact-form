import React from 'react'
import "./style.css"

export default function ProgressBar({ state, steps }) {

    function drawCircle(s) {
        var cssName = "step"
        if (s <= state["page"]) {
            cssName += " finish"
        }
        return (
            <span className={cssName}></span>
        )
    }

    return (
        <div className="text-center mt-5">
            {steps.map((s, index) => drawCircle(index))}
        </div>
    )
}
