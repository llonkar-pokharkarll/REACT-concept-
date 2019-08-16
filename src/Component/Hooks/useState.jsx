import React, { useState } from 'react'

export default () => {
  const [state, setState] = useState({ age: 10, siblings: 1 });
  const handleClick = (val) => setState(
    {

      ...state,
      [val]: state[val] + 1,
    },
    console.log(val)
  )
  const { age, siblings } = state
  return (
    <div >
      My age is {age}
      <br /><br />
      <div>
        <button onClick={handleClick.bind(null, 'age')} >Increase Age</button>
      </div><br />
      <br />

      I have {siblings} siblings
      <br /><br />
      <div>
        <button onClick={handleClick.bind(null, 'siblings')} >More Siblings</button>
      </div>
    </div>
  )
}

