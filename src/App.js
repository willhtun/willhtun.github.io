import React, { Component } from 'react';
import './index.css';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import scrollToElement from 'scroll-to-element';
import Slide from 'react-reveal/Slide';
import screenSize from 'screen-size';
import Subtitle from './Subtitle';
import Employment from './Employment';

class App extends Component {
  constructor(props) {
    super(props);
    this.scrollToProject = this.scrollToProject.bind(this);
    this.scrollToSkills = this.scrollToSkills.bind(this);
    this.goToResume = this.goToResume.bind(this);
  }
  scrollToProject() {
    scrollToElement(".Projects", {offset: -50});
  }
  scrollToSkills() {
    scrollToElement(".Skills", {offset: -50});
  }
  goToResume() {
    window.open('https://www.dropbox.com/s/hpe2b9e32fas33g/Will%20Htun%20Resume.pdf?dl=0', '_blank');
  }
  render() {
    return (
      <div className="App">
        <div className="Landing">
        <img className="Background-Img" src="https://i.imgur.com/kVUyNcx.jpg" alt="Background" style={{height: screenSize().y - 150}}></img>
        <div className="Landing-Info-Area">
            <div className="DiamondShape">
              <img src="https://i.imgur.com/WLqpZhh.jpg" alt="Profile"/>
            </div>
            <div className="Name">
              <h1> WAI YAN HTUN &nbsp; <span className="ColoredH1"> | &nbsp; WILL </span> </h1>   
              <Subtitle/>
            </div>
        </div>
        <div className="Landing-Buttons-Area">
            <div className="Landing-Buttons-Wrapper">
                <Slide up cascade>
                    <div>
                        <button className="Landing-Buttons" onClick={this.goToResume}> >./ RESUME </button>
                        <button className="Landing-Buttons" onClick={this.scrollToProject}> >./ PROJECTS </button>
                        <button className="Landing-Buttons" onClick={this.scrollToSkills}> >./ SKILLS </button>
                    </div>
                </Slide>
            </div>
        </div>
        </div>
        <About/>
        <img className="Background-Img" src="https://i.imgur.com/A9BiGkx.png" alt="Background" style={{height: 100}}></img>
        <div className="Skills">
          <Skills/>
        </div>
        <img className="Background-Img" src="https://i.imgur.com/A9BiGkx.png" alt="Background" style={{height: 100}}></img>
        <div className="Projects">
          <Projects/>
        </div>
        <img className="Background-Img" src="https://i.imgur.com/A9BiGkx.png" alt="Background" style={{height: 150}}></img>
      </div>
    );
  }
}

export default App;
