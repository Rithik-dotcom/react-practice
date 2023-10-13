import React, { useState } from 'react'

const Formone = () => {
  const [initialState, updatedState] = useState("Hello Netflix")

  // function handleChange(e) {

  //   updatedState(e.target.value)

  // }
  function handleClick(e) {
    e.preventDefault()
    console.log(e.target[0].value)
    updatedState(e.target[0].value)
  }

  return (
    <div>
      <form onSubmit={handleClick} >
        <p>{initialState}</p>
        <input  placeholder='what is your name' type='text' name='Fname' />
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Formone