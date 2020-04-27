import React from 'react'
import { Container, Table, TableBody, TableRow, TableCell} from '@material-ui/core'
import {Link} from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'

// import LogInForm from '../containers/LogInForm'

const BusinessInfo = (props) => {
 
  const [logStatus, setLogStatus] = React.useState(false)

  const loggedIn = (props) => {
    setLogStatus(!loggedIn)
    props.logout(false)
  }

  console.log(props.isLoggedIn, "barry")
  
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
          {props.businesses.map((business, index) => (
            <TableRow key={index}>
              <Link to={`/info/${business.id}`}>
                <TableCell>{business.Name}</TableCell>
              </Link> 
              <TableCell>{business.Description}</TableCell>
              <TableCell>{business.Hours}</TableCell>
              <TableCell>{business.Address}</TableCell>
              <TableCell onClick ={() => props.removeBusiness(index)} >
                <DeleteIcon
                  />
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
  )

}

export default BusinessInfo