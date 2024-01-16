import { useState } from "react"

const useList = ()=>{
    const [list,setList] = useState(["item1","item2","item3","item4"]);
    const push=(value)=>{
        const newList = list.concat(value);
        setList(newList)
    }
    const pull=(index)=>{
       const newList = list.filter((item,itemIndex)=>{
        return index !== itemIndex;
       })
       setList(newList);
    }
    return {
        list:list,
        push:push,
        pull:pull
    }
}
export default useList;