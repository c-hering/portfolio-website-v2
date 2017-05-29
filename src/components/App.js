import React, { Component } from 'react';
import ProjectBoard from './ProjectBoard.js';
import NavBar from './NavigationBar.js';
import ProcGroup from './ProcGroup.js';
import '../style/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
          <div id="top-content-wrapper">
            <div id="top-title-wrapper">
              <h1 id="top-title" className="content-title">
                Let&#39;s Create Together
              </h1>
            </div>
            <ProcGroup />
            <button type="button" id="launch-button" className="button sliding-middle-out">GO</button>
          </div>
        </div>
        <div id="middle-content-wrapper">
        </div>
      </div>
    );
  }
}
