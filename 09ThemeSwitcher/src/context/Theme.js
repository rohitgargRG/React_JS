// import { createContext , useContext } from "react";


// export const ThemeContext = createContext({
//     themeMode: "light",
//     darkTheme : () => {},    // default items
//     lightTheme : () => {},
// });

// // exporting provider from here
// export const ThemeProvider = ThemeContext.Provider

// // exporting custom hooks

// export default function useTheme(){
//     return useContext(ThemeContext)
// }

// // now whenever we need access of any value from ThemeContext
// // we will use useTheme() and will take the access.




import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider


// custom hook
export default function useTheme(){
    return useContext(ThemeContext)
}