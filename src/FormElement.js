import React from 'react'
import ChecklistElement from './ChecklistElement'
import TextElement from './TextElement'

export default function FormElement({ element }) {
    if (element.type === "text" || element.type === "email") {
        return (
            <div class="form-group mt-4">
                <div class="row">
                    <TextElement element={element} />
                </div>
            </div>
        )
    }
    else if (element.type === "checklist") {
        return <ChecklistElement element={element} />
    }
    else if (element.type === "select") {
        return (
            <select class="custom-select mt-4">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        )
    }
    else if (element.type === "content") {
        return (
            <div>Das hier ist deine Eingabe</div>
        )
    }
}
