import React from 'react'
import { useMusic } from '../provider/MusicProvider';
import  style from "./MusicCard.module.css"
import MusicPlayer from './MusicPlayer';
export default function MusicCard(props) {
    const {title,thumbnail,artist} = props;
    const {setSelectedMusic} = useMusic()
    const artistList = artist.map((item)=>item.name).join(" & ")
  return (
    <section className={style.musicCard}
    onClick={()=>setSelectedMusic(props)}>
        <img 
        src={thumbnail} 
        alt={title} 
         className={style.bannerImg}/>
        <div>{title}</div>
        <div className={style.artist}>{artistList}</div>
        
    </section>
  )
}
