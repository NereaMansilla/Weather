import React from 'react'
import { deleteSearch } from '../../Redux/Actions'
//import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Hours } from '../Hours/Hours'
import s from './Card.module.css'


export const Card = ({ city, img }) => {
  const dispatch = useDispatch()

console.log('DIA O NOCHE',city.current.is_day)

  const handleDelete = () => {
    dispatch(deleteSearch(city.location.tz_id))
  }
  const MaxandMin = city.forecast.forecastday.map((c)=>(
    <div key={c.date_epoch}>
    <h4 className={`${s.maxmin} ${city.current.is_day ? null : s.maxminDark}`}>{c.day.maxtemp_c}° / {c.day.mintemp_c}° </h4>
    </div>
  ))
  const convert = city.current.wind_mph * 1.609344

  return (
    <div className={`${s.cardContainer} ${city.current.is_day ? s.cardDay : s.cardNight}`}>
      <div className={`${s.x} ${city.current.is_day  ? null : s.xDark}`} onClick={() => handleDelete()}>X</div>
     <div className={s.left}>
      <h1 className={`${s.name} ${city.current.is_day ? null : s.nameDark}`}>{city.location.name}</h1>
      <h2 className={`${s.country} ${city.current.is_day ? null : s.countryDark}`}>{city.location.country}</h2>
      <h4 className={`${s.time} ${city.current.is_day ? null : s.timeDark}`}>{city.location.localtime.substr(11,15)}hs</h4>
      <img className={s.img} src={city.current.condition.icon} alt='icon' />
      <h3 className={`${s.text} ${city.current.is_day ? null : s.textDark}`}>{city.current.condition.text}</h3>
      </div>
      <div className={s.right}>
      <h1 className={`${s.temp} ${city.current.is_day ? null : s.tempDark}`}>{city.current.temp_c}°</h1>
      <h4>{MaxandMin[0]}</h4>
      <h3 className={`${s.humidity} ${city.current.is_day ? null : s.humidityDark}`}>Humidity: {city.current.humidity}%</h3>
      <h3 className={`${s.wind} ${city.current.is_day ? null : s.windDark}`}>Wind: {Math.floor(convert)} km/h </h3>
      <Hours className={s.hoursC}  />
      </div>



    </div>

  )
}
