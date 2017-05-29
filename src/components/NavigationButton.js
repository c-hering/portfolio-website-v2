import React, { Component } from 'react';
import '../style/App.css';

export default class NavButton extends Component{
  render(){
    return(
      <button type="button" className="nav-button button sliding-middle-out">{this.props.title}</button>
    );
  }
}
