import React from "react";
import ReactDOM from "react-dom";
import './App.css';

import useInput from "./useInput/useInput";
import useTabs from "./useTabs/useTabs";

export default function App() {
  const noAt = value => !value.includes("@");
  const name = useInput("Mr. ", noAt);
  const { currentItem, changeItem } = useTabs(0, tabs);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <div>
        {tabs.map((tab, index) => <button onClick={() => changeItem(index)}>{tab.id}</button>)}
        <h2>{currentItem.content}</h2>
      </div>
    </div>
  );
};

const tabs = [
  {
    id: 1,
    content: "First tab"
  },
  {
    id: 2,
    content: "Second tab"
  }
]

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);