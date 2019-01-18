import React, { Component } from 'react';
import './index.css';

class SkillCard extends Component {
  render() {
    return (
      <div className="SkillCard">
      <h1> {this.props.title} </h1>
        <ul>
            <li> {this.props.l1} </li>
            <li> {this.props.l2} </li>
            <li> {this.props.l3} </li>
            <li> {this.props.l4} </li>
            <li> {this.props.l5} </li>
            <li> {this.props.l6} </li>
            <li> {this.props.l7} </li>
            <li> {this.props.l8} </li>
            <li> {this.props.l9} </li>
            <li> {this.props.l10} </li>
        </ul>
      </div>
    );
  }
}

export default SkillCard;
