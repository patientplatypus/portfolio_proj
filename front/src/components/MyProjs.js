import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
import "./Component.css";


class MyProjs extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="MyProjs Content1">
        <h1>My Projs</h1>
      </div>
    );
  }
}



export default MyProjs;
