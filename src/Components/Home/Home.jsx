import React from 'react'
import {NavBar} from '../Navbar/NavBar.jsx'
import {Cards} from '../Cards/Cards'
import s from './Home.module.css'
import { useSelector } from 'react-redux'
export function Home() {
  const mode = useSelector(state => state.dark)

  return (
    <div className={mode ? s.light : s.dark}>
        <NavBar/>
    
         <Cards/>
        
    </div>
  )
}

