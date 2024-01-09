import React, { useRef } from 'react'

export default function References() {
    const name = useRef();
    const password = useRef();
    const submitHandler=(e)=>{
      e.preventDefault();
      console.log(name.current.value,password.current.value)
    }
  return (
    <div>
        <h1>Adfar</h1>
        <form onSubmit={submitHandler}>
            <input type="name" placeholder='enter name' ref={name}/><br /><br />
            <input type="password" ref={password}/><br /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
