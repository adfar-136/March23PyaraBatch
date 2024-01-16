import React, { useState } from 'react'
import useList from './useList'

function List() {
    const {list,push,pull} = useList();
    const [input,setInput] = useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        push(input);
        setInput("")
    }
  return (
    <div>
        <div>
            <form>
                <h1>Todo Application</h1>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button onClick={(e)=>handleSubmit(e)}>Add</button>
            </form>
        </div>
        {list.map((item,index)=>{
            return (
                <div key={index}>
                   <li>{item}</li> 
                   <button onClick={()=>pull(index)}>Remove</button>        
                 </div>
            )
        })}
    </div>
  )
}

export default List