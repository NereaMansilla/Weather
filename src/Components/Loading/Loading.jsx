import loading from '../../Assets/loading.gif'
import s from './Loading.module.css'

import React from 'react'

export const Loading = () => {
  return (
    <div className={s.containerLoading}>
        <img className={s.loading} src={loading} alt='loading...' />
    </div>
  )
}
