import React, { useContext, useState } from "react"
const MusicContext = React.createContext();

export const  MusicProvider = ({children})=>{
    const [selectedMusic,setSelectedMusic] = useState({})
    return (
        <MusicContext.Provider value={{selectedMusic,setSelectedMusic}}>
           {children}
        </MusicContext.Provider>
    )
}

export const useMusic =()=>{
    return useContext(MusicContext)
}