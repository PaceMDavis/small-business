import React from 'react'
import { Button, TextField } from '@material-ui/core'

const LogInForm = (props) => {
 
  // const [onLogin, setOnLogin] = React.useState(false)

  // const login = () => {
  //   setOnLogin(!onLogin)
  // }
  // console.log(props.isLoggedIn)
  return (
    <div>
      <form 
      // onSubmit={login} value={onLogin}
      >
        <TextField
        required id="standard-required"
        label="Username"
        name="username"
        value={props.textField}
        />
          <br />
        <TextField
        required id="standard-password-input"
        type="password"
        label="Password"
        name="password"
        value={props.textField}
        />
          <br />
        <Button type="submit" id="button-login">LOGIN</Button>
      </form>
    </div>
  )
}

export default LogInForm