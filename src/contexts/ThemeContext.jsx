import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ThemeContext.Provider;

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return <ThemeProvider value={{ theme, setTheme }}>{children}</ThemeProvider>;
};

export default ThemeContextProvider;
