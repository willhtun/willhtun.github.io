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
    this.scrollToEmployment = this.scrollToEmployment.bind(this);
    this.scrollToProject = this.scrollToProject.bind(this);
    this.scrollToSkills = this.scrollToSkills.bind(this);
    this.goToResume = this.goToResume.bind(this);
  }
  scrollToEmployment() {
    scrollToElement(".Employment", {offset: -50});
  }
  scrollToProject() {
    scrollToElement(".Projects", {offset: -50});
  }
  scrollToSkills() {
    scrollToElement(".Skills", {offset: -50});
  }
  goToResume() {
    window.open('https://www.dropbox.com/scl/fi/4dfwqkbhqpjksgmoceh73/Willem_Lu_Resume.pdf?rlkey=w3quhsrqyyqc2zj124fazadqb&dl=0', '_blank');
  }
  render() {
    return (
      <div className="App">
        <div className="Landing">
        <div className="Background-Img" alt="Background" style={{height: 1000}}></div> {/* height: screenSize().y - 500 */}
        <div className="Landing-Info-Area">
            <div className="DiamondShape">
              <img src="https://i.imgur.com/PM3iVTW.jpeg" alt="Profile"/>
            </div>
            <div className="Name">
              <h1> WILLEM HTUN LU &nbsp; <span className="ColoredH1"> | &nbsp; Will </span> </h1>   
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
                        <button className="Landing-Buttons" onClick={this.scrollToEmployment}> >./ EXPERIENCE </button>
                    </div>
                </Slide>
            </div>
        </div>
        </div>
        <About/>
        <div className="Background-Img" alt="Background" style={{height: 100}}></div>
        <div className="Employment">
          <Employment/>
        </div>
        <div className="Background-Img" alt="Background" style={{height: 100}}></div>
        <div className="Skills">
          <Skills/>
        </div>
        <div className="Background-Img" alt="Background" style={{height: 100}}></div>
        <div className="Projects">
          <Projects/>
        </div>
        <div className="Background-Img" alt="Background" style={{height: 100}}></div>
      </div>
    );
  }
}

export default App;
