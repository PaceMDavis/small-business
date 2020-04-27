import React from 'react'
import { Container, Table, TableBody, TableRow, TableCell} from '@material-ui/core'
// import businesses from '../businesses.json'
import {Link} from 'react-router-dom'
const BusinessInfo = (props) => {
 
console.log(props.businesses)

  
  return (
    <Container>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
          {props.businesses.map((business, index) => (
            <TableRow key={index}>
              <Link to={`/info/${business.id}`}>
                <TableCell>{business.Name}</TableCell>
              </Link> 
              <TableCell>{business.Description}</TableCell>
              <TableCell>{business.Hours}</TableCell>
              <TableCell>{business.Address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )

}

export default BusinessInfo