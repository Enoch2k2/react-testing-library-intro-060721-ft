import React, { useState } from 'react'

const incrementButton = () => {
  const [ count, setCount ] = useState(0);
  const handleClick = () => {
    setCount( count + 1 )
  }

  return (
    <div>
      <h1>Increment The Counter</h1>
      <button onClick={ handleClick }>Click Me!</button>
      <p>{ count }</p>
    </div>
  )
}

export default incrementButton
