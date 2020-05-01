import React , { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper } from 'google-maps-react'
import Marker from './Marker'
import GeoCoding from './GeoCoding'

 const url = "https://maps.googleapis.com/maps/api/geocode/json?address="

 const api_key = process.env.REACT_APP_GOOGLE_API_KEY

const fetchGeoCode = (props) => {
  // console.log(props, "work")
  props.businesses.map((business,index) => {
   
  })

 
}





const Map = ({address}, props) => {
  const [center, setCenter] = useState({lat: 30.287247, lng: -97.718637})
  const [zoom, setZoom] = useState(14)
  
  useEffect(() => {
    fetch(url+address+"&key="+api_key)
    .then(res => res.json())
    .then(response => {
      if(response.results[0]) {
        console.log(response.results[0].geometry.location, "hello")
        setCenter(response.results[0].geometry.location)
        // response.results.map(data => {
        //   return props.mapLocations.push(data)
        // })
      } else {
        
      }
      // console.log(response.results[0].geometry.location, "hello")
    })
  },
    [address]
  );
  // const lat = props.mapLocations.geometry.lat
  // const lng = props.mapLocations.geometry.lng
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={center}
          defaultZoom={zoom}
        >  
            <Marker
            lat={center.lat}
            lng={center.lng}
            text="My Marker"
            color="blue"
          />
         
          {/* <Marker
            lat={30.280009}
            lng={-97.719634}
            text="My Marker"
            color="blue"
          /> */}
        </GoogleMapReact>
        {/* <GeoCoding /> */}
      </div>
    );
  
}

// export default Maps

export default GoogleApiWrapper({ apiKey: api_key}) (Map)