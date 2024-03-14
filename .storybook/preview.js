import "../src/app/globals.css";
import { ThemeProvider } from "next-themes";
import ThemeChanger from './ThemeChanger'
import { useEffect, useState } from "react";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "modern",
    toolbar: {
      items: ["dark", "light"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, { globals }) => {
    const [state, setState] = useState(false)
    useEffect(() => {
      setState(true)
    }, [])
    if (!state) return null
    return (
    <ThemeProvider>
      <ThemeChanger theme={globals.theme ? globals.theme : "dark"} />
      <Story />
      </ThemeProvider>
    )
  },
]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
