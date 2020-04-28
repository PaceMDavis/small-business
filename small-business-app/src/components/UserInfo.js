import React from 'react'
import { AppBar, Toolbar, 
    Typography } from '@material-ui/core'



const UserInfo = (props) => {
console.log(props.user, "joe")
return (
  <AppBar position ="relative" className='user-info'>
        <Toolbar >
          <Typography variant="p" className="user-info-p">
            Logged in as: {props.user.username}
          </Typography>
        </Toolbar>
  </AppBar>
 )
} 


export default UserInfo