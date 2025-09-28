// src/context/AuthContext.jsx
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username === "admin" && password === "password") {
            setUser({ username });
            return true;
        }
        return false;
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
