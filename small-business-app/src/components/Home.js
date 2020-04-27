import React from 'react'
import BusinessInfo from '../containers/BusinessInfo'
import LogInForm from '../containers/LogInForm'
import Navigation from '../containers/Navigation'

const Home = (props) => {
  // console.log(props.isLoggedIn, "red")
  return (
    <div>
     <Navigation/>
     <BusinessInfo />
    </div>
  )
}

export default Home