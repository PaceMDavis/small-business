import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Home from './containers/Home'
import LogInForm from './containers/LogInForm'
import AddBusiness from './containers/AddBusiness'
import BusinessDetail from './containers/BusinessDetail'
import cookie from 'cookie'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  return cookies['loggedIn'] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
    <Route
    {...rest}
    render ={(props) => checkAuth() === true
      ? <Component {...props} />
      : <Redirect to = {{pathname: '/', state: {from:props.location}}} />}
    />
  )
}

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component ={Home} />
      <Route path='/login' component ={LogInForm} />
      <ProtectedRoute path='/add' component ={AddBusiness} />
      <Route path='/info/:id' component ={BusinessDetail} />
    </Switch>
  );
};

export default Router