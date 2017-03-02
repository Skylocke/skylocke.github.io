import React, { Component } from 'react';
import './thumbnail.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: {
        "HTML5": { icon: "icon-html5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        "CSS3": { icon: "icon-css3", href: "https://www.w3schools.com/css/css3_intro.asp" },
        "JavaScript": { icon: "icon-js", href: "https://www.javascript.com/" },
        "JQuery": { icon: "icon-jquery", href: "https://jquery.com/" },
        "Bootstrap": { icon: "icon-bootstrap", href: "http://getbootstrap.com/" },
        "Node.js": { icon: "icon-nodejs", href: "https://nodejs.org/" },
        "AngularJS": { icon: "icon-angular", href: "https://angularjs.org/" },
        "ReactJS": { icon: "icon-react", href: "https://facebook.github.io/react/" },
        "PostgreSQL": { icon: "icon-postgres", href: "https://www.postgresql.org/" },
        "MongoDB": { icon: "icon-mongodb", href: "https://www.mongodb.com/" },
        "Heroku": { icon: "icon-heroku", href: "https://www.heroku.com/" },
        "Adobe Photoshop": { icon: "icon-photoshop", href: "https://www.adobe.com/products/photoshop.html" },
        "A-Frame VR": { icon: "icon-custom icon-cardboard-white", href: "https://aframe.io/" }
      }
    }
  }

  render() {
    return (
      <div className="thumbnail-16-9" id={this.props.thumb}>
        <div className="thumbnail-16-9-overlay">
          <a target="_blank" href={this.props.href}>
            <h4>{this.props.name}</h4>
          </a>
          <p className="tech-icons">
            {this.techIcons()}
          </p>
        </div>
      </div>
    );
  }

  techIcons() {
    return this.props.tech.map(tech => {
      return (
        <a target="_blank" href={this.state.tech[tech].href} key={tech}>
          <span className={this.state.tech[tech].icon} title={tech}></span>
        </a>
      )
    });
  }

}

export default Thumbnail;
