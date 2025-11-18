import { Children, createContext, useContext, useState } from "react";

const ThemeContext = createContext()

export const ThemeProvider = ({Children}) => {
    const [theme , setTheme] = useState("light");
    const toggleTheme = theme === "light" ? "dark": "light"
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>{Children}</ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)