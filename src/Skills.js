import React, { Component } from 'react';
import './index.css';
import SkillCard from './SkillCard';

class Skills extends Component {
  render() {
    return (
      <div className="Card">
        <h1> > SKILLS </h1>
        <br/>
        <div className="SkillCard-Wrapper">
            <SkillCard title="ARTISTIC"
                        l1="Photoshop"
                        l2="Illustrator"
                        l3="Unity"
                        l4="Unreal Engine 4"
                        l5="blender"
                        l6="3ds Max" />
            <SkillCard title="CODING"
                        l1="C / C++" 
                        l2="Node.js"
                        l3="JavaScript"
                        l4="Java"
                        l5="Python"
                        l6="C#"
                        l7="MySQL / PostgreSQL"
                        l8="Lisp / Scheme"
                        l9="MySQL / PostgreSQL"
                        l10="OCaml" />
            <SkillCard title="LANGUAGES"
                        l1="English"
                        l2="Chinese"
                        l3="Burmese" />
        </div>
        <br/>
      </div>
    );
  }
}

export default Skills;
