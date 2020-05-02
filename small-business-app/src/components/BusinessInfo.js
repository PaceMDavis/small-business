import React from 'react'
import { Container, Table, TableBody, TableRow, TableCell} from '@material-ui/core'
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'

const BusinessInfo = (props) => {
 
  const [logStatus, setLogStatus] = React.useState(false)

  const loggedIn = (props) => {
    setLogStatus(!loggedIn)
    props.logout(false)
  }

  return (
    props.isLoggedIn ? (
    <Container>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
          {props.businesses.map((business, idx) => (
            <TableRow key={idx} >
              <TableCell component={Link} to={`/info/${business.id}`} >
                {business.Name}
              </TableCell>
              <TableCell>{business.Description}</TableCell>
              <TableCell>{business.Hours}</TableCell>
              <TableCell>{business.Address}</TableCell>
              <TableCell >
                <DeleteIcon
                  className ="icon text-red"
                  onClick ={() => props.removeBusiness(idx)}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
    ) : (
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
              <TableCell component={Link} to={`/info/${business.id}`} >
                {business.Name}
              </TableCell>
              <TableCell>{business.Description}</TableCell>
              <TableCell>{business.Hours}</TableCell>
              <TableCell>{business.Address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
    )
  )

}

export default BusinessInfo