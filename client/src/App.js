import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import { BlogIndex } from "./components/BlogIndex";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={BlogIndex} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
