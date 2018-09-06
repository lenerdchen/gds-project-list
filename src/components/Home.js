import React from "react";
import styled from "styled-components";
import Project from "./Project";

const Wrapper = styled.div`
  margin: 2em;
`;

const Header = styled.h1`
  font-size: 3em;
  font-family: Roboto;
`;

const List = styled.ul`
  list-style: none;
  font-family: Roboto;
  font-size: 2em;
  margin-left: -40px;
`;

class Home extends React.Component {
  render = () => {
    return (
      <Wrapper>
        <Header>Home</Header>
        <div>
          <List>
            {Object.keys(this.props.projects).map(key => (
              <Project key={key} details={this.props.projects[key]} />
            ))}
          </List>
        </div>
      </Wrapper>
    );
  };
}

export default Home;
