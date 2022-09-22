import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import { NotFound } from '../Not found/NotFound'
import s from './Cards.module.css'
import { Loading } from '../Loading/Loading'





export const Cards = () => {
  const city = useSelector(state => state.city)


  const loading = useSelector(state => state.loading)
  



  return (

    <div>
      {
         loading ? <Loading />
          : 
          
          <div className={s.cardsContainer}>
            {city?.map((c) => (
              c.error ? <NotFound /> :
                <Card
                  city={c}
                  key={c.location.tz_id}

                />
            ))}
            
          </div>

            } 
           
    </div>
            
  )

}
