import React, { Component } from 'react';
import ProjectBoard from './ProjectBoard.js';
import NavBar from './NavigationBar.js';
import ProcGroup from './ProcGroup.js';
import Waves from '../../public/images/waves.png';
import '../style/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
          <div id="top-content-wrapper">
            <img id="top-waves" src={Waves}></img>
            <h1 id="top-content-title">Make it <br/><span className="highlights">Personal</span></h1>
          </div>
        </div>
        <div id="middle-content-wrapper">
          <p id="intro">Hi, I&#39;m Caleb, and I make stunning <br/>personal websites for those who want them.</p>
        </div>
        <div id="lower-content-wrapper">
          <ProcGroup />
        </div>
      </div>
    );
  }
}
