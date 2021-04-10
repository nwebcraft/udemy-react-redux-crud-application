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
export const CREATE_EVENT = 'CREATE_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const READ_EVENT = 'READ_EVENT'
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // console.log(response)
  dispatch({ type: READ_EVENTS, response: response })
}
export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  dispatch({ type: CREATE_EVENT, response: response })
}
export const putEvent = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
  dispatch({ type: UPDATE_EVENT, response: response })
}
export const getEvent = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: READ_EVENT, response: response })
}
export const deleteEvent = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({ type: DELETE_EVENT, id })
}
