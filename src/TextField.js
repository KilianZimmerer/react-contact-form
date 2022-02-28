import React from 'react'

export default function TextField({ placeholder }) {
    return (
        <div class="col">
            <input type="text" class="form-control" placeholder={placeholder} required />
        </div>
    )
}
