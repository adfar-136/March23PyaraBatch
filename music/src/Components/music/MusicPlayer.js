import React, { useEffect, useRef, useState } from 'react'
import { useMusic } from "../provider/MusicProvider"
import {useUser} from "../provider/UserProvider"
import { useNavigate } from 'react-router-dom'
import {ReactComponent as PauseIcon} from "../../assets/pause.svg"
import {ReactComponent as PlayIcon} from "../../assets/play.svg"
import {FaRegHeart,FaHeart} from "react-icons/fa"
export default function MusicPlayer() {
  const {selectedMusic} = useMusic()
 const {user} = useUser()
 const audioRef = useRef()
 const [isPlaying,setIsPlaying] = useState(true)
 const [start,setStart] = useState("0");
 const [end,setEnd] = useState("0");
 const [addedToWatchList,setAddedToWatchList] = useState(false)
 const navigate = useNavigate();
  const {thumbnail,title,artist,audio_url,_id} = selectedMusic
  console.log(artist)
 const artistList = artist.map((item)=>item.name).join(" & ")

  const getTime = (duration)=>{
    const endTime = Math.ceil(duration);
    let min =Math.floor(endTime /60 ) ;
    let sec = endTime % 60;
    return `${min}:${sec}`
  }
  useEffect(()=>{
    if(audioRef.current){
      const endTime = getTime(audioRef.current.duration);
      setEnd(endTime);
      if(isPlaying){
        audioRef.current.play()
      } else{
        audioRef.current.pause()
      }
    }
  },[isPlaying,audioRef])
  return (
    <section className="music-player">
      <img src={thumbnail} alt={title} width="50" height="50" />
      {user ?(
         <div className="song-info">
            <div>{title}</div>
            <div className="artist-list">
              {artistList}
            </div>
            <button>
              {isPlaying ? <PauseIcon/>:<PlayIcon/>}
            </button>
            <div>{start}</div>
         <div>{end}</div>
         <input type="range" max={100} value={10}/>
         <audio src={audio_url} ref={audioRef}/>
         <div className="heart-icon">
         {addedToWatchList ? <FaHeart/> : <FaRegHeart/>}
         </div>
         </div>
      ):(
        <>
         <p>Please signUp First</p>
         <button onClick={()=>navigate("/signup")}>Signup here</button>
         
        </>
      )}
    </section>
  )
}
