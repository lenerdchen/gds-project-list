import React from "react";
import styled from "styled-components";

const InputText = styled.div`
  display: flex;
  flex-direction: column;
`;

class Post extends React.Component {
  state = {
    title: "",
    desc: "",
    url: ""
  };

  titleRef = React.createRef();
  descRef = React.createRef();
  urlRef = React.createRef();

  handleClick = () => {
    this.props.addProject(this.state);
    alert("Added new experiment to projects state");
  };

  handleTitleChange = () => {
    this.setState({ title: this.titleRef.current.value });
  };

  handleDescChange = () => {
    this.setState({ desc: this.descRef.current.value });
  };

  handleUrlChange = () => {
    this.setState({ url: this.urlRef.current.value });
  };

  render = () => {
    return (
      <div>
        <h1>Post an Experiment</h1>
        <InputText>
          <label>title</label>
          <input
            type="text"
            ref={this.titleRef}
            onChange={this.handleTitleChange}
          />
        </InputText>
        <InputText>
          <label>description</label>
          <textarea
            type="text"
            ref={this.descRef}
            onChange={this.handleDescChange}
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
        <button onClick={this.handleClick}>Post</button>
      </div>
    );
  };
}

export default Post;
