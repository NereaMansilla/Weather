import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './LandingPage.module.css'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import vector from '../../Assets/vector.png'
import weatherGirl from '../../Assets/weatherGirl.png'

export const LandingPage = () => {
  const style = {position:'relative', top:'5px'}
 
  return (
    <div className={s.container} /* style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:'center center', backgroundAttachment: 'fixed',height:'auto'
  }} */>  
 {/*  <div  style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:'center center', backgroundAttachment: 'fixed',height:'auto'
  }}>  */} 
  
    <div className={s.containerVector}>
       <img className={s.vector} src={vector} alt='vector' />
       </div>  
       
        <div className={s.containerWeatherGirl}>
       <img className={s.weatherGirl} src={weatherGirl} alt='weather girl'/>
       </div> 

    <div className={s.containerText}>
      <h1 className={s.fText}>Time</h1>
   <h3 className={s.text}> to know the weather</h3> 
   <NavLink to='/weather'>
   <button className={s.button}>Let's go!  <BsFillArrowRightCircleFill style={style}/> </button>
   </NavLink >
   </div> 
   
   </div>
  
 
  
  )
 
}



