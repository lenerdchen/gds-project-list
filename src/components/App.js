import React from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import Nav from "./Nav";
import Home from "./Home";
import Post from "./Post";
import base from "../base";

const BaseStyle = styled.div`
  font-family: Segoe UI, Roboto;
  font-size: 1em;
  margin: 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: auto;
  grid-template-rows: 50px 1fr;
`;

class App extends React.Component {
  state = {
    projects: {}
  };

  componentDidMount() {
    console.log(this.state);
    this.ref = base.syncState(`/projects`, {
      context: this,
      state: "projects"
    });
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  addProject = project => {
    //1. Take a copy of existing state
    const projects = { ...this.state.projects };
    //2. Add new project to projects variable
    projects[`project${Date.now()}`] = project;
    //3. Set new projects object to state
    this.setState({ projects: projects });
  };

  render = () => {
    return (
      <BaseStyle>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home {...this.state} projects={this.state.projects} />
            )}
          />
          <Route
            exact
            path="/post"
            render={() => <Post addProject={this.addProject} />}
          />
        </Switch>
      </BaseStyle>
    );
  };
}

export default hot(module)(App);
