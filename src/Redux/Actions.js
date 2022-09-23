export const GET_CITY = 'GET_CITY'
export const GET_DETAILS = 'GET_DETAILS'
export const DELETE_SEARCH = 'DELETE_SEARCH'
export const LOADING = 'LOADING'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'
export const DARK_MODE = 'DARK_MODE'



export function getCity(city) {

   return async function (dispatch) {
      dispatch({ type: LOADING, payload: true })
      return fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
         .then(r => r.json())
         .then(r => {
            dispatch({
               type: GET_CITY,
               payload: r
            })

            dispatch({ type: LOADING, payload: false })
         })
         .catch(err => console.log(err))

   }

}





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







