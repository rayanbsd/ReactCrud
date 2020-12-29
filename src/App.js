import React, { Component } from "react";

import "./App.css";
import { Provider } from "react-redux";
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
            
            <Route exact path="/" component={Posts} />
            <Route path="/editpost/:id" component={EditPost} />
          </BrowserRouter>
    
        </div>
      </Provider>
    );
  }
}

export default App;
