import React from 'react'
import {Container} from '@material-ui/core'

const BusinessDetail = (props) => {
  const id = props.match.params.id

  const info = props.businesses.find(c => c.id == id)

  return (
    <Container>
        <h2>{info.Name}</h2>
        <h4>{info.Address}</h4>
        <h4>{info.Hours}</h4>
        <p>{info.Description}</p>
    </Container>
  )
}

export default BusinessDetail