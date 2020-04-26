import React from 'react'
import BusinessInfo from './BusinessInfo'

const Home = (props) => {
  return (
    <div>
      {/* {props.businesses.map((business, index) => (
        <li>{business.Name}</li>
      ))} */}
      <BusinessInfo />
    </div>
  )
}

export default Home