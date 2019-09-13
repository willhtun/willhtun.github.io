import React, { Component } from 'react';
import './index.css';
import SkillCard from './SkillCard';

class Skills extends Component {
  render() {
    return (
      <div className="Card">
        <h1> > SKILLS </h1>
        <div className="SkillCard-Wrapper">
            <SkillCard title="PROGRAMMING"
                        lines="2"
                        l1="JavaScript &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; React.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Node.js &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C/C++ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C# .NET"
                        l2="Java &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Go &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PostgreSQL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lisp/Scheme" />
            <SkillCard title="ARTISTIC"
                        lines="1"
                        l1="Photoshop &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Illustrator &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; UnityUnreal Engine 4 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; blender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3ds Max"/>
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
