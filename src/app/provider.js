"use client"
import { ThemeProvider  } from "next-themes";

export function Provider({ children, ...props }) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}