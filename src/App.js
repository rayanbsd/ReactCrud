import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
import PostList from "./components/posts/PostList";
import Navbar from "./components/navigation/Navbar";
import store from "./store";
import EditPost from "./components/posts/EditPost";
import { BrowserRouter, Route } from "react-router-dom";
require('dotenv').config()
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Navbar />          
            <Route exact path="/" component={PostList} />
            <Route path="/editpost/:id" component={EditPost} />
          </BrowserRouter>   
        </div>
      </Provider>
    );
  }
}

export default App;
