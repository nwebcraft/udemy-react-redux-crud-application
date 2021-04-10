import axios from 'axios'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const MALE = 'MALE'
export const FEMALE = 'FEMALE'

export const increment = () => ({
  type: INCREMENT
})
export const decrement = () => ({
  type: DECREMENT
})
export const toMale = () => ({ type: MALE })
export const toFemale = () => ({ type: FEMALE })

// イベント管理機能
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'
export const READ_EVENTS = 'READ_EVENTS'
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // console.log(response)
  dispatch({ type: READ_EVENTS, response: response })
}
