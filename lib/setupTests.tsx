import { ThemeProvider } from "@emotion/react";
import "@testing-library/jest-dom/extend-expect";
import { render, RenderOptions } from "@testing-library/react";
import React, { FC, PropsWithChildren, ReactElement } from "react";
import { defaultTheme } from "./theme";

const TestThemeProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const xRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: TestThemeProvider, ...options });

export * from "@testing-library/react";
export { xRender as render };
