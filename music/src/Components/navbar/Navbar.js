import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import {ReactComponent as HomeIcon} from "../../assets/home.svg"
import {ReactComponent as PodcastIcon} from "../../assets/podcast.svg"
import {ReactComponent as HeadPhoneIcon} from "../../assets/headphone.svg"
import SearchBar from './SearchBar'
import Profile from './Profile'
export default function Navbar() {
  return (
    <nav className="navbar">
        <NavLink to="/">
            <Logo/>
        </NavLink>
        <ul className='nav-links'>
            <li className="link-item">
                <HomeIcon/>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="link-item">
                <PodcastIcon/>
                <NavLink to="/social">Social</NavLink>

            </li>
            <li className="link-item">
                <HeadPhoneIcon/>
                <NavLink to="/library">Library</NavLink>
            </li>
        </ul>
        <SearchBar/>
        <Profile/>
    </nav>
  )
}
