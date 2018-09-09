import React from "react";
import styled from "styled-components";
import Project from "./Project";

const ListWrapper = styled.div`
  display: grid;
  grid-area: content;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-template-rows: auto 200px;
  grid-auto-rows: 200px;
`;

const Header = styled.h1`
  display: grid;
  grid-column: 1 / -1;
  font-size: 1.6em;
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
