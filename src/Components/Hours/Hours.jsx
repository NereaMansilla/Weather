import React from 'react'
import { useSelector } from 'react-redux'
import s from './Hours.module.css'

export const Hours = () => {
 
  const hours = useSelector(state => state.hours)
  const actual = parseInt(hours.location.localtime.substr(11, 13))
  const time = hours.forecast.forecastday.map((c) => {
    return c.hour.map(c => {
      return {
        temp: c.temp_c,
        time: parseInt(c.time.substr(11, 13)),
        icon: c.condition.icon,
        id: c.time_epoch
      }


    }

    )

  })
  const z = time[0].flat().filter(c => c.time > actual)
  const w = time[0].flat().filter(c => c.time < actual)
  const everything = [...z,...w]


  return (
    <div className={`${s.hours} ${hours.current.is_day ? s.hoursLight : null}`}>
      {

        everything?.map((c) => (

          <div key={c.id} className={s.containerHours} >

            <h1 className={`${s.timeBottom} ${hours.current.is_day ? null : s.timeBottomDark}`}>{c.time}hs</h1>
            <h1 className={`${s.tempBottom} ${hours.current.is_day ? null : s.tempBottomDark}`}>{c.temp}°</h1>
            <img className={s.imgBottom} src={c.icon} alt='icon' />
          </div>
        ))
      }
    </div>
  )
}
