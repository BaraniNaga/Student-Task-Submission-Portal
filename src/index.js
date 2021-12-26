import React from "react";
import { Component } from "react";
import ReactDom from "react-dom";

// const name = "Barani"

// const ele = <h1>Task Submission Portal</h1>;



import Subject from "./Subject";

class App extends Component {
  render() {
    return <h1>Task Submission Portal </h1>;
  }
}


ReactDom.render(<Subject />, document.getElementById("root"));

// ReactDom.render(<App />, document.getElementById("root"));
// const ele = <p>Hi</p>;