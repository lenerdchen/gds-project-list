import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  padding-top: 0.5em;
  margin-bottom: 2em;

  span.title {
    font-size: 1.2em;
    margin-bottom: 1em;
  }
`;

const Button = styled.button`
  background-color: #000;
  border: none;
  color: white;
  padding: 10px 10px;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
`;

class Project extends React.Component {
  render() {
    const { title, desc, url } = this.props.details;

    return (
      <ListItem>
        <span class="title">
          <a href={title}>{title}</a>
        </span>
        <br />
        <span class="desc">{desc}</span>
        <br />
        <Button href={url}>Participate</Button>
      </ListItem>
    );
  }
}

export default Project;
