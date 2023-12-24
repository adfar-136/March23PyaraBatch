import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
const {theme} = useContext(ThemeContext);
const [localTheme,setLocaltheme] = useState(theme)
return(
    <div className={`bg-${localTheme}`} style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box">
        {/* Write code below this line */}
        <p className={`txt-${localTheme}`}>
            Hiiii</p>
        <button className={`btn btn-${localTheme} txt-${localTheme}`} onClick={()=>setLocaltheme(localTheme==="light"?"dark":"light")}>Toggle</button>
    </div>
)
}

export { LocalThemedBox }