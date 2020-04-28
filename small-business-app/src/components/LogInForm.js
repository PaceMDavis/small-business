import React from 'react'
import { Button, TextField } from '@material-ui/core'
import Navigation from '../containers/Navigation'


class LogInForm extends React.Component {
  state = {
    username: ''
  }

  handleTextChange = (event) => {
    const state = {...this.state}
    state[event.target.name] = event.target.value
    this.setState(state)
  }

  login = (event) => {
    event.preventDefault()
    document.cookie = "loggedIn=true;max-age=10000*1000"
    this.props.login(true)
    this.props.user(this.state.username)
    this.props.history.push('/')
  }

  
    
  render() {
    // console.log("howdy", this.state.username, this.props.user)
  return (
    <div>
      <Navigation />
      <form 
      onSubmit={this.login}
      class="form"
      >
        <TextField
        required id="standard-required"
        label="Username"
        name="username"
        value = {this.state.username}
        onChange={this.handleTextChange}
        />
          <br />
        <TextField
        required id="standard-password-input"
        type="password"
        label="Password"
        name="password"
        />
          <br />
        <Button type="submit" id="button-login">LOGIN</Button>
      </form>
    </div>
  )
}
}

export default LogInForm