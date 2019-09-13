import React, { Component } from 'react';
import './index.css';

class ProjectCard extends Component {
  render() {
    return (
      <div className="ProjectCard">
        <div className="ProjectCard-Wrapper">
          <div className="ProjectCard-A">
            {this.props.clickable == "True" ? 
              <a href={this.props.link} target="_blank">
                <img className="ProjectCardImage" src={this.props.cover} alt="Project"/>
              </a> 
              : 
              <img className="ProjectCardImage" src={this.props.cover} alt="Project"/>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
