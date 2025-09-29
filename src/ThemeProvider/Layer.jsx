// src/ThemeProvider/Layer.jsx
import React, { createContext, useContext } from "react";
import { useLocation } from "react-router-dom";
import { theme as defaultTheme } from "./theme.js";
import Navbar from "./Navbar/Navbar.jsx";

const ThemeContext = createContext(defaultTheme);

export const Layer = ({ children }) => {
    const location = useLocation();
    const noNavbarRoutes = ["/login", "/signup"];

    return (
        <ThemeContext.Provider value={defaultTheme}>
            <div style={{ backgroundColor: defaultTheme.colors.background, color: defaultTheme.colors.textPrimary, minHeight: "100vh", fontFamily: defaultTheme.fontFamily.sans }}>
                {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
                <main className={`md:ml-64`}>
                    {children}
                </main>
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);