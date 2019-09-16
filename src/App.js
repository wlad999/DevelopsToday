import React from "react";
import "./App.css";
import PostsContainer from "./pages/Posts/PostsContainer";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import { Route } from "react-router-dom";
import SelectPost from "./pages/Posts/SelectPost.jsx";

function App() {
  return (
    <div className="app-wrapper">
      <Route exact path="/" render={props => <PostsContainer {...props} />} />
      <Route path="/contact" render={props => <Contact {...props} />} />
      <Route path="/about" render={props => <About {...props} />} />
      <Route path="/posts/:id" render={props => <SelectPost {...props} />} />
    </div>
  );
}

export default App;
