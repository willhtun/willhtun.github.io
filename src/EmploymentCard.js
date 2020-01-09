import React, { Component } from 'react';
import './index.css';

class EmploymentCard extends Component {
  render() {
    if (this.props.position == "top") {
      return (
        <div className="EmploymentCard">
          <div className="EmploymentCard-imgWrapper-longer">
            <img src="https://i.imgur.com/xgR7ISr.png"></img>
          </div>
          <div>
            <h1>{this.props.title} | <span style={{color: "#5689a6"}}> {this.props.company} </span> </h1>
            <h2>{this.props.date}</h2>
            <p>- {this.props.desc1}</p>
            <p>- {this.props.desc2}</p>
            <div style={{height: 50}}/>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="EmploymentCard">
          <div className="EmploymentCard-imgWrapper">
            <img src="https://i.imgur.com/IrwhGvh.png"></img>
          </div>
          <div>
            <h1>{this.props.title} | <span style={{color: "#5689a6"}}> {this.props.company} </span> </h1>
            <h2>{this.props.date}</h2>
            <p>- {this.props.desc1}</p>
            <p>- {this.props.desc2}</p>
            <div style={{height: 50}}/>
          </div>
        </div>
      );
    }
  }
}

export default EmploymentCard;
