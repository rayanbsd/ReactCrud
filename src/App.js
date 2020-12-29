import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Navbar from "./components/Navbar";
import store from "./store";
import EditPost from "./components/EditPost";
import { BrowserRouter, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/posts" component={Posts} />
            <Route path="/editpost/:id" component={EditPost} />
          </BrowserRouter>
          {/*  <PostForm />
          <hr />
          <Posts /> */}
        </div>
      </Provider>
    );
  }
}

export default App;
