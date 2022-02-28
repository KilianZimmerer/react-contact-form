import React from 'react'

export default function Buttons({ state, maxStep, setState }) {
  function nextForm() {
    return setState(
      {
        ...state,
        page: state["page"] + 1
      }
    )
  }

  function previousForm() {
    return setState(
      {
        ...state,
        page: state["page"] - 1
      }
    )
  }

  function sendData() {
    return setState(
      {
        ...state,
        page: 0
      }
    )
  }

  if (state["page"] === 0) {
    return (
      <div className="mt-3" style={{ "text-align": "right" }}>
        <button type="button" class="btn btn button m-1" onClick={() => nextForm()}>Weiter</button>
      </div>
    )
  }
  else if (state["page"] < maxStep) {
    return (
      <div className="mt-3" style={{ "text-align": "right" }}>
        <button type="button" class="btn btn button" onClick={() => previousForm()}>Zurück</button>
        <button type="button" class="btn btn button m-1" onClick={() => nextForm()}>Weiter</button>
      </div>
    )
  }
  else if (state["page"] === maxStep) {
    return (
      <div className="mt-3" style={{ "text-align": "right" }}>
        <button type="button" class="btn btn button" onClick={() => previousForm()}>Zurück</button>
        <button type="button" class="btn btn button m-1" onClick={() => sendData()}>Absenden</button>
      </div>
    )
  }
}
