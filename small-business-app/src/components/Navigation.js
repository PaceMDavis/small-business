import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles' 

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3cb371',
    },
    secondary: {
      main: '#fafafa'
    }
  },
})

const Navigation = () => {
  return (
    <ThemeProvider theme={theme}>
    <AppBar position="relative">
      <Toolbar color="primary" >
        <Typography variant ="h7" color="secondary" style={{flexGrow: "1"}}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/"> Listings </Link>
          </li>
          <li>
            <Link to="/login"> Login </Link> 
          </li>
        </ul>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  )
}

export default Navigation