import React, { Component } from 'react';
import ProcSquare from './ProcSquare.js'
import PlanIcon from "../../public/images/plan-icon.png";
import DevIcon from "../../public/images/development-icon.png";
import LuanchIcon from "../../public/images/luanch-icon.png";
import '../style/App.css';

export default class ProcGroup extends Component{
  renderProc(title, source, desc){
    return <ProcSquare title={title} path={source} description={desc}/>
  }

  render(){
    return(
      <div id="proc-wrapper">
        {this.renderProc("Plan", PlanIcon, 'Work together to brainstorm and create a website concept personal to you.')}
        {this.renderProc("Develop", DevIcon, 'Fast and efficient development with customer input.')}
        {this.renderProc("Launch", LuanchIcon, 'Together the finished solution is launched with full support.')}
      </div>
    );
  }
}
