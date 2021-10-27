import React from 'react'
import { GoogleApiWrapper, Map , Marker } from "google-maps-react-17"

const MyMapComponent = ((props) =>
  <Map
    google={props.google}
    zoom={8}
    initialCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </Map>
)

export default GoogleApiWrapper({apiKey:''})(MyMapComponent)