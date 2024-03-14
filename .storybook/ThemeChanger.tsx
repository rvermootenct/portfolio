import React from "react"
import { useTheme } from "next-themes"
import { useEffect } from "react"

const ThemeChanger = ({ theme }: { theme: "dark" | "light" }) => {
  const { setTheme } = useTheme();

  useEffect(() => {
    console.log(theme, "theme")
    setTheme(theme)
  }, [setTheme, theme])

  return null;
};

export default React.memo(ThemeChanger)
