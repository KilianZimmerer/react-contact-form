import React from 'react'
import FormStep from './FormStep'

export default function Step({ state, step }) {
  return (
    <div>
      <h4>{state["page"] + 1}. {step.title} </h4>
      <FormStep state={state} step={step} />
    </div>
  )
}

