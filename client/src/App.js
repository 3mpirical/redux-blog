import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import { Default } from "./components/Default";
import { Navbar } from "./components/Navbar";
import FetchBlogs from "./components/FetchBlogs";



class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={FetchBlogs} />
          <Route component={Default} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
