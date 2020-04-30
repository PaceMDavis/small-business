import React from 'react';
import './App.css';
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'

 const api_key = process.env.REACT_APP_GOOGLE_API_KEY

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
  console.log(api_key)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
