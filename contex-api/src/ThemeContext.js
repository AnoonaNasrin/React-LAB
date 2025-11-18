import {  createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [theme , setTheme] = useState("light");
    const toggleTheme = ()=> {
     const updatedTheme = theme === "light" ? "dark": "light"
     setTheme(updatedTheme)
    }
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)