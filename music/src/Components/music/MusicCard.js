import React, { useState } from 'react'
import { useMusic } from '../provider/MusicProvider';
import  style from "./MusicCard.module.css"
export default function MusicCard(props) {
    const {title,thumbnail,artist} = props;
    const {setSelectedMusic,setCondition} = useMusic()
    const artistList = artist.map((item)=>item.name).join(" & ")
  return (
    <section className={style.musicCard}
    onClick={()=>{setSelectedMusic(props);setCondition(true)}}>
        <img 
        src={thumbnail} 
        alt={title} 
         className={style.bannerImg}/>
        <div>{title}</div>
        <div className={style.artist}>{artistList}</div>
        
    </section>
  )
}
