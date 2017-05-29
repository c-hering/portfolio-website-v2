import React, { Component } from 'react';
import NavButton from './NavigationButton.js';
import Logo from '../../public/images/logo.png';
import '../style/App.css';

export default class NavBar extends Component{
  renderNavButton(title){
    return <NavButton title={title}/>
  }
  render(){
    return(
      <div id="nav-wrapper">
        {this.renderNavButton("HOME")}
        {this.renderNavButton("PROJECTS")}
        <h1 id="navbar-title">Caleb Hering</h1>
        {this.renderNavButton("ABOUT")}
        {this.renderNavButton("CONTACT")}
      </div>
    );
  }
}
