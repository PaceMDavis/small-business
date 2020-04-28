import React from 'react'
import Navigation from './Navigation'
// import { Link } from 'react-router-dom'

const AddBusiness = (props) => {
  console.log(props.isLoggedIn, props.businesses)
  return (
    <div>
      <Navigation />
    </div>
  )
}

export default AddBusiness