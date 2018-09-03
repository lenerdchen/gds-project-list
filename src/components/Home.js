import React from "react";
import styled from "styled-components";

const List = styled.div`
  ul {
    list-style-type: none;
    font-family: Roboto, san-serif;

    li {
      padding-top: 10px;

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
              <ul key={project.title}>
                <li>
                  <a href={project.url}>
                    <span className="title">{project.title}</span>
                  </a>
                  <br />
                  <span className="desc">{project.desc}</span>
                  <br />
                  <button href={project.url}>Do it!</button>
                </li>
              </ul>
            );
          })}
        </List>
      </div>
    );
  };
}

export default Home;
