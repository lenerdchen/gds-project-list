import React from "react";
import styled from "styled-components";

const InputText = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-style-type: none;
`;

class Home extends React.Component {
  state = {
    title: "",
    url: ""
  };

  titleRef = React.createRef();
  urlRef = React.createRef();

  handleClick = () => {
    this.props.addProject(this.state);
  }

  handleTitleChange = () => {
    this.setState({ title: this.titleRef.current.value });
  }

  handleUrlChange = () => {
    this.setState({ url: this.urlRef.current.value });
  }

  render = () => {
    return (
      <div>
        <h1>Home</h1>
        <InputText>
          <label>title</label>
          <input
            type="text"
            ref={this.titleRef}
            onChange={this.handleTitleChange}
          />
        </InputText>
        <InputText>
          <label>url</label>
          <input
            type="text"
            ref={this.urlRef}
            onChange={this.handleUrlChange}
          />
        </InputText>
        <button
          onClick={this.handleClick}
        >
          Post
        </button>
        <List>
          {this.props.projects.map(project => {
            return (
              <li key={project.title}>
                <a href={project.url}>
                  <span>{project.title}</span>
                </a>
              </li>
            );
          })}
        </List>
      </div>
    );
  }
}

export default Home;
