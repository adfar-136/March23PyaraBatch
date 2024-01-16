import React from 'react'
import useCounter from './useCounter'
function Counter() {
    const {count,increment,decrement} = useCounter()
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>increment()}>Increment</button>
      <button onClick={()=>decrement()}>Decrement</button>
    </div>
  )
}

export default Counter