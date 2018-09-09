import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PostWrapper = styled.div`
  display:grid;
  grid-area: content;
  justify-items: stretch;
  align-items: center;
  grid-gap: 20px
  grid-template-columns: 1fr;
  grid-template-rows: auto;

  .button {
    background-color: #778088;
    border-radius: 4px;
    color: white;
    padding: 0.5em 1em;
    text-align: center;
    text-decoration: none;

    :hover,
    :focus {
      background-color: #1986e6;
      cursor: pointer;
    }
  }
`;

const Header = styled.h1`
  display: grid;
  grid-column: 1 / -1;
  font-size: 1.6em;
  color: #555;
`;

const InputText = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  color: #555;
  margin-bottom: 0.5em;
`;

const InputField = styled.input`
  font-size: 1em;
  border: 1px solid #adb3b8;
  margin: 0.25em 0
  padding: 0.5em;
  border-radius: 4px;

  ::placeholder {
    color: #aaa;
  }

  :hover {
    border-color: #778088;
  }

  :focus {
    outline: 0;
    border-color: #1986e6;
  }
`;

const InputTextArea = styled.textarea`
  font-size: 1em;
  border: 1px solid #adb3b8;
  margin: 0.25em 0;
  padding: 0.5em;
  border-radius: 4px;
  height: auto;

  ::placeholder {
    color: #aaa;
  }

  :hover {
    border-color: #778088;
  }

  :focus {
    outline: 0;
    border-color: #1986e6;
  }
`;

// const Button = styled.a`
//   display: grid;
//   background-color: #778088;
//   border-radius: 4px;
//   color: white;
//   padding: 0.5em 1em;
//   text-align: center;
//   text-decoration: none;

//   :hover,
//   :focus {
//     background-color: #1986e6;
//     cursor: pointer;
//   }
// `;

class Post extends React.Component {
  state = {
    title: "",
    desc: "",
    url: ""
  };

  handleClick = () => {
    const newProject = this.state;
    this.props.addProject(newProject);
    alert("Experiment Successfully Added");
  };

  handleChange = event => {
    const newValue = event.currentTarget.value;
    const targetTitle = event.currentTarget.name;
    this.state = { ...this.state, [targetTitle]: newValue };
  };

  render() {
    return (
      <PostWrapper>
        <Header>Post an Experiment</Header>
        <InputText>
          <InputLabel>What's the name of your experiment?</InputLabel>
          <InputField
            name="title"
            onChange={this.handleChange}
            type="text"
            placeholder="Give it something catchy!"
          />
        </InputText>
        <InputText>
          <InputLabel>What do you want participants to do?</InputLabel>
          <InputTextArea
            name="desc"
            onChange={this.handleChange}
            type="text"
            placeholder="What's the goal, how long will they take, and what's in it for them?"
          />
        </InputText>
        <InputText>
          <InputLabel>What's the URL of your experiment?</InputLabel>
          <InputField
            name="url"
            onChange={this.handleChange}
            type="text"
            placeholder="https://..."
          />
        </InputText>
        <Link className="button" onClick={this.handleClick} to="/">
          Post it!
        </Link>
      </PostWrapper>
    );
  }
}

export default Post;
