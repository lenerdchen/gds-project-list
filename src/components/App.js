import React from "react";
import { hot } from "react-hot-loader";
import Nav from "./Nav";
import Home from "./Home";
import Routes from "../routes";

class App extends React.Component {
  state = {
    projects: [
      {
        title: "lol",
        url: "https://google.com.sg"
      },
      {
        title: "lol2",
        url: "https://google.com.cn"
      }
    ]
  }

  addProject = (project) => {
    //1. Take a copy of existing state
    const projects = [...this.state.projects];
    //2. Add new project to projects variable
    projects.push(project);
    //3. Set new projects object to state
    this.setState({ projects: projects });
  }

  render = () => {
    return (
      <div>
        <Nav />
        <Home projects={this.state.projects} addProject={this.addProject} />
        {/* <Routes projects={this.state.projects} /> */}
      </div>
    );
  }
}

export default hot(module)(App);
