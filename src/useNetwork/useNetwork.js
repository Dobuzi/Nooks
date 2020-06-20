import { useState, useEffect } from "react";

export const useNetwork = (onChange) => {
    const [status, setStatus] = useState(navigator.onLine);
    onChange(navigator.onLine);
    const handleChange = () => {
        setStatus(navigator.onLine);
    };
    const onOffLine = () => {
        window.addEventListener("online", handleChange);
        window.addEventListener("offline", handleChange);
        return () => {
            window.removeEventListener("online", handleChange);
            window.removeEventListener("offline", handleChange);
        };
    };
    useEffect(onOffLine, []);
    return status;
};
