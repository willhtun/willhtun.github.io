import React, { Component } from 'react';
import './index.css';
import Landing from './Landing';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
      </div>
    );
  }
}

export default App;
