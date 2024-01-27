import React, { useEffect, useRef, useState } from 'react'
import { useMusic } from "../provider/MusicProvider"
import {useUser} from "../provider/UserProvider"
import { useNavigate } from 'react-router-dom'
import {ReactComponent as PauseIcon} from "../../assets/pause.svg"
import {ReactComponent as PlayIcon} from "../../assets/play.svg"
import {FaRegHeart,FaHeart} from "react-icons/fa"
export default function MusicPlayer() {
  const {selectedMusic,condition} = useMusic()
 const {user} = useUser()
 const audioRef = useRef()
 const [isPlaying,setIsPlaying] = useState(true)
 const [start,setStart] = useState("0");
 const [end,setEnd] = useState("0");
 const [addedToWatchList,setAddedToWatchList] = useState(false)
 const navigate = useNavigate();
  const {thumbnail,title,artist,audio_url,_id} = selectedMusic
 const artistList = artist && artist.map((item)=>item.name).join(" & ")

  const getTime = (duration)=>{
    const endTime = Math.ceil(duration);
    let min =Math.floor(endTime /60 ) ;
    let sec = endTime % 60;
    sec =sec < 10? `0${sec}`:`${sec}`
    return `${min}:${sec}`
  }
  useEffect(()=>{
    if(audioRef.current){
      const endTime = getTime(audioRef.current.duration);
      setEnd(endTime);
      const handleTimeUpdate =()=>{
        const currentTime = getTime(audioRef.current.currentTime)
        setStart(currentTime)
      }
      audioRef.current.addEventListener("timeupdate",handleTimeUpdate)
      if(isPlaying){
        audioRef.current.play()
      } else{
        audioRef.current.pause()
      }
    }
  },[isPlaying,audioRef])
  const handleVolumeChange =(e)=>{
    audioRef.current.volume = e.target.value/100;
  }
  const addToFavorite =async (songId,token) =>{
     return fetch("https://academics.newtonschool.co/api/v1/music/favorites/like",{
         method:"PATCH",
         headers:{
          Authorization :`Bearer ${token}`,
          projectId:"8nbih316dv01",
          "Content-Type":"application/json"
         },
         body:JSON.stringify({songId})
        }
     ).then((response)=>{
      if(!response.ok){
        throw new Error("Failed to add to watchlist")
      } else {
        return response.json()
      }
     })
  }
  const handleAddToFavorites=()=>{
     addToFavorite(_id,user).then((data)=>{
      setAddedToWatchList(true)
     })
  }
  return (
    <>
      {condition && <section className="music-player">
      <img src={thumbnail} alt={title} width="50" height="50" />
      {user ?(
        <>
         <div className="song-info">
            <div>{title}</div>
            <div className="artist-list">
              {artistList}
            </div>
            </div>
            <button onClick={()=>setIsPlaying(!isPlaying)} className='play-pause'>
              {isPlaying ? <PauseIcon/>:<PlayIcon/>}
            </button>
            <div>{start}</div>
         <div>{end}</div>
         <input type="range" max={100} 
         onChange={handleVolumeChange}
         value={audioRef.current ? audioRef.current.volume*100 : 0}/>
         <audio src={audio_url} ref={audioRef}/>
         <div className="heart-icon" onClick={handleAddToFavorites}>
         {addedToWatchList ? <FaHeart/> : <FaRegHeart/>}
         </div>
         </>
        
      ):(
        <>
         <p>Please signUp First</p>
         <button onClick={()=>navigate("/signup")}>Signup here</button>
        </>
      )}
    </section>}
    </>
  )
}
