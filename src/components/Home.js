import React from "react";
import styled from "styled-components";

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
  margin-left: -40px;

  li {
    padding-top: 0.5em;
    margin-bottom: 2em;

    span.title {
      font-size: 2em;
      line-height: 2em;
    }

    span.desc {
      font-size: 1.6em;
      line-height: 1.6em;
    }
  }

  button {
    background-color: #000;
    border: none;
    color: white;
    padding: 10px 10px;
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2em;
    font-family: inherit;
  }
`;

class Home extends React.Component {
  render = () => {
    return (
      <Wrapper>
        <Header>Home</Header>
        <div>
          {this.props.projects.map(project => {
            return (
              <List>
                <li key={project.title}>
                  <a href={project.url}>
                    <span className="title">{project.title}</span>
                  </a>
                  <br />
                  <span className="desc">{project.desc}</span>
                  <br />
                  <button href={project.url}>Do it!</button>
                </li>
              </List>
            );
          })}
        </div>
      </Wrapper>
    );
  };
}

export default Home;
