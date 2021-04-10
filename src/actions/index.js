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
