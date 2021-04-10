import { MALE, FEMALE } from '../actions'

const initialSex = { sex: '男' }

export default (state = initialSex, action) => {
  switch(action.type) {
    case MALE:
      return { sex: '男' }
    case FEMALE:
      return { sex: '女' }
    default:
      return state
  }
}
