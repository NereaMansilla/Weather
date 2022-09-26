import axios from 'axios'
export const GET_CITY = 'GET_CITY'
export const GET_DETAILS = 'GET_DETAILS'
export const DELETE_SEARCH = 'DELETE_SEARCH'
export const LOADING = 'LOADING'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const DARK_MODE = 'DARK_MODE'
const apiKey = process.env.REACT_APP_WEATHER_KEY
export function getCity(city) {
   return async function (dispatch) {
      try {
         dispatch({ type: LOADING, payload: true })
         const ciudad = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ee7ed3f16f36487e80f62924220607&q=${city}&days=5&aqi=no&alerts=no`)
         console.log(process.env.REACT_APP_WEATHER_KEY)
         dispatch({ type: LOADING, payload: false })
         return dispatch({
            type: GET_CITY,
            payload: ciudad.data
         })
      } catch (error) {
         console.log(error)
      }
   }
}


/* export function getCity(city) {

   return async function (dispatch) {
      dispatch({ type: LOADING, payload: true })
       const ciudad = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=ee7ed3f16f36487e80f62924220607&q=${city}&days=5&aqi=no&alerts=no`)
         .then(r => r.r.data)
         .then(r => {
            dispatch({
               type: GET_CITY,
               payload: r
            })

            dispatch({ type: LOADING, payload: false })
         })
         .catch(err => console.log(err))

   }

} */





export function deleteSearch(id) {
   return {
      type: DELETE_SEARCH,
      payload: id
   }
}

export function clearDetail() {
   return {
      type: CLEAR_DETAIL
   }
}

export function darkMode(payload) {
   return {
      type: DARK_MODE,
      payload
   }
}



/* export function Hours (){
   return{
      type: HOURS
   }
} */







