import React , { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {Client, Status} from '@googlemaps/google-maps-services-js'


const api_key = process.env.REACT_APP_GOOGLE_API_KEY
const client = new Client({})

class GeoCoding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      client: client.createClient({key: api_key})
    };
    this.state.client.geocode({ address: '1600 Amphitheatre Pkwy, Mountain View'},
      (error, response) => console.log(response.json.results));
  }
}

export default GeoCoding