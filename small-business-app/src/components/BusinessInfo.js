import React from 'react'
import { Container, Table, TableBody, TableRow, TableCell} from '@material-ui/core'
// import businesses from '../businesses.json'

const BusinessInfo = (props) => {
 


  
  return (
    <Container>
      <Table>
        <TableBody>
          {props.businesses.map((business, index) => (
            <TableRow key={index}>
              <TableCell>{business['Name']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )

}

export default BusinessInfo