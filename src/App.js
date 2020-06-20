import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
// import { useEffect, useState } from "react";

import useFadeIn from "./useFadeIn";
import useNetwork from "./useNetwork";

export default function App() {
    const ref = useFadeIn(3, 0.5);
    const logNet = (online) => {
        console.log(online ? "Online" : "Offline");
    };
    const net = useNetwork(logNet);
    return (
        <div className="App">
            <h1 {...ref}>Hello</h1>
            <h2>{net ? "Online" : "Offline"}</h2>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
