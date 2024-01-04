"use client"
import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
