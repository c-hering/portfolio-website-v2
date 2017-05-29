import React, { Component } from 'react';
import '../style/App.css';

export default class ProcSquare extends Component{
  render(){
    return(
      <div className='procsquare-wrapper'>
        <h1 className='proc-title'>{this.props.title}</h1>
          <img className='proc-logo' src={this.props.path}></img>
      </div>
    );
  }
}
