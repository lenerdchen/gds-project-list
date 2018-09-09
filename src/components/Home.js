import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Header = styled.h1`
  display: grid;
  // grid-column: span 3;
  justify-content: center;
  align-items: center;
  font-size: 1.6em;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 200px;
`;

class Home extends React.Component {
  render = () => {
    return (
      <ListWrapper>
        <Header>Experiments List</Header>
        {Object.keys(this.props.projects).map(key => (
          <Project key={key} details={this.props.projects[key]} />
        ))}
      </ListWrapper>
    );
  };
}

export default Home;
