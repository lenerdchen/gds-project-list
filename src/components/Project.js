import React from "react";

class Project extends React.Component {
  render() {
    const { title, desc, url } = this.props.details;

    return (
      <li>
        <span>{title}</span>
        <br />
        <span>{desc}</span>
        <br />
        <span>{url}</span>
      </li>
    );
  }
}

export default Project;
