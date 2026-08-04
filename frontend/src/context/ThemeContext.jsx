import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "skillnova-theme";

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark" || saved === "system") {
      return saved;
    }
  } catch {
    // ignore storage errors
  }
  return "system";
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const apply = (resolved) => {
      root.classList.toggle("dark", resolved === "dark");
      root.style.colorScheme = resolved;
    };

    if (theme === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = (event) => apply(event.matches ? "dark" : "light");

      apply(mq.matches ? "dark" : "light");
      mq.addEventListener("change", handler);

      return () => mq.removeEventListener("change", handler);
    }

    apply(theme);
  }, [theme]);

  const setThemeMode = (mode) => {
    if (mode !== "light" && mode !== "dark" && mode !== "system") return;

    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // ignore storage errors
    }

    setTheme(mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
};
