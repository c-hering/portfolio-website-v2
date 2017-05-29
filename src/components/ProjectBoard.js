import React, { Component } from 'react';
import Project from './Project.js';
import ProjectImageOne from '../../public/images/default.jpg';
import ProjectImageTwo from '../../public/images/logo.png';
import '../style/App.css';

export default class ProjectBoard extends Component{
  renderProject(path,name){
    return <Project path={path} name={name}/>
  }
  render(){
    return(
      <div className="ProjectBoard">
        {this.renderProject(ProjectImageOne, "project 1")}
        {this.renderProject(ProjectImageTwo, "project 2")}
      </div>
    );
  }
}
