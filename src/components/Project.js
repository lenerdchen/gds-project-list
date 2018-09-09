import React from "react";
import styled from "styled-components";

const ListItem = styled.a`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  padding: 2em 2em 2.5em 2em;
  color: #555;
  text-decoration: none;

  align-items: top;

  border: 1px solid #adb3b8;
  border-radius: 4px;
  background: white;

  :hover,
  :focus {
    border: 1px solid #1986e6;
    cursor: pointer;
    color: #1986e6;
  }

  .title {
    font-size: 1.6em;
    font-weight: 600;
  }
`;

class Project extends React.Component {
  render() {
    const { title, desc, url } = this.props.details;

    return (
      <ListItem href={url}>
        <span className="title">{title}</span>
        <span className="desc">{desc}</span>
      </ListItem>
    );
  }
}

export default Project;
