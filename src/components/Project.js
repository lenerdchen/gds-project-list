import React from "react";
import styled from "styled-components";

const ListItem = styled.a`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid #adb3b8;
  border-radius: 4px;
  background: white;

  :hover {
    border: 1px solid #1986e6;
    cursor: pointer;
  }
`;

class Project extends React.Component {
  render() {
    const { title, desc, url } = this.props.details;

    return (
      <ListItem href={url}>
        {title}
        <br />
        {desc}
      </ListItem>
    );
  }
}

export default Project;
