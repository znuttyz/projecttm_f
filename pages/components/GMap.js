import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const GMap = withScriptjs(withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={{ lat: 13.727265, lng: 100.619247 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 13.727265, lng: 100.619247 }} />}
  </GoogleMap>
)))
  
export { GMap }