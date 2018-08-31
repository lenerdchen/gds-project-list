import React from "react";
import styled from "styled-components";

const InputText = styled.div`
  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  list-decoration: none;
`;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);

    this.titleRef = React.createRef();
    this.urlRef = React.createRef();
  }

  handleClick() {
    this.props.addProject(this.state);
  }

  handleTitleChange() {
    console.log(this.titleRef.current.value);
    this.setState({ title: this.titleRef.current.value });
  }

  handleUrlChange() {
    console.log(this.urlRef.current.value);
    this.setState({ url: this.urlRef.current.value });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <InputText>
          <label>title</label>
          <input
            type="text"
            ref={this.titleRef}
            onChange={() => {
              this.handleTitleChange();
            }}
          />
        </InputText>
        <InputText>
          <label>url</label>
          <input
            type="text"
            ref={this.urlRef}
            onChange={() => {
              this.handleUrlChange();
            }}
          />
        </InputText>
        <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Post
        </button>
        <List>
          {this.props.projects.map(project => {
            return (
              <li key={project.title}>
                <span>{project.title}</span>
                <span>{project.url}</span>
              </li>
            );
          })}
        </List>
      </div>
    );
  }
}

export default Home;
