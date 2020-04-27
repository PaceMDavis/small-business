import React from 'react'
import { AppBar, Toolbar, 
    Typography } from '@material-ui/core'
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


class Navigation extends React.Component {

  state = {
    loggedIn: this.props.isLoggedIn
  }

  handleLogout = event => {
    this.props.logout(false)
    // this.props.history.push('/')
    this.setState ({
      loggedIn: false
    })
  }



  render() {
    // console.log(this.props.isLoggedIn, 'blue')
  return (
    this.state.loggedIn ? (
      <ThemeProvider theme={theme}>
    <AppBar position="relative">
      <Toolbar color="primary" >
        <Typography variant ="h6" color="secondary" style={{flexGrow: "1"}}>
          Austin Small Business
        </Typography>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/"> Listings </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/" onClick={this.handleLogout}> Logout </Link> 
          </li>
          <li className="nav-list-item">
            <Link to ='/login'>Add Business</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
    </ThemeProvider>
    ) : (
    <ThemeProvider theme={theme}>
    <AppBar position="relative">
      <Toolbar color="primary" >
        <Typography variant ="h6" color="secondary" style={{flexGrow: "1"}}>
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
  )
}
}

export default Navigation