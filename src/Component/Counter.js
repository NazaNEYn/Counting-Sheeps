import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [sheep, setSheep] = useState('🐑')
  const [number, setNumber] = useState(1)

  // const add = () => {
  //   setSheep(sheep + '🐑')
  // }

  const reset = () => {
    setSheep('🐑')
    setNumber(1)
  }

  const add = () => {
    setNumber(number + 1)
    setSheep(sheep + '🐑')
  }

  return (
    <div className="container">
      <div className="counter-app">
        <p className="text">Counting Sheeps</p>
        <h2>{number}</h2>
        <p className="number">{sheep}</p>
        <div className="count">
          <button onClick={add} className="up">
            +
          </button>
        </div>
        <button onClick={reset} className="reset">
          Reset
        </button>
      </div>
    </div>
  )
}

export default Counter
