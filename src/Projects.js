import React, { Component } from 'react';
import './index.css';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  render() {
    return (
      <div className="Card">
        <h1> > PROJECTS </h1>
        <br/>
        <ProjectCard title="ONLINE SHOPPING PLATFORM"
                    desc="Online fashion shopping platform designed for college students, with college lifestyle
                          in mind. Currently working part-time as a front-end developer."/>
        <ProjectCard title="CLASSMEET"
                    desc="Social website that finds and connects fellow classmates, determined by similarity in
                          class schedule and major."/>
        <ProjectCard title="HOMEPAL"
                    desc="Android app that notifies upcoming billing due dates, logs payment history, and tracks
                          payments among housemates."/>
        <ProjectCard title="WALL-MOUNTED NOTIFICATION HUB"
                    desc="Repurposed laptop screen powered by Raspberry Pi to display weather, calendar, news and
                          note snippets accessible via PC and smartphones."/>
        <ProjectCard title="SHOOT-A-TANK"
                    desc="Two player turn based projectile shooting game coded on a Spartan-6 ."/>
        <ProjectCard title="UNTITLED VIDEO GAME PROJECT"
                    desc="3D role-playing video game being developed in Unity Engine."/>

      </div>
    );
  }
}

export default Projects;
