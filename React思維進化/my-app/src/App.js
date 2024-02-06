import React from "react";
import logo from "./logo.svg";
import "./App.css";

const listReactElement = React.createElement(
  "div",
  { id: "wrapper", className: "foo" },
  React.createElement(
    "ul",
    { id: "foo-list", className: "foo-list-class" },
    "Ich bin ein List",
    React.createElement("li", { className: "list-item1" }, "list-item-1"),
    React.createElement("li", { className: "list-item2" }, "list-item-2"),
    React.createElement("li", { className: "list-item3" }, "list-item-3")
    // React.createElement("button", { className: "button-item1" }, "button1")
    // 可以持續以巢狀的方式接續下去（父層 + 子層...）
  ),
  React.createElement(
    "button",
    { id: "the only button", className: "THE BUTTON"},
    "The ONE and ONLY button"
  )
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer ="
        >
          Learn React
        </a>
      </header>
      <div>{listReactElement}</div>
    </div>
  );
}

export default App;
