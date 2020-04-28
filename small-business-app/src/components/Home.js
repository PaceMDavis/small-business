import React from 'react'
import BusinessInfo from '../containers/BusinessInfo'
import Navigation from '../containers/Navigation'

const Home = () => {
  // console.log(props.isLoggedIn, "red")
  return (
    <div>
     <Navigation/>
     <BusinessInfo />
    </div>
  )
}

export default Home