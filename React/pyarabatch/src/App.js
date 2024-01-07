import React from 'react'
import Modal from './Modal'

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div style={{border:"2px solid red"}}>
      <h1>Hello Adfar</h1>
      <div id='aryan'></div>
      <button onClick={()=>setIsOpen(true)}>Show Modal</button>
      <Modal isOpen={isOpen}/>
    </div>
  )
}
