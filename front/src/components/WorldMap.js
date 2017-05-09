


import React, { PropTypes, Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import controllable from 'react-controllables';
import "./WorldMap.css";

class WorldMap extends Component {

constructor(props){
  super(props);
  this.state = {
    ipaddress: '',
    lat: '',
    lon: '',
    response: '',
    zoom: 3,
    //defaultcenter:{lat: 59.95, lng: 30.33},
    center:{lat: 30.2672, lng: -97.7431},
    clicked: [false,false]
  };
}


render() {

  const _onClick =  (x,y, id) => {

     console.log(x,y,id,this.state.clicked[id]);

     if(this.state.clicked[id]===true){
       var newclicked = this.state.clicked;
       newclicked[id] = false;
       this.setState({
         clicked: newclicked
       });
     }else if(this.state.clicked[id]===false){
       var newclicked = this.state.clicked;
       newclicked[id] = true;
       this.setState({
         clicked: newclicked
       });
     }

     console.log(x,y,id,this.state.clicked[id]);

    }

  const MapMarkerComponent = ({text, biggertext, lat, lng, id}) =>{
    if (this.state.clicked[id]===true){
      return(<div className="showbig"  onClick={() => _onClick(lat, lng, id)}><p>{biggertext}</p></div>)

    }else if(this.state.clicked[id]===false){
      return(<div className="showsmall"  onClick={() => _onClick(lat, lng, id)}><p>{text}</p></div>)
    }
  }
  // {
  //   let boundClick = this._onClick.bind(this, {text,lat,lng});
  //   return(
  //     <div className="componentbox" onClick={boundClick}><p>{text} {lat} {lng}</p></div>;
  //   )
  // }
  //



    return (
      <div className='googleMap' style={{width: "500px", height: "500px", margin: "0 auto"}}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyBKSMaMwm7UTigL5sZGHS2VA0JUfghcSI4'
        }}
        center={this.state.center}
        defaultZoom={this.state.zoom}
        >

        <MapMarkerComponent lat= {30.2672}
                            lng= {-97.7431}
                            text= "Uno"
                            biggertext = {"UNOUNO"}
                            id= {0}
                            />

        <MapMarkerComponent lat= {30.20}
                            lng= {-95}
                            text= "Dos"
                            biggertext = {"DOS DOS asd asdf asdf asdf /n a sdff asdf fasd ff asdff asd as d asdf ads a sdff asdf"}
                            id= {1}
                            />

        </GoogleMapReact   >
      </div>
    );
  }
}

export default WorldMap;















//
//
// /* global google */
// import {
//   default as React,
//   Component,
// } from "react";
//
//
// import withGoogleMap from './assets/withGoogleMap';
// import GoogleMap from './assets/GoogleMap';
// import Marker from './assets/Marker';
//
// const SimpleClickEventExampleGoogleMap = withGoogleMap(props => (
//   <GoogleMap
//     ref={props.onMapMounted}
//     zoom={props.zoom}
//     center={props.center}
//     onCenterChanged={props.onCenterChanged}
//   >
//     <Marker
//       defaultPosition={props.center}
//       title="Click to zoom"
//       onClick={props.onMarkerClick}
//     />
//
//     <Marker
//       defaultPosition={props.marker2center}
//       title="Click to zoom"
//       onClick={props.onMarkerClick}
//     />
//
//
//
//   </GoogleMap>
// ));
//
// const INITIAL_CENTER = { lat: -25.363882, lng: 131.044922 };
// const MARKER1_CENTER = { lat: -25.363882, lng: 131.044922 };
// const MARKER2_CENTER = { lat: -25.44, lng: 131.55 };
//
// /*
//  * https://developers.google.com/maps/documentation/javascript/examples/event-simple
//  *
//  * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
//  */
// export default class SimpleClickEventExample extends Component {
//
//
//
//   state = {
//     zoom: 4,
//     center: INITIAL_CENTER,
//     marker2center: MARKER2_CENTER
//   };
//
//   handleMapMounted = this.handleMapMounted.bind(this);
//   handleCenterChanged = this.handleCenterChanged.bind(this);
//   handleMarkerClick = this.handleMarkerClick.bind(this);
//
//   handleMapMounted(map) {
//     this._map = map;
//   }
//
//   handleMarkerClick() {
//     this.setState({
//       zoom: 8,
//     });
//   }
//
//   handleCenterChanged() {
//     const nextCenter = this._map.getCenter();
//     if (nextCenter.equals(new google.maps.LatLng(INITIAL_CENTER))) {
//       // Notice: Check nextCenter equality here,
//       // or it will fire center_changed event infinitely
//       return;
//     }
//     if (this._timeoutId) {
//       clearTimeout(this._timeoutId);
//     }
//     this._timeoutId = setTimeout(() => {
//       this.setState({ center: INITIAL_CENTER });
//       this._timeoutId = null;
//     }, 3000);
//
//     this.setState({
//       // Because center now is a controlled variable, we need to set it to new
//       // value when "center_changed". Or in the next render it will use out-dated
//       // state.center and reset the center of the map to the old location.
//       // We can never drag the map.
//       center: nextCenter,
//     });
//   }
//
//   componentWillUnmount() {
//     if (this._timeoutId) {
//       clearTimeout(this._timeoutId);
//     }
//   }
//
//   render() {
//     return (
//       <div className='googleMap' style={{width: "500px", height: "500px", margin: "0 auto"}}>
//         <SimpleClickEventExampleGoogleMap
//           containerElement={
//             <div style={{ height: `100%` }} />
//           }
//           mapElement={
//             <div style={{ height: `100%` }} />
//           }
//           zoom={this.state.zoom}
//           center={this.state.center}
//           onMapMounted={this.handleMapMounted}
//           onCenterChanged={this.handleCenterChanged}
//           onMarkerClick={this.handleMarkerClick}
//         />
//       </div>
//     );
//   }
// }