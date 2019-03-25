import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import { BlogIndex } from "./components/BlogIndex";
import { Default } from "./components/Default";
import { Navbar } from "./components/Navbar";


class App extends Component {
  render() {
    return (
      <Fragment>
          <Navbar />
        <Switch>
          <Route exact path="/" component={BlogIndex} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
