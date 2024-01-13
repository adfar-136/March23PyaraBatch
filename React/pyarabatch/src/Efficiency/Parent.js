import React, { useState } from 'react'
import Child from './Child'
function Parent() {
    const [count,setCount] = useState(0)
  return (
    <div>
        <h1>Parent element</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(c=>c+1)}>Increment count</button>
        <Child/>
    </div>
  )
}
export default React.memo(Parent);
