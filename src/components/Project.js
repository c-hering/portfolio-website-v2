import React, { Component } from 'react';
import '../style/App.css';

export default class Project extends Component{
  constructor(props){
    super(props);
    this.state = {
      path: props.path,
      name: props.name,
    };
  }
  render(){
    return(
      <div className="project-wrapper">
        <h1 className="project-title">{this.state.name}</h1>
        <img className="project-img" src={this.state.path}></img>
      </div>
    );
  }
}
