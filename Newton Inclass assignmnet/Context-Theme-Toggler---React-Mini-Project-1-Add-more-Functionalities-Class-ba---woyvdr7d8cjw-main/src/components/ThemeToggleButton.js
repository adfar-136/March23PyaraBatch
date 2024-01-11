import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const {theme,toggleTheme} =useContext(ThemeContext)
    return (
        <button className={`btn btn-${theme} txt-${theme}`} onClick={()=>toggleTheme()}>Toggle</button>
    )
}
export {ThemeToggleButton}