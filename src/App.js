import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import useFullscreen from "./useFullScreen";
import useScroll from "./useScroll";
import useNotification from "./useNotification";

export default function App() {
    const logFull = (isFull) => {
        console.log(isFull ? "isFull" : "isNotFull");
    };
    const { element, triggerFull, exitFull } = useFullscreen(logFull);
    const IMG =
        "https://images.unsplash.com/photo-1538592116845-119a3974c958?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60";
    const IMG_ALT = "red tesla model 3 in sunset";
    const { y } = useScroll();
    const noti = useNotification("Woof", { body: "woof woof" });
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <h3 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>
                Change color by scroll
            </h3>
            <button onClick={noti}>make notification</button>
            <div ref={element}>
                <img src={IMG} alt={IMG_ALT} />
                <button onClick={exitFull}>Exit Full Screen</button>
            </div>
            <button onClick={triggerFull}>Make Full Screen</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
