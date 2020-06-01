import { useState } from "react";

export default function useTabs(initialTab, allTabs) {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};