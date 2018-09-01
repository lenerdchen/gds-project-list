import React from "react";
import { Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader";
import Nav from "./Nav";
import Home from "./Home";
import Post from "./Post";

class App extends React.Component {
  state = {
    projects: [
      {
        title: "lol",
        desc: "search in google singapore",
        url: "https://google.com.sg"
      },
      {
        title: "lol2",
        desc: "build a google for china",
        url: "https://google.com.cn"
      }
    ]
  };

  addProject = project => {
    //1. Take a copy of existing state
    const projects = [...this.state.projects];
    //2. Add new project to projects variable
    projects.push(project);
    //3. Set new projects object to state
    this.setState({ projects: projects });
  };

  render = () => {
    return (
      <div>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                {...this.state}
                projects={this.state.projects}
                addProject={this.addProject}
              />
            )}
          />
          <Route
            exact
            path="/post"
            render={() => <Post addProject={this.addProject} />}
          />
        </Switch>
      </div>
    );
  };
}

export default hot(module)(App);
