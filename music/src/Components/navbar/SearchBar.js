import React from 'react'
import {ReactComponent as SearchIcon} from "../../assets/search.svg"

export default function SearchBar() {
  return (
    <section className='searchbar-container'>
       <input type="text" placeholder='Search Here'/>
       <SearchIcon/>
    </section>
  )
}
