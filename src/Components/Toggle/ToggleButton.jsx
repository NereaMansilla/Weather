import React from 'react'
import s from './ToggleButton.module.css'
import { useState } from 'react'
import { darkMode } from '../../Redux/Actions'
import { useDispatch } from 'react-redux'
import { BsMoonFill } from 'react-icons/bs'
import { BsFillSunFill } from 'react-icons/bs'


export const ToggleButton = () => {
  const [mode, setMode] = useState("")
  const dispatch = useDispatch()
  const styleDark = { color: "white", fontSize:"1.3em", position: "relative", top:"8px", paddingLeft:"5px",  paddingRight:"5px"}
  const light = {fontSize:"1.5em", position: "relative", top:"8px", paddingLeft:"5px", paddingRight:"5px"}




  const changeINput = () => {
    setMode(mode ? false : true)
    dispatch(darkMode(mode))

  }

  return (
    <div className={s.container}>
       {mode ? null : <BsFillSunFill style={light} />  }
     

      <label className={s.switch}>
        <input onChange={() => changeINput()} type='checkbox' />
        <span className={s.slider} />
      </label>

       {mode ?  <BsMoonFill style={styleDark} /> : null} 
    </div>
  )
}

