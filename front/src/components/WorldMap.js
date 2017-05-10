


import React, { PropTypes, Component, PureComponent } from 'react';
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
          zoom: 0,
          center:{lat: 30.2672, lng: -97.7431},
          locations: null,
          clickedkey:null
        };
  }


    componentWillMount(){
      this.setState({
        locations: this.props.locations
      })
    }






    _onClick(event,lat,lng, id, keyitem){
        event.preventDefault();
            var varkeyitem = keyitem;
            console.log('this.state.locations.data[varkeyitem].clicked INONCLICK', this.state.locations.data[varkeyitem].clicked);
            console.log('value of varykeyitem in onclick ', varkeyitem);
            // debugger;

             if(this.state.locations.data[varkeyitem].clicked===true){

               var newlocations=this.state.locations
               newlocations.data[varkeyitem].clicked = false;

               console.log('newlocations testing true', newlocations);
              //  debugger;

               this.setState({
                 locations: newlocations
               });

             }else if(this.state.locations.data[varkeyitem].clicked===false){

               console.log(varkeyitem);
              //  debugger;

               var newlocations=this.state.locations
               newlocations.data.forEach(function(loc){
                 loc.clicked=false;
               })
               newlocations.data[varkeyitem].clicked=true;

               console.log('newlocations testing false', newlocations);
              //  debugger;

               this.setState({
                 locations: newlocations
               });
               console.log('locations after setstate', this.state.locations);
              //  debugger;

              this.props.handleLocClick(this.state.locations.data[varkeyitem]);


             }
    }




render() {




  const MapMarkerComponent = ({smalltext, bigtext, lat, lng, id, keyitem}) =>{

    var varkeyitem = keyitem
    console.log('this.state.locations.data[varkeyitem].clicked', this.state.locations.data[varkeyitem].clicked);

    if (this.state.locations.data[varkeyitem].clicked){
       return(<div className="showbig"  onClick={(event) => this._onClick(event, lat, lng, id, keyitem)}><p>{bigtext}</p></div>)
    }else{
      //  const locations=this.state.locations.data;
      //  locations[varkeyitem].clicked=true;
      //  //setTimeout(()=>{
      //    this.setState({
      //      locations:locations
      //    })
      //  //}, 500);

       return(<div className="showsmall"  onClick={(event) => this._onClick(event, lat, lng, id, keyitem)}><p>{smalltext}</p></div>)
    }


  }



  const MAP_OPTIONS = {
    scrollwheel: false,
  }

  const mapmarkers = this.state.locations.data.map((location, index)=>{
    console.log("location ", location);
    console.log("index i ", index);
    // debugger;
    return(<MapMarkerComponent key={index} keyitem={index} {...location} />)
  });


    return (
          <div className='googleMap' style={{width: "100%", height: "500px", margin: "0 auto"}}>

              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyBKSMaMwm7UTigL5sZGHS2VA0JUfghcSI4'
                }}
                center={this.state.center}
                defaultZoom={this.state.zoom}
                options={MAP_OPTIONS}
                >

                      {mapmarkers}


                </GoogleMapReact>

          </div>
    );
  }
}

export default WorldMap;



    // handleChange(e) {
    //     const items = this.state.items;
    //     items[1].role = e.target.value;
    //
    //     // update state
    //     this.setState({
    //         items,
    //     });
    // }

    // console.log("this.state.locations ", this.state.locations);
    // console.log("this.state.locations filtering ", this.state.locations.data.filter((location)=>{location.clicked===false}))
    //


    // const raw = this.state.locations.data
    //
    // const allowed = [{id}];
    //
    // const filtered = Object.keys(raw)
    //   .filter(key => allowed.includes(key))
    //   .reduce((obj, key) => {
    //     obj[key] = raw[key];
    //     return obj;
    //   }, {});
    //
    // console.log(filtered);
    //
    // return(<div></div>);

    //var thislocation = this.state.locations.data.filter((location)=>{location._id===id});
    //console.log('thislocation ', thislocation);
          // if (this.state.locations[id]===true){
          //   return(<div className="showbig"  onClick={() => _onClick(lat, lng, id)}><p>{bigtext}</p></div>)
          // }else if(this.state.clicked[id]===false){
          //   return(<div className="showsmall"  onClick={() => _onClick(lat, lng, id)}><p>{smalltext}</p></div>)
          // }




  // console.log("after if in worldmap mapmarker and this.props.location is ", this.props.locations);
  // const Mapmarker = ()=>{
  //
  //   // console.log('the value of this.props is ', this.props);
  //   // console.log('the value of this.props.locations.data.length is ', this.props.locations.data.length);
  //   //
  //   // if(this.props.locations===null){
  //   //   console.log("we have null");
  //   // }
  //   //
  //   // if(this.props.locations===undefined){
  //   //   console.log("we have undefined");
  //   // }
  //
  //     if(this.props.locations.data.length>0){
  //         //  return(
  //                   this.props.locations.data.map(location => {
  //                         console.log("this is the location object ", location);
  //                         console.log('location._id ', location._id);
  //                         console.log('location.lat ', location.lat);
  //                         console.log('location.lng ', location.lng);
  //                         console.log('location.smalltext ', location.smalltext);
  //                         console.log('location.bigtext ', location.bigtext);
  //                             return (
  //                               <MapMarkerComponent key={location._id}
  //                                                   lat={location.lat}
  //                                                   lng={location.lng}
  //                                                   smalltext={location.smalltext}
  //                                                   bigtext={location.bigtext} />
  //                             )
  //                   })
  //       //    )
  //       }
  //   }
   //
  //  <MapMarkerComponent lat= {30.2672}
  //                      lng= {-97.7431}
  //                      text= "Uno"
  //                      biggertext = {"UNOUNO"}
  //                      id= {0}
  //                      />
   //
  //  <MapMarkerComponent lat= {30.20}
  //                      lng= {-95}
  //                      text= "Dos"
  //                      biggertext = {"DOS DOS asd asdf asdf asdf /n a sdff asdf fasd ff asdff asd as d asdf ads a sdff asdf"}
  //                      id= {1}
  //                      />
   //
   //
   //
   //

//
//    class GrowlList extends Component {
//   render(){
//
//     const growls = this.props.growls.map(growl => {
//       return(
//         <Growl key={growl.id} {...growl} />
//       )
//     });
//
//     return(
//       <ul className="class-growls">
//         { growls }
//       </ul>
//     )
//   }
// }








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
