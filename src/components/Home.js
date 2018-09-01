import React from "react";
import styled from "styled-components";

const InputText = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style-type: none;
  li {
    padding-top: 10px;
  }
`;

class Home extends React.Component {
  render = () => {
    return (
      <div>
        <h1>Home</h1>
        <List>
          {this.props.projects.map(project => {
            return (
              <li key={project.title}>
                <a href={project.url}>{project.title}</a>
                <br />
                <span>{project.desc}</span>
                <br />
                <a href={project.url}>Do it!</a>
              </li>
            );
          })}
        </List>
      </div>
    );
  };
}

export default Home;
