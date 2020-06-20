import { useEffect } from "react";

export const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
        const { clientY } = event;
        if (clientY <= 0) {
            onBefore();
        }
    };
    const controller = () => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    };
    useEffect(controller, []);
};