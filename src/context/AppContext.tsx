import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import type { AppContextData } from "../interface/interfaces";

interface AppContextProps {
  children: ReactNode;
}

const AppContext = createContext({} as AppContextData);

export function AppContextProvider({ children }: AppContextProps) {
  const [theme, setTheme] = useState(() => localStorage.theme === "light");

  function handleToggleTheme() {
    setTheme(!theme);
  }

  useEffect(() => {
    const rootElement = window.document.documentElement;
    const currentTheme = theme;

    const prevTheme = currentTheme ? "dark" : "light";
    rootElement.classList.remove(prevTheme);

    const nextTheme = currentTheme ? "light" : "dark";
    rootElement.classList.add(nextTheme);

    localStorage.setItem("theme", nextTheme);
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        handleToggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
