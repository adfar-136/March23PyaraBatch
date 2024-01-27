import React, { useEffect, useState } from 'react';
import axios from "axios"
import { getHeaderWithProjectId } from '../utils/config'
import Article from './Article';
export default function Social() {
    const [podCast,setPodCasts] = useState([]);
    const [isLoading,setIsLoading] = useState(false)
    const config = getHeaderWithProjectId()
    const fetchAlbums= async()=>{
        setIsLoading(true)
        const res = await axios.get("https://academics.newtonschool.co/api/v1/quora/post?limit=100",
        config
        )
        setPodCasts(res.data.data);
        setIsLoading(false)
    }
   
    useEffect(()=>{
        fetchAlbums()
    },[])
  return (
    <div>
        {isLoading ? <div>...Loading</div>:(
            <>
             <div>Data</div>
             {podCast.map((post)=>(
                <Article articles ={post}/>
             ))}
            </>
        )}
    </div>
  )
}
