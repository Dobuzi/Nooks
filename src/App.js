import React from "react";
import ReactDOM from "react-dom";
import './App.css';

import useInput from "./useInput"

export default function App() {
  const noAt = value => !value.includes("@");
  const name = useInput("Mr. ", noAt);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);