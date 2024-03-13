import "../src/app/globals.css";
import { ThemeProvider } from "next-themes";
import Theme from "./Theme";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "dark",
    toolbar: {
      items: ["dark", "light"],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, { globals }) => (
    <ThemeProvider>
      <Theme theme={globals.theme ? globals.theme : "dark"} />
      <Story />
    </ThemeProvider>)
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
