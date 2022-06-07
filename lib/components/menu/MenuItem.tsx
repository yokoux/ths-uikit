import { DefaultTheme, OwnerState } from "@/theme";
import { lighten } from "@/utils";
import styled from "@emotion/styled";
import clsx from "clsx";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  ReactNode,
  useContext,
} from "react";
import { MenuContext } from ".";

export interface MenuItemProps {
  icon?: ReactNode;
  index: string;
  label: string;
  className?: string;
  sx?: CSSProperties;
}

interface MenuItemOwnerState {
  direction: "horizontal" | "vertical";
  activated: boolean;
  mode: "light" | "dark";
  color: "primary" | "secondary" | "success" | "info" | "warning" | "error";
}

const MenuItemRoot = styled.div<OwnerState<MenuItemOwnerState>>(
  ({ theme, ownerState }) => {
    const currentTheme = theme as DefaultTheme;

    return {
      boxSizing: "border-box",
      width: "avaliable",
      minHeight: "1px",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      padding: ".75rem 1rem",
      cursor: ownerState.activated ? "default" : "pointer",

      // underline transition
      transform: "perspective(1px) translateZ(0)",
      position: "relative",
      overflow: "hidden",
      [`&:before`]: {
        content: '""',
        position: "absolute",
        zIndex: -1,
        left: ownerState.activated ? "0" : "51%",
        right: ownerState.activated ? "0" : "51%",
        bottom: 0,
        background: currentTheme.palette[ownerState.color].main,
        height: "4px",
        transitionProperty: "left, right",
        transitionDuration: `${currentTheme.transitions.duration.short}ms`,
        transitionTimingFunction: currentTheme.transitions.easing.easeInOut,
      },

      // icon
      [`& svg`]: {
        marginRight: "1rem",
        fill:
          ownerState.mode === "light"
            ? ownerState.activated
              ? currentTheme.palette[ownerState.color].main
              : currentTheme.palette.text.primary
            : ownerState.activated
            ? currentTheme.palette[ownerState.color].main
            : currentTheme.palette.common.white,
        width: "1.5rem",
        height: "1.5rem",
        transition: `fill ${currentTheme.transitions.duration.short}ms
        ${currentTheme.transitions.easing.easeInOut}`,
      },
      // label
      [`& > div`]: {
        flexGrow: 1,
        lineHeight: 1,
        textAlign: "center",
        color:
          ownerState.mode === "light"
            ? ownerState.activated
              ? currentTheme.palette[ownerState.color].main
              : currentTheme.palette.text.primary
            : ownerState.activated
            ? currentTheme.palette[ownerState.color].main
            : currentTheme.palette.common.white,
        transition: `color ${currentTheme.transitions.duration.short}ms
        ${currentTheme.transitions.easing.easeInOut}`,
      },
      // hover
      [`&:hover`]: {
        [`&:before`]: {
          left: 0,
          right: 0,
        },

        [`& > div`]: {
          color: currentTheme.palette[ownerState.color].main,
        },

        [`& svg`]: {
          marginRight: "1rem",
          fill: currentTheme.palette[ownerState.color].main,
        },
      },
    };
  }
);

export const MenuItem = forwardRef(
  (props: MenuItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { icon, index, label, className, sx } = props;
    const menuContext = useContext(MenuContext);

    const onItemSelected = () => {
      menuContext.onSelect && menuContext.onSelect(index);
    };

    const ownerState: MenuItemOwnerState = {
      direction: menuContext.direction,
      activated: index === menuContext.current,
      mode: menuContext.mode,
      color: menuContext.color,
    };

    return (
      <>
        <MenuItemRoot
          onClick={onItemSelected}
          ownerState={ownerState}
          className={clsx(className)}
          ref={ref}
          style={sx}
        >
          {icon}
          <div>{label}</div>
        </MenuItemRoot>
      </>
    );
  }
);
