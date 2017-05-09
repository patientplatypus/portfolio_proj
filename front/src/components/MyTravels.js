import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';
import axios from 'axios';
import "./Component.css";
import WorldMap from './WorldMap';
import { Parallax, Background } from 'react-parallax';


class MyTravels extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {

    const TheContainer = React.createClass({
      render: function () {
        return (
          <div>
            <Parallax strength={300}>
              <Background>
                <img src="http://www.fillmurray.com/400/300"/>
                <div style={{
                   width: "auto",
                   height: 300,
                   backgroundColor: '#450093'
                  }}></div>
                <img src="http://www.fillmurray.com/500/300"/>
              </Background>
              <h1>something else</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor et massa quis placerat. Morbi gravida dolor in rutrum suscipit. Cras vehicula sed turpis non iaculis. Sed et libero sagittis, rhoncus augue semper, consectetur neque. Curabitur aliquam augue in diam feugiat suscipit. Sed faucibus rutrum enim ut ultrices. Integer vel risus cursus, porta mi non, consectetur nisl.</p>

              <p>Integer id arcu id orci interdum aliquet. Quisque ac ante ligula. Morbi dapibus ipsum tincidunt metus ornare, at pellentesque sem finibus. Sed nibh elit, lacinia vel tellus in, convallis sodales libero. Etiam aliquam metus risus, vitae tempor justo posuere vel. Nulla nibh metus, condimentum non nisi sit amet, tristique aliquam nulla. In mattis arcu venenatis risus hendrerit consectetur.</p>
            </Parallax>
          </div>
        )
      }
    });






    return (
      <div className="MyTravels Content1">
        <h1>My Travels</h1>

        <TheContainer/>

        <p>Nulla id erat a odio pellentesque molestie id lacinia ipsum. Quisque a est risus. Donec efficitur odio at feugiat rutrum. Duis at nunc sed nisl vestibulum luctus malesuada ultrices arcu. Praesent massa massa, pellentesque quis blandit vitae, sagittis ac arcu. Sed pretium, ex eu fringilla molestie, tellus elit varius metus, nec gravida purus lectus sit amet urna. Suspendisse vitae scelerisque nisi. Phasellus nibh ligula, aliquam a tempus id, varius non ipsum. Morbi in orci bibendum, condimentum ex auctor, vulputate quam. Proin at velit vel orci aliquam semper. Duis nec tortor vel augue convallis suscipit. Praesent interdum tincidunt ante sit amet commodo.</p>

        <p>Etiam pretium enim vel placerat efficitur. Vivamus aliquam et ante a tincidunt. Maecenas vel orci magna. Phasellus molestie dolor eu purus vulputate, ultrices laoreet purus malesuada. Donec non nisi urna. Curabitur dictum, nunc non hendrerit ornare, urna libero hendrerit lorem, non condimentum ligula elit non enim. Maecenas blandit purus a malesuada fermentum. In ullamcorper ex pharetra purus ullamcorper, et porttitor sapien volutpat. Curabitur ornare orci sed metus dapibus, vitae condimentum neque consectetur. Nullam finibus sem id dui molestie volutpat. Donec ultrices ante vitae hendrerit ultricies. Suspendisse blandit tortor sed ex rutrum suscipit. Praesent vehicula vel lacus et viverra. Vestibulum mollis mauris scelerisque velit sollicitudin, ac dapibus velit dapibus.</p>

        <p>Duis suscipit turpis eu arcu faucibus, in rutrum magna aliquam. Aliquam hendrerit ullamcorper massa eu lacinia. Donec eu placerat leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et congue dolor, ut malesuada augue. Mauris nec libero erat. Nam cursus ipsum eu mi porta eleifend. Praesent quis tempus lectus.</p>

        <WorldMap/>
      </div>
    );
  }
}



export default MyTravels;
