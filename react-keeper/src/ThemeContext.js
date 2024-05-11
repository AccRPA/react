import { createContext } from "react";

// a context with an object that has to be initialized with useState
export const ThemeContext = createContext({
    theme: 'light',
    setTheme: () => {}
});