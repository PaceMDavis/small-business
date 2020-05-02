import React from 'react'
import Navigation from '../containers/Navigation'
import {Button, TextField} from '@material-ui/core'
class AddBusiness extends React.Component {

  state = {
    businesses: this.props.businesses,
    Name: '',
    Description: '',
    Hours: '',
    Address: ''
  }
  
  
  
  handleTextChange = (event) => {
    const newState = {...this.state}
    newState[event.target.id] = event.target.value
    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const businessTotal = this.props.businesses.length
    const payload = {...this.state}
    payload.id = businessTotal + 1
    console.log('The Business', payload)
    this.props.addBusiness(payload)
    this.props.history.push('/')
  }

  render() {
  return (
    <div>
      <Navigation />
      <form
        onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
        <TextField 
        id="Name"
        placeholder="Name"
        value={this.state.Name}
        onChange={this.handleTextChange}
        required/>
        <TextField 
        id="Description"
        placeholder="Description"
        value={this.state.Description}
        onChange={this.handleTextChange}
        required/>
        <TextField 
        id="Hours"
        placeholder="Hours"
        value={this.state.Hours}
        onChange={this.handleTextChange}
        required/>
        <TextField 
        id="Address"
        placeholder="Address"
        value={this.state.Address}
        onChange={this.handleTextChange}
        required/>
        <br />
        <Button variant="contained" color="primary" type="submit">Save</Button>
      </form>
    </div>
  )
}
}

export default AddBusiness