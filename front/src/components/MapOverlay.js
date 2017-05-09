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
    this.state = {}
  }

  render() {
    return (
      <div className="overlaycomponent">
        <h1>MapOverlay</h1>
      </div>
    );
  }
}



export default MapOverlay;
