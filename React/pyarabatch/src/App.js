import React, { useEffect } from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

function App() {
  const [counterOne,setCounterOne] = useState(0);
  const [counterTwo,setCounterTwo] = useState(0);
  const handleCounterOne =()=>{
    setCounterOne(counterOne + 1);
    setCounterTwo(counterTwo-2);
  }
  const handleCounterTwo =()=>{
    setCounterTwo(counterTwo + 5 )
  }
  useEffect(()=>{

  },[])
  const even = useMemo(()=>{
    let x = 0;
    while (x < 2000000000) {x++};
    return counterOne % 2 === 0;
    // return counterOne * counterOne * counterOne;
  },[counterOne]);
  return (
    <div>
       <button onClick={()=>handleCounterOne()}>CounterOne - {counterOne}</button>
       <h1>{even?"Even":"Odd"}</h1>
       <button onClick={()=>handleCounterTwo()}>CounterTwo = {counterTwo}</button>
    </div>
  )
}

export default App