import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useEffect, useState } from "react";

import useInput from "./useInput/useInput";
import useTabs from "./useTabs/useTabs";
import useTitle from "./useTitle/index";
import useClick from "./useClick/index";
import useHover from "./useHover";
import useConfirm from "./useConfirm";
import usePreventLeave from "./usePreventLeave";
import useBeforeLeave from "./useBeforeLeave";

export default function App() {
    const noAt = (value) => !value.includes("@");
    const name = useInput("Mr. ", noAt);
    const { currentItem, changeItem } = useTabs(0, tabs);

    const [number, setNumber] = useState(0);
    const [number_2, setNumber_2] = useState(0);
    const handleNumber = () => {
        console.log(number);
    };
    useEffect(handleNumber, [number, number_2]);

    const setLog = () => {
        console.log("hell-o");
    };
    const logger = useClick(setLog);

    const setLog2 = () => {
        console.log("hover");
    };
    const hover = useHover(setLog2);

    const MSG = "Are you sure?";

    const delWorld = () => {
        console.log("Delete the world!");
    };

    const letItbeWorld = () => {
        console.log("Let it be!");
    };

    const confirmAction = useConfirm(MSG, delWorld, letItbeWorld);

    const { enablePrevent, disablePrevent } = usePreventLeave();

    useBeforeLeave(letItbeWorld);

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 3000);
    useEffect(() => {
        return () => titleUpdater;
    });
    return (
        <div className="App">
            <h1 ref={logger}>Hello</h1>
            <input placeholder="Name" {...name} />
            <div>
                {tabs.map((tab, index) => (
                    <button key={tab.id} onClick={() => changeItem(index)}>
                        {tab.id}
                    </button>
                ))}
                <h2 ref={hover}>{currentItem.content}</h2>
            </div>
            <div>
                <button onClick={() => setNumber(number + 1)}>{number}</button>
                <button onClick={() => setNumber_2(number_2 + 1)}>
                    {number_2}
                </button>
            </div>
            <div>
                <button onClick={confirmAction}>Del</button>
                <button onClick={enablePrevent}>Protect</button>
                <button onClick={disablePrevent}>Unprotect</button>
            </div>
        </div>
    );
}

const tabs = [
    {
        id: 1,
        content: "First tab",
    },
    {
        id: 2,
        content: "Second tab",
    },
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
