import React, { Component } from 'react';
import './index.css';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  render() {
    return (
      <div className="Card">
        <h1> > PROJECTS </h1>
        <ProjectCard title="ONLINE SHOPPING PLATFORM"
                      desc="Online fashion shopping platform designed for college students, with college lifestyle
                            in mind. Currently working part-time as a front-end developer."
                      cover="https://i.imgur.com/BE0kHTg.jpg"
                      link="/"
                      clickable="False"/>
        <ProjectCard title="DIGISKETCH"
                      desc="An android app that scans and digitizes pencil sketches."
                      cover="https://i.imgur.com/TaIRxL7.jpg"
                      link="https://play.google.com/store/apps/details?id=com.studio764.digisketch"
                      clickable="True"/>
        <ProjectCard title="CLASSMEET"
                      desc="Social website that finds and connects fellow classmates, determined by similarity in
                            class schedule and major."
                      cover="https://i.imgur.com/QhElxHA.png"
                      link="https://github.com/willhtun/ClassMeet"
                      clickable="True"/>
        <ProjectCard title="CRYSTAL COLLECTOR"
                      desc="A Final Fantasy inspired 3D platformer game created using WebGL, JavaScript and blender."
                      cover="https://i.imgur.com/pLHA93k.png"
                      link="https://intro-graphics-master.github.io/term-project-16/"
                      clickable="True"/>
        <ProjectCard title="HOMEPAL"
                      desc="Android app that notifies upcoming billing due dates, logs payment history, and tracks
                            payments among housemates."
                      cover="https://i.imgur.com/rE6q7V6.png"
                      link="https://github.com/willhtun/HomePal"
                      clickable="True"/>
        <ProjectCard title="WALL-MOUNTED NOTIFICATION CENTER"
                      desc="Repurposed laptop screen powered by Raspberry Pi to display weather, calendar, news and
                            note snippets accessible via PC and smartphones."
                      cover="https://i.imgur.com/CU8xmeN.png"
                      link="/"
                      clickable="False"/>
        <ProjectCard title="SHOOT-A-TANK"
                      desc="Two player turn based projectile shooting game coded on a Spartan-6 ."
                      link="https://github.com/willhtun/Shoot-a-Tank"
                      cover="https://i.imgur.com/ecZfeNQ.png"
                      clickable="True"/>
        <ProjectCard title="UNTITLED VIDEO GAME PROJECT"
                      desc="3D role-playing video game being developed in Unity Engine."
                      link="/"
                      cover="https://i.imgur.com/782VguE.png"
                      clickable="False"/>
        <div style={{height: 500}}></div>
      </div>
    );
  }
}

export default Projects;
