import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import LogInForm from './containers/LogInForm'
import AddBusiness from './components/AddBusiness'
import BusinessDetail from './containers/BusinessDetail'
// import BusinessInfo from './components/BusinessInfo'

const Router = () => {
  return (
    <Switch>
      <Route exact path='/' component ={Home} />
      <Route path='/login' component ={LogInForm} />
      <Route path='/add' component ={AddBusiness} />
      <Route path='/info/:id' component ={BusinessDetail} />
    </Switch>
  );
};

export default Router