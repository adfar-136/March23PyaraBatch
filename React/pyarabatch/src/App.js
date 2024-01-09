import React, { useEffect, useRef } from 'react'
// import References from './Components/References'
const ForwardComponent = React.forwardRef((props,ref)=>{
  console.log(ref)
  return (
    <div ref={ref}>
     <h1>Adfar Rashidd</h1>
    </div>
  )
})
export default function App() {
  const customRef = useRef();
  useEffect(()=>{
    if(customRef.current){
      customRef.current.innerHTML="Adfarrrrrrrr"
    }
  })
  return (
   <>
    <ForwardComponent name="Adfar" age="35" ref={customRef}/>
    {/* <References/> */}
   </> 
  )
}
