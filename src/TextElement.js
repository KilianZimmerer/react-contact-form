import React from 'react'
import TextField from './TextField'

export default function TextElement({ element }) {
    if (element.placeholder.length === 1) {
        return (
            <TextField placeholder={element.placeholder[0]} />
        )
    }
    else if (element.placeholder.length > 1) {
        return (
            element.placeholder.map(placeholder => {
                return <TextField placeholder={placeholder} />
            })
        )
    }
}
