import React, { useContext, useState } from "react"
const MusicContext = React.createContext();

export const  MusicProvider = ({children})=>{
    const [selectedMusic,setSelectedMusic] = useState({});
    const [condition,setCondition] = useState(false)

    return (
        <MusicContext.Provider value={{selectedMusic,setSelectedMusic,condition,setCondition}}>
           {children}
        </MusicContext.Provider>
    )
}

export const useMusic =()=>{
    return useContext(MusicContext)
}