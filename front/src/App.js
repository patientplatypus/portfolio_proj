import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
import AboutMe from './components/AboutMe';
import MyProjs from './components/MyProjs';
import MyResume from './components/MyResume';
import MyTravels from './components/MyTravels';




class App extends Component {
  render() {


    const xAboutMex =  ()=> {
      return(
        <div>
          <AboutMe/>
        </div>
      )
    }

    const xMyProjsx =  ()=> {
      return(
        <div>
          <MyProjs/>
        </div>
      )
    }

    const xMyResumex =  ()=> {
      return(
        <div>
          <MyResume/>
        </div>
      )
    }

    const xMyTravelsx =  ()=> {
      return(
        <div>
          <MyTravels/>
        </div>
      )
    }


    return (
      <div className="App">
        <Router>
          <div className="RouterContainer">

          <header>
            <div className="row">
              <div className="col md={4}">

              <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div id="navbar" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li><Link to="/AboutMe">About Me</Link></li>
                      <li><Link to="/MyProjs">My Projects</Link></li>
                      <li><Link to="/MyResume">My Resume</Link></li>
                      <li><Link to="/MyTravels">My Travels</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>

              </div>
            </div>
          </header>

          <Route exact path="/" component={xAboutMex}/>
          <Route path="/AboutMe" component={xAboutMex}/>
          <Route path="/MyProjs" component={xMyProjsx}/>
          <Route path="/MyResume" component={xMyResumex}/>
          <Route path="/MyTravels" component={xMyTravelsx}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
