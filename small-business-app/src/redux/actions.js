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


export const login = (user) => {
  return {
    type: 'TOGGLE_LOGIN',
    value: user
  }
}
