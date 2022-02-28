import React from 'react'

export default function ChecklistElement({ element }) {
    if (element.placeholder.length === 1) {
        return (
            <div class="custom-control custom-checkbox mt-4">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">element.placeholder[0]</label>
            </div>
        )
    }
}
