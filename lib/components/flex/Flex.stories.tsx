import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Flex } from ".";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "@/theme";
import { Palette } from "@/theme";

export default {
  title: "LitheUI/Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <ThemeProvider theme={defaultTheme}>
    <Flex {...args}>
      <div
        style={{
          width: "60px",
          height: "40px",
          backgroundColor: Palette.redLight,
        }}
      ></div>
      <div
        style={{
          width: "60px",
          height: "40px",
          backgroundColor: Palette.orangeLight,
        }}
      ></div>
      <div
        style={{
          width: "60px",
          height: "40px",
          backgroundColor: Palette.oliveLight,
        }}
      ></div>
    </Flex>
  </ThemeProvider>
);

export const FlexDemo = Template.bind({});
FlexDemo.args = {
  justifyContent: "space-between",
};
