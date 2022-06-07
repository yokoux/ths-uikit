import { Colors, DefaultTheme, OwnerState, Palette } from "@/theme";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import clsx from "clsx";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
  useContext,
  useState,
} from "react";
import { MenuContext } from "./Menu";

export interface SubMenuProps {
  icon?: ReactNode;
  label: string;
  className?: string;
  sx?: CSSProperties;
}

interface SubMenuState {
  expanded: boolean;
  direction: "horizontal" | "vertical";
  mode: "light" | "dark";
  color: "primary" | "secondary" | "success" | "info" | "warning" | "error";
}

const SubMenuRoot = styled.div<OwnerState<SubMenuState>>(
  ({ theme, ownerState }) => {
    return {
      position: "relative",
      width: ownerState.direction === "horizontal" ? "fit-content" : "100%",
      minHeight: "1px",
      backgroundColor: "transparent",
    };
  }
);

const SubMenuItem = styled.div<OwnerState<SubMenuState>>(
  ({ theme, ownerState }) => {
    const currentTheme = theme as DefaultTheme;

    return {
      position: "relative",
      width: "avaliable",
      minHeight: "1px",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      padding: ".75rem 1rem",
      cursor: "pointer",

      // underline transition
      transform: "perspective(1px) translateZ(0)",

      overflow: "hidden",
      [`&:before`]: {
        content: '""',
        position: "absolute",
        zIndex: -1,
        left: "51%",
        right: "51%",
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
            ? currentTheme.palette.text.primary
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
            ? currentTheme.palette.text.primary
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

const SubMenuItemList = styled.div<OwnerState<SubMenuState>>(
  ({ theme, ownerState }) => {
    const currentTheme = theme as DefaultTheme;

    const expandDown = keyframes`
        from {
            transform: scaleY(0);
        }
        80% {
            transform: scaleY(1.1);
        }
        to {
            transform: scaleY(1);
        }
    `;

    return {
      width: "avaliable",
      background: ownerState.mode === "light" ? "white" : Colors.Sky[800],
      ...(ownerState.direction === "horizontal"
        ? {
            // horizontal
            position: "absolute",
            left: "0",
            zIndex: 50,
            right: "0",
            top: "100%",
            display: ownerState.expanded ? "block" : "none",
            transformOrigin: "50% 0%",
            animation: `${expandDown} ${currentTheme.transitions.duration.short}ms both`,
            padding: ".25rem",
            border: `1px solid ${Palette.greyLight}`,
            boxShadow: currentTheme.shadows[5],
            borderRadius: currentTheme.shape.borderRadius,
          }
        : {
            // vertical
            backgroundColor: "transparent",
            position: "relative",
            display: ownerState.expanded ? "block" : "none",
            paddingLeft: "2rem",
            transformOrigin: "50% 0%",
            animation: `${expandDown} ${currentTheme.transitions.duration.short}ms both`,
          }),
    };
  }
);

export const SubMenu = forwardRef(
  (
    props: PropsWithChildren<SubMenuProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const { icon, label, className, sx, children } = props;
    const menuContext = useContext(MenuContext);
    const [expanded, setExpanded] = useState(false);

    const ownerState: SubMenuState = {
      expanded: expanded,
      direction: menuContext.direction,
      mode: menuContext.mode,
      color: menuContext.color,
    };

    return (
      <SubMenuRoot
        onClick={() => setExpanded(!expanded)}
        ownerState={ownerState}
        className={clsx(className)}
        style={sx}
        ref={ref}
      >
        <SubMenuItem ownerState={ownerState}>
          {icon}
          <div>{label}</div>
        </SubMenuItem>
        {expanded && (
          <SubMenuItemList ownerState={ownerState}>{children}</SubMenuItemList>
        )}
      </SubMenuRoot>
    );
  }
);
