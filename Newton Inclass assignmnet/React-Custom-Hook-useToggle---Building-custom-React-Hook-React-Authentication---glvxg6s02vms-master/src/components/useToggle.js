import React,{useCallback,useState} from 'react'

const useToggle = () => {
   const [isTextChanged,setIsTextChanged] = useState(false);
   const toggle =useCallback( ()=>setIsTextChanged(!isTextChanged),[])
  return [isTextChanged,toggle]
  }
  export default useToggle;
