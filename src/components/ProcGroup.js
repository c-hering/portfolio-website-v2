import React, { Component } from 'react';
import ProcSquare from './ProcSquare.js'
import PlanIcon from "../../public/images/plan-icon.png";
import DevIcon from "../../public/images/development-icon.png";
import LuanchIcon from "../../public/images/luanch-icon.png";
import '../style/App.css';

export default class ProcGroup extends Component{
  renderProc(title, source){
    return <ProcSquare title={title} path={source}/>
  }

  render(){
    return(
      <div id="proc-wrapper">
        {this.renderProc("Plan", PlanIcon)}
        {this.renderProc("Develop", DevIcon)}
        {this.renderProc("Launch", LuanchIcon)}
      </div>
    );
  }
}
