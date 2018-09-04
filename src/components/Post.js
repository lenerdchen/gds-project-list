import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2em;
`;

const Header = styled.h1`
  font-family: Roboto;
  font-size: 3em;
`;

const InputText = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-family: Roboto;
  font-size: 1em;
  color: #555;
  margin-bottom: 1em;
`;

const InputField = styled.input`
  font-family: Roboto;
  font-size: 2em;
  border: none;
  border-bottom: 2px solid #aaa;
  padding-bottom: 0.2em;
  margin-bottom: 2em;

  ::placeholder {
    color: #aaa;
  }

  :focus {
    border: none;
    outline: 2px solid #aaa;
    outline-offset: 0.2em;
    border-bottom: 2px solid #000;
  }
`;

const InputTextArea = styled.textarea`
  font-family: Roboto;
  font-size: 2em;
  border: none;
  border-bottom: 2px solid #aaa;
  margin-bottom: 2em;
  padding-bottom: 0.2em;
  height: auto;

  ::placeholder {
    color: #aaa;
  }

  :focus {
    border: none;
    outline: 2px solid #aaa;
    outline-offset: 0.2em;
    border-bottom: 2px solid #000;
  }
`;

const Button = styled.button`
  background-color: #000;
  border: none;
  color: white;
  padding: 10px 10px;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2em;
  font-family: Roboto;
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
      <Wrapper>
        <Header>Post an Experiment</Header>
        <InputText>
          <InputLabel>What's the name of your experiment?</InputLabel>
          <InputField
            name="title"
            type="text"
            onChange={this.handleChange}
            placeholder="Give it something catchy!"
          />
        </InputText>
        <InputText>
          <InputLabel>What do you want participants to do?</InputLabel>
          <InputTextArea
            name="desc"
            type="text"
            onChange={this.handleChange}
            placeholder="What's the goal, how long will they take, and what's in it for them?"
          />
        </InputText>
        <InputText>
          <InputLabel>What's the URL of your experiment?</InputLabel>
          <InputField
            name="url"
            type="text"
            onChange={this.handleChange}
            placeholder="https://..."
          />
        </InputText>
        <Button onClick={this.handleClick}>Post it!</Button>
      </Wrapper>
    );
  };
}

export default Post;
