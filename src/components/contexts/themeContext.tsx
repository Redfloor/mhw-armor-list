import {createContext, PropsWithChildren, useState} from "react";

export const ThemeContext = createContext({
    theme: '',
    setTheme: (theme: string) => {},
});

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
    const [theme, setTheme] = useState('default')
    return <ThemeContext.Provider value={{theme, setTheme}} >
        {children}
    </ThemeContext.Provider>

}