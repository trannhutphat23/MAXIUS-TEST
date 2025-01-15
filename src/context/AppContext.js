"use client"
import { useState, createContext } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isEnLan, setIsEnLan] = useState(true);
    const [isClick, setIsClick] = useState(false);

    return <AppContext.Provider value={{
        currentPage, setCurrentPage,
        isEnLan, setIsEnLan,
        isClick, setIsClick
    }}>
        {children}
    </AppContext.Provider>
}