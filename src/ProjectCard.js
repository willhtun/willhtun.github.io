import React, { Component } from 'react';
import './index.css';

class ProjectCard extends Component {
  render() {
    return (
      <div className="ProjectCard">
        <div className="ProjectCard-Wrapper">
          <div className="ProjectCard-A">
            <h1> {this.props.title} </h1>
            <p> {this.props.desc} </p>
          </div>
          <div className="ProjectCard-B">
            <img src="https://cdn.vox-cdn.com/thumbor/XDMf9wg6FqspBkvGI09m5c7isjY=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/58088785/jbareham_170921_2006_0051_16x9.0.jpg"/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
