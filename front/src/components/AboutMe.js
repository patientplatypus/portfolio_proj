import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
import "./Component.css";

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="AboutMe Content1">
        <h1>About Me Page</h1>
      </div>
    );
  }
}



export default AboutMe;
