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

  handleClick = () => {
    this.props.addProject(this.state);
    alert("Added new experiment to projects state");
  };

  handleChange = event => {
    const newValue = event.currentTarget.value;
    const targetTitle = event.currentTarget.name;
    this.state = { ...this.state, [targetTitle]: newValue };
  };

  render = () => {
    return (
      <div>
        <h1>Post an Experiment</h1>
        <InputText>
          <label>title</label>
          <input name="title" type="text" onChange={this.handleChange} />
        </InputText>
        <InputText>
          <label>description</label>
          <textarea name="desc" type="text" onChange={this.handleChange} />
        </InputText>
        <InputText>
          <label>url</label>
          <input name="url" type="text" onChange={this.handleChange} />
        </InputText>
        <button onClick={this.handleClick}>Post</button>
      </div>
    );
  };
}

export default Post;
