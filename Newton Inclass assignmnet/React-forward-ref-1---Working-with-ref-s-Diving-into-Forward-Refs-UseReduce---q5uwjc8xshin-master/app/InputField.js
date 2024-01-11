'use client'
import React ,{useRef,useState,useEffect} from 'react';
const InputField=React.forwardRef((props,ref)=>{
    
    return(
    <div>
      <input id="input" type="text"  ref={ref}/>
    </div>
    )
    })
export default InputField;