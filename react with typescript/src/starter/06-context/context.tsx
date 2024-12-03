import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type (theme values: light, dark, system)
type ThemeContextType = "light" | "dark" | "system";

type ThemeProviderState = {
  theme: ThemeContextType;
  setTheme: (theme: ThemeContextType) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeContextType;
};

// Create the context with the appropriate type
const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  // Initialize theme with the defaultTheme or "light" if none is provided
  const [theme, setTheme] = useState<ThemeContextType>(defaultTheme);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom hook for consuming the context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
