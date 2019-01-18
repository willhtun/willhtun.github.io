import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import './index.css';
import screenSize from 'screen-size';
var scrollToElement = require('scroll-to-element');

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.scrollToProject = this.scrollToProject.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }
    scrollToProject() {
        scrollToElement(".Landing-Buttons-Area");
    }
  render() {
    return (
      <div className="Landing">
        <img src="https://i.imgur.com/kVUyNcx.jpg" style={{height: screenSize().y - 150}}></img>
        <div className="Landing-Info-Area">
            <div className="DiamondShape">
             <img src="https://i.imgur.com/WLqpZhh.jpg"/>
            </div>
            <h1> Wai Yan Htun | Will </h1>
            <div className="ExternalLogo-Wrapper">
                <div className="ExternalLogo">
                <a href="https://github.com/willhtun">
                    <img src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67"/>
                </a>
                </div>
                <div className="ExternalLogo">
                <a href="https://www.linkedin.com/in/willhtun-4297/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png"/>
                </a>
                </div>
            </div>
        </div>
        <div className="Landing-Buttons-Area">
            <div className="Landing-Buttons-Wrapper">
                <Slide up cascade>
                    <div>
                        <button className="Landing-Buttons"> >./ RESUME </button>
                        <button className="Landing-Buttons" onClick={this.scrollToProject}> >./ PROJECTS </button>
                        <button className="Landing-Buttons"> >./ SKILLS </button>
                    </div>
                </Slide>
            </div>
        </div>
      </div>
    );
  }
}

export default Landing;
