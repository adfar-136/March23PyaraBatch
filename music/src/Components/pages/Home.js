import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getHeaderWithProjectId } from '../utils/config'
import { MusicProvider } from '../provider/MusicProvider'
import MusicCard from '../music/MusicCard'
import MusicPlayer from '../music/MusicPlayer'

export default function Home() {
  const [musicList,setMusicList] = useState([])
  const [isLoading,setIsLoading] = useState(false)
  const config = getHeaderWithProjectId()
  const fetchMusic = async()=>{
  try {
    setIsLoading(true)
    const musics = await axios.get(
      "https://academics.newtonschool.co/api/v1/music/song",
      config
      )
    setMusicList(musics.data.data)
    } catch(err){
      console.log(err)
    } finally{
      setIsLoading(false)
    }
  } 
  useEffect(()=>{
    fetchMusic()
  },[])

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    musicList && (
      <MusicProvider>
        <section className="musicList-container">
          {musicList.map((music,i)=>(
            <MusicCard key={i} {...music}/>
          ))}
        </section>
        <MusicPlayer/>
      </MusicProvider>
    )
  )
}
