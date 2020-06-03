import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { useEffect, useState } from "react";

import useInput from "./useInput/useInput";
import useTabs from "./useTabs/useTabs";
import useTitle from "./useTitle/index";

export default function App() {
  const noAt = value => !value.includes("@");
  const name = useInput("Mr. ", noAt);
  const { currentItem, changeItem } = useTabs(0, tabs);
  const [number, setNumber] = useState(0);
  const [number_2, setNumber_2] = useState(0);
  const handleNumber = () => { console.log(number) };
  useEffect(handleNumber, [number, number_2]);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
      <div>
        {tabs.map((tab, index) => <button key={tab.id} onClick={() => changeItem(index)}>{tab.id}</button>)}
        <h2>{currentItem.content}</h2>
      </div>
      <div>
        <button onClick={() => setNumber(number + 1)}>{number}</button>
        <button onClick={() => setNumber_2(number_2 + 1)}>{number_2}</button>
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