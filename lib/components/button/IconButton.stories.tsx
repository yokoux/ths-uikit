import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { IconButton } from ".";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "@/theme";

const SampleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className="iconify iconify--ic"
    width="32"
    height="32"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20 1v3h3v2h-3v3h-2V6h-3V4h3V1h2zm-8 12c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm2-9.75V7h3v3h2.92c.05.39.08.79.08 1.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 6.22 7.8 3 12 3c.68 0 1.35.08 2 .25z"></path>
  </svg>
);

export default {
  title: "LitheUI/Button",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <IconButton {...args}>
      <SampleIcon />
    </IconButton>
  </ThemeProvider>
);

export const BasicIconButton = Template.bind({});
BasicIconButton.args = {
  color: "primary",
};
