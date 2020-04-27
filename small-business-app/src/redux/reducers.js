import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
  
  switch(action.type) {
    // case 'ADD_BUSINESS':
    //   return [...state, action.value]
    // case 'REMOVE_BUSINESS':
    //   const newState = [...state]
    //   newState.splice(action.value,1)
    default:
      return state;
  }
}

const login = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_LOGIN' :
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      }
    default:
      return state
  }
}

export default combineReducers({businesses, login})