import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import './index.css';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
  render() {
    return (
      <div className="Landing">
        <img src="https://i.imgur.com/kVUyNcx.jpg" style={{height: this.state.height}}></img>
        <div className="Landing-Info-Area">
            <div className="DiamondShape">
             <img src="https://media.licdn.com/dms/image/C5603AQEZpAzHeLV4zw/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=eqNs70G6_aYHYWrhm89lwpQ-utJEn0D7Kp4tYCaQumg"/>
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
                        <button className="Landing-Buttons"> >./ PROJECTS </button>
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
