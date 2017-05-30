import React, { Component } from 'react';
import '../style/App.css';

export default class ProcSquare extends Component{
  render(){
    return(
      <div className='procsquare-wrapper'>
        <img className='proc-logo' src={this.props.path}></img>
        <h1 className='proc-title'>{this.props.title}</h1>
      </div>
    );
  }
}
