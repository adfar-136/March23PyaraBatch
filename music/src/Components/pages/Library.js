import React, { useEffect, useState } from 'react'
import { useUser } from '../provider/UserProvider'
import { MusicProvider } from '../provider/MusicProvider';
import MusicCard from '../music/MusicCard';
import MusicPlayer from '../music/MusicPlayer';
export default function Library() {
    const [favoriteSongs,setFavoriteSongs] = useState([])
    const {user}  = useUser();

    const fetchFavoriteSongs = ()=>{
        fetch("https://academics.newtonschool.co/api/v1/music/favorites/like",{
         method:"GET",
         headers:{
          Authorization :`Bearer ${user}`,
          projectId:"8nbih316dv01",
          
         }
        }
     ).then((response)=>response.json())
     .then((data)=>{
        setFavoriteSongs(data.data.songs)
     }).catch((error)=>console.log("Error fetching movies",error))
    }
    useEffect(()=>{
        fetchFavoriteSongs()
    },[])
  return (
    <div>
        {user && <MusicProvider>
            {favoriteSongs.length ? (
                <section className="musicList-container">
                  {favoriteSongs && favoriteSongs.map((music)=>(
                    <article className="music-card">
                        <MusicCard key={music._id} {...music}/>
                    </article>
                  ))}
                </section>
            ):(
               <p>Add Songs to Your Library</p>
            )}
            <MusicPlayer/>
        </MusicProvider> }
        
    </div>
  )
}
