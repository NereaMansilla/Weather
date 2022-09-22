import React from 'react'
import { useState, } from 'react'
import { useDispatch } from 'react-redux'
import { getCity } from '../../Redux/Actions'
import { clearDetail } from '../../Redux/Actions'
import { ToggleButton } from '../Toggle/ToggleButton.jsx'
import { useSelector } from 'react-redux'
import s from './NavBar.module.css'
import { ImSearch } from 'react-icons/im'


export const NavBar = () => {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch()
  const mode = useSelector(state => state.dark)
  const style = {fontSize:"2em", color:"black"}
  const darkStyle= {fontSize:"2em", color:"white"}

  const handleSearch = (e) => {
    e.preventDefault(e)
    dispatch(clearDetail())
    dispatch(getCity(search))

    setSearch('')



  }


  const handleInput = (e) => {
    e.preventDefault(e)
    setSearch(e.target.value)
  }



  return (
    <div>
      <ToggleButton />
    <div className={s.containerSearch}>
      <input

        className={`${s.input} ${mode ? s.light : s.dark}`}
        type='text'
        placeholder='Search city...'
        value={search}
        onChange={(e) => handleInput(e)}
        onFocus={(e) => e.target.placeholder = ''} />
    
      <button className={s.search} onClick={(e) => handleSearch(e)}> {mode ? <ImSearch style={style} /> : <ImSearch style={darkStyle} />}  </button>
    
    </div>
    </div>
  )
}
