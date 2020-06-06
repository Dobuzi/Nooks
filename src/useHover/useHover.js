import { useRef, useEffect } from 'react';

export const useHover = onHover => {
    const element = useRef();

    const hovering = () => {
        if (element.current) {
            element.current.addEventListener("mouseenter", onHover);
        }
        return () => {
            if (element.current) {
                element.current.removeEventListener("mouseenter", onHover);
            }
        };
    }

    useEffect(hovering, []);
    
    return element;
};