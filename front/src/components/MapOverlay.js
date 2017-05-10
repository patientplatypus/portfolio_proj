import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
import "./Component.css";

class MapOverlay extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationclicked: this.props.locationclicked
    }
  }

  render() {

    const XOverlaytext = () => {
      if (this.state.locationclicked!=null){
        return(<div>{this.state.locationclicked.overlaytext}</div>)
      }else{
        return(<div></div>)
      }
    }

    return (
      <div className="overlaycomponent">
        <h1>MapOverlay</h1>
        <XOverlaytext/>
      </div>
    );
  }
}



export default MapOverlay;
