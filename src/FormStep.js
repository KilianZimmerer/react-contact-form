import { React } from 'react'
import FormElements from './FormElements'
import ReviewStep from './ReviewStep'

export default function FormStep({ state, step }) {
  if (step.type === "ReviewStep") {
    return (
      <ReviewStep />
    )
  }
  return (
    <form>
      <FormElements elements={step.elements} />
    </form>
  )
}

