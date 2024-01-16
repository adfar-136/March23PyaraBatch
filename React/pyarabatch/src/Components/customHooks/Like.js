import React from 'react'
import useCounter from './useCounter'

function Like() {
    const {count,increment} = useCounter();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>increment()}>Like</button>
    </div>
  )
}

export default Like