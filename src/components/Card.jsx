import React from 'react'

const Card = (propsa) => {
  return (
    <div>
        <div className="card">
        <h1> {propsa.rithik}</h1>
        <img src={propsa.image} alt='none' />
        <p> {propsa.para} </p>
        </div>
        </div>
  )
}

export default Card