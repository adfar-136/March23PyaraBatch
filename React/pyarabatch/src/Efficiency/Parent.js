import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'
function Parent() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState(0);
    const sum = useCallback(()=>{
      console.log(name)
      return name;
    },[])
  return (
    <div>
        <h1>Parent element</h1>
        <h3>{sum()}</h3>
        <h3>{count}</h3>
        <button onClick={() => setCount(c=>c+1)}>Increment count</button>
        <button onClick={() => setName(c=>c+1)}>Increment Name</button>
        <Child sum={sum} name={name}/>
    </div>
  )
}
export default Parent;
