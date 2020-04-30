import { combineReducers } from 'redux'

const businesses = (state = [], action) => {
  
  switch(action.type) {
    case 'ADD_BUSINESS':
      return [...state, action.value]
    case 'REMOVE_BUSINESS':
      const newState = [...state]
      newState.splice(action.value,1)
      return newState
    default:
      return state;
  }
}

const user = (state = null, action) => {
  switch(action.type) {
    case 'USER_INFO' :
      return action.value
    default:
      return state
  }
}

const isLoggedIn = (state = false, action) => {
  // console.log(state, action)
  switch(action.type) {
    case 'TOGGLE_LOGIN' :
      return true
    case 'TOGGLE_LOGOUT' :
      return false
    default:
      return state
  }
}

const mapLocations = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MAPLOCATIONS':
      return action.value
    default:
      return state
  }
}

export default combineReducers({businesses, isLoggedIn, user, mapLocations})