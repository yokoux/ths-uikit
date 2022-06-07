// @ts-nocheck
import { storiesOf } from "@storybook/react";
import { Menu, MenuItem, SubMenu } from ".";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme } from "@/theme";
import { Aside } from "../container";

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

export const horizontalMenu = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu>
        <MenuItem icon={<SampleIcon />} index="1" label="Home" />
        <MenuItem index="2" label="About" />
        <SubMenu icon={<SampleIcon />} label="Sub Menu">
          <MenuItem icon={<SampleIcon />} index="3" label="Sub1" />
          <MenuItem index="4" label="Sub2" />
        </SubMenu>
      </Menu>
    </ThemeProvider>
  );
};

export const verticalMenu = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu direction="vertical">
        <MenuItem icon={<SampleIcon />} index="1" label="Home" />
        <MenuItem index="2" label="About" />
        <SubMenu icon={<SampleIcon />} label="Sub Menu">
          <MenuItem icon={<SampleIcon />} index="3" label="Sub1" />
          <MenuItem index="4" label="Sub2" />
        </SubMenu>
      </Menu>
    </ThemeProvider>
  );
};

export const horizontalDarkMenu = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Menu mode="dark">
        <MenuItem icon={<SampleIcon />} index="1" label="Home" />
        <MenuItem index="2" label="About" />
        <SubMenu icon={<SampleIcon />} label="Sub Menu">
          <MenuItem icon={<SampleIcon />} index="3" label="Sub1" />
          <MenuItem index="4" label="Sub2" />
        </SubMenu>
      </Menu>
    </ThemeProvider>
  );
};

export const verticalDarkMenu = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Aside width="300px">
        <Menu direction="vertical" mode="dark">
          <MenuItem icon={<SampleIcon />} index="1" label="Home" />
          <MenuItem index="2" label="About" />
          <SubMenu icon={<SampleIcon />} label="Sub Menu">
            <MenuItem icon={<SampleIcon />} index="3" label="Sub1" />
            <MenuItem index="4" label="Sub2" />
          </SubMenu>
        </Menu>
      </Aside>
    </ThemeProvider>
  );
};

storiesOf("LitheUI/Menu", module)
  .add("HorizontalMenu", horizontalMenu)
  .add("VerticalMenu", verticalMenu)
  .add("HorizontalDarkMenu", horizontalDarkMenu)
  .add("VerticalDarkMenu", verticalDarkMenu);
