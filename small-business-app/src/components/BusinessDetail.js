import React from 'react'
import {Container} from '@material-ui/core'
import Navigation from '../containers/Navigation'
import Maps from './Maps'





const BusinessDetail = (props) => {
  const id = props.match.params.id

  const info = props.businesses.find(c => c.id == id)
  console.log(props.businesses, id)

  return (
    <div>
      <Navigation />
      <Container>
          <h2>{info.Name}</h2>
          <h4>{info.Address}</h4>
          <h4>{info.Hours}</h4>
          <p>{info.Description}</p>
      </Container>
      <Maps address={info.Address}/>
    </div>
  )
}

export default BusinessDetail