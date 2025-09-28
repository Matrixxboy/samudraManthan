// src/ThemeProvider/Layer.jsx
import React, { createContext, useContext } from "react";
import { theme as defaultTheme } from "./theme.js";

const ThemeContext = createContext(defaultTheme);

export const Layer = ({ children }) => {
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
