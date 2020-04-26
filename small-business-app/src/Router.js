import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import Login from './components/LogInForm'
import AddBusiness from './components/AddBusiness'
import BusinessInfo from './components/BusinessInfo'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component ={Home} />
      <Route path='/login' component ={Login} />
      <Route path='/add' component ={AddBusiness} />
      <Route path='/info/:id' component ={BusinessInfo} />
    </Switch>
  );
};

export default Router