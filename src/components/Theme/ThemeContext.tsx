"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext({ toggle: () => {}, mode: false });

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState(false);

  const toggle = () => setMode((previous) => !previous);

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <html lang="en" className={`theme ${mode ? 'light' : 'dark'}`}>{children}</html>
    </ThemeContext.Provider>
  )
}