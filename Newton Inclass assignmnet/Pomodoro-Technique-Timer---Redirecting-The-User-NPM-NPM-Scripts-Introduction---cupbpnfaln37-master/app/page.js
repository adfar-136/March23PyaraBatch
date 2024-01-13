"use client"

import { useEffect, useState } from "react";

const App = () => {
  const [ workDuration,setWorkDuration] = useState(25);
  const [ breakDuration,setBreatDuration] = useState(5);
  const [worksecond,setWorkSecond] = useState(1500);
  const [breaksecond,setBreakSecond] = useState(300);
  const [type,setType] = useState("work");
  const [resetFlag,setResetFlag]= useState(true);
  const [flag,setFlag] = useState();

  useEffect(()=>{
    if(flag && type === "work"){
      if(worksecond > 0 ){
        const timer = setTimeout(()=>setWorkSecond(worksecond-1),1000)
        return ()=>clearTimeout(timer)
      }
      if(worksecond === 0){
        alert('work duration is over');
        setType("break");
        setWorkSecond(workDuration * 60);
      }
    }
    if(flag && type === "break"){
      if(breaksecond > 0 ){
        const timer = setTimeout(()=>setBreakSecond(breaksecond-1),1000)
        return ()=>clearTimeout(timer)
      }
      if(breaksecond === 0){
        alert('break duration is over');
        setType("work");
        setBreakSecond(breakDuration * 60);
      }
    }
  },[worksecond,breaksecond,breakDuration,workDuration,type,flag])
  const convertToStandardFormat=(sec)=>{
    let m = parseInt(sec/60).toString()
    let s = parseInt(sec%60).toString();
    if(m.length === 1) m = "0" + m ;
    if(s.length === 1) s = "0" + s;
    return m+":"+s
  }
  const validateData =(data)=>{
    if(!isNaN(data) && parseInt(data) >= 0){
      return parseInt(data);
    }
    else {
      return ""
    }
  }
  const reset =()=>{
    setResetFlag(true);
    setFlag(false);
    setType("work");
    setWorkDuration(25)
    setBreatDuration(5);
    setBreakSecond(300);
    setWorkSecond(1500);
  }
  const setDuration =(e)=>{
    e.preventDefault();
    setResetFlag(false);
    setType("work");
    setWorkSecond(workDuration*60);
    setBreakSecond(breakDuration*60);
  }
  return (
    <div id="main" style={{textAlign:"center"}}>
       <div className="clock">
          <h1>{(type==="work")?convertToStandardFormat(worksecond):convertToStandardFormat(breaksecond)}</h1>
          <h3>{(type==="work")?"work":"Break"}-Time</h3>
       </div>
       <div>
        <button data-testid='start-btn' onClick={()=>{setFlag(true); setResetFlag(false)}} disabled={flag}>Start</button>
        <button data-testid='stop-btn' onClick={()=>{setFlag(false); setResetFlag(false)}} disabled={!flag}>stop</button>
        <button data-testid='reset-btn' onClick={()=>{reset()}} disabled={resetFlag}>reset</button>
       </div>
       <div>
        <form onSubmit={setDuration}>
          <input type="number" data-testid='work-duration' placeholder="work duration" required 
          value={workDuration} 
          disabled={flag} onChange={(e)=>setWorkDuration(validateData(e.target.value))}/>
          <input type="number" data-testid='break-duration' placeholder="break duration" required 
          value={breakDuration} disabled={flag}
          onChange={(e)=>{setBreatDuration(validateData(e.target.value))}}/>
          <button data-testid='set-btn' disabled={flag}>set</button>
        </form>
       </div>
    </div>
  )
}


export default App;