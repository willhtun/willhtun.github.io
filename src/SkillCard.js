import React, { Component } from 'react';
import './index.css';

class SkillCard extends Component {
  render() {
    if (this.props.lines == 2) {
      return (
        <div className="SkillCard">
        <h1> {this.props.title} </h1>
          <ul>
              <li> {this.props.l1} </li>
              <br></br>
              <li> {this.props.l2} </li>
          </ul>
        </div>
      );
    }
    else {
      return (
        <div className="SkillCard">
        <h1> {this.props.title} </h1>
          <ul>
              <li> {this.props.l1} </li>
          </ul>
        </div>
      );
    }
  }
}

export default SkillCard;
