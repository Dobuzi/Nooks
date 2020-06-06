import { useEffect, useRef } from "react";

export const useClick = onClick => {
    const element = useRef();

    const clicker = () => {
        if (element.current) {
            element.current.addEventListener("click", onClick);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("click", onClick);
            };
        }
    }

    useEffect(clicker, []);

    return element;
}