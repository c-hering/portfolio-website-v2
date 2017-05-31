import React, { Component } from 'react';
import NavButton from './NavigationButton.js';
import '../style/App.css';

export default class NavBar extends Component{
  renderNavButton(title){
    return <NavButton title={title}/>
  }
  render(){
    return(
      <div id="nav-wrapper">
        <h1 id="navbar-title">Caleb Hering</h1>
        {this.renderNavButton("CONTACT")}
        {this.renderNavButton("PROJECTS")}
        {this.renderNavButton("ABOUT")}
      </div>
    );
  }
}
