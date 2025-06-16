import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark"); // or "light" as default

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
