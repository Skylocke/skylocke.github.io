import React, { Component } from 'react';
import './thumbnail.css';
// import './technology-icons.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: {
        "HTML5": { icon: "icon-html5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
        "CSS3": { icon: "icon-css3", href: "https://www.w3schools.com/css/css3_intro.asp" },
        "JavaScript": { icon: "icon-js", href: "https://www.javascript.com/" },
        "jQuery": { icon: "icon-jquery", href: "https://jquery.com/" },
        "Bootstrap": { icon: "icon-bootstrap", href: "http://getbootstrap.com/" },
        "Node.js": { icon: "icon-nodejs", href: "https://nodejs.org/" },
        "AngularJS": { icon: "icon-angular", href: "https://angularjs.org/" },
        "ReactJS": { icon: "icon-react", href: "https://facebook.github.io/react/" },
        "PostgreSQL": { icon: "icon-postgres", href: "https://www.postgresql.org/" },
        "MongoDB": { icon: "icon-mongodb", href: "https://www.mongodb.com/" },
        "Heroku": { icon: "icon-heroku", href: "https://www.heroku.com/" },
        "Adobe Photoshop": { icon: "icon-photoshop", href: "https://www.adobe.com/products/photoshop.html" },
        "Adobe Illustrator": { icon: "icon-illustrator", href: "https://www.adobe.com/products/illustrator.html" },
        "A-Frame VR": { icon: "icon-custom icon-cardboard-white", href: "https://aframe.io/", spaceNeeded: "\u00A0\u00A0" }
      }
    }
  }

  render() {
    return (
      <a className="thumbnail-16-9" id={this.props.thumb} target="_blank" href={this.props.href}>
        <a className="thumbnail-16-9-overlay" target="_blank" href={this.props.href}>
          <div target="_blank" href={this.props.href} title={this.props.name}>
            <h4>{this.props.name}</h4>
          </div>
          <p className="tech-icons">
            {this.techIcons()}
          </p>
          <p className="thumbnail-desc">
            {this.props.desc}
          </p>
          <p className="thumbnail-extra">
            <a target="_blank" href={this.props.github}>
              <span className="icon-github-circle" title="see the code on github"></span>
            </a>
          </p>
        </a>
      </a>
    );
  }

  techIcons() {
    return this.props.tech.map(tech => {
      return (
        <a target="_blank" href={this.state.tech[tech].href} key={tech}>
          <span className={this.state.tech[tech].icon} title={tech}>
          {this.state.tech[tech].spaceNeeded}
          </span>
        </a>
      )
    });
  }

}

export default Thumbnail;
