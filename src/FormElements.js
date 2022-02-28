import React from 'react'
import FormElement from './FormElement'

export default function FormElements({ elements }) {
    return (
        elements.map(element => {
            return <FormElement element={element} />
        })
    )
}
