import React, { Component } from 'react';
import './index.css';
import SkillCard from './SkillCard';

class Skills extends Component {
  render() {
    return (
      <div className="Card">
        <h1> > SKILLS </h1>
        <br></br>
        <div className="SkillCard-Wrapper">
            <SkillCard title="PROGRAMMING"
                        lines="1"
                        l1="JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Java &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C# .NET &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C/C++ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SQL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lisp/Scheme &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Node.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React.js" />
            <hr></hr>
            <SkillCard title="ARTISTIC"
                        lines="1"
                        l1="Photoshop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Illustrator &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unity3D &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Unreal Engine 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3ds Max" />
            <hr></hr>
            <SkillCard title="LANGUAGES"
                        lines="1"
                        l1="English &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Chinese &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Burmese" />
        </div>
        <div style={{height: 1}}></div>
      </div>
    );
  }
}

export default Skills;
