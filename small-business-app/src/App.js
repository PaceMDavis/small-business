import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'


function App () {
  // console.log(props.businesses)
  // state = {
  //   loggedIn:false
  // }

  // onLogin(event) {
  //   this.setState({
  //     loggedIn: !this.state.loggedIn
  //   })
  //   console.log(this.state.loggedIn, "check")
  // }
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
