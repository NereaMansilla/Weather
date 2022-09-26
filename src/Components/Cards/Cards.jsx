import React from 'react'
import { useSelector } from 'react-redux'
import { Card } from '../Card/Card'
import { NotFound } from '../Not found/NotFound'
import s from './Cards.module.css'
import { Loading } from '../Loading/Loading'





export const Cards = () => {
  const city = useSelector(state => state.city)
  const error = useSelector(state => state.error)
  const loading = useSelector(state => state.loading)




  return (

    <div>
      {
        error ? <NotFound /> :
        loading ? <Loading />
          :
            <div className={s.cardsContainer}>
              {city?.map((c) => (
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
