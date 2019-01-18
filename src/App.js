import React, { Component } from 'react';
import './index.css';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import scrollToElement from 'scroll-to-element';
import Slide from 'react-reveal/Slide';
import screenSize from 'screen-size';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToProject = this.scrollToProject.bind(this);
    this.scrollToSkills = this.scrollToSkills.bind(this);
  }
  scrollToProject() {
    scrollToElement(".Projects", {offset: -50});
  }
  scrollToSkills() {
    scrollToElement(".Skills", {offset: -50});
  }
  render() {
    return (
      <div className="App">
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
                        <button className="Landing-Buttons" onClick={this.scrollToSkills}> >./ SKILLS </button>
                    </div>
                </Slide>
            </div>
        </div>
        </div>
        <About/>
        <div className="Skills">
          <Skills/>
        </div>
        <div className="Projects">
          <Projects/>
        </div>
      </div>
    );
  }
}

export default App;
