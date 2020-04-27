export const addBusiness = (business) => {
  return {
    type: 'ADD_BUSINESS',
    value: business
  }
}

export const removeBusiness = (index) => {
  return {
    type: 'REMOVE_BUSINESS',
    value: index
  }
}


export const login = (bool) => {
  return {
    type: 'TOGGLE_LOGIN',
    value: bool
  }
}

export const logout = (bool) => {
  return {
    type: 'TOGGLE_LOGOUT',
    value: bool
  }
}

export const user = (name) => {
  return {
    type: 'USER_INFO',
    value: name
  }
}
