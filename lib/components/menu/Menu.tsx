import { Colors } from "@/theme";
import styled from "@emotion/styled";
import clsx from "clsx";
import { Property } from "csstype";
import {
  createContext,
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useState,
} from "react";

export interface MenuProps {
  defaultIndex?: string;
  mode?: "light" | "dark";
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  onSelect?: (key: string) => void;
  direction?: "horizontal" | "vertical";
  className?: string;
  sx?: CSSProperties;
}

const MenuRoot = styled.div<{
  direction: "horizontal" | "vertical";
  mode: "light" | "dark";
}>(({ theme, direction, mode }) => {
  return {
    backgroundColor: mode === "light" ? "white" : Colors.Sky[800],
    boxSizing: "border-box",
    width: "100%",
    height: direction === "vertical" ? "available" : "fit-content",
    display: "flex",
    flexDirection: direction === "vertical" ? "column" : "row",
    flexShrink: "initial",
  };
});

export interface IMenuContext {
  current?: string;
  mode: "light" | "dark";
  color: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  direction: "horizontal" | "vertical";
  onSelect: (key: string) => void;
}

export const MenuContext = createContext<IMenuContext>({
  current: undefined,
  mode: "light",
  color: "primary",
  direction: "horizontal",
  onSelect: () => {},
});

export const Menu = forwardRef(
  (props: PropsWithChildren<MenuProps>, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      defaultIndex,
      mode,
      color,
      direction,
      onSelect,
      className,
      sx,
      children,
    } = props;
    const [currentActive, setActive] = useState(defaultIndex);

    const initialMenuContext: IMenuContext = {
      current: currentActive,
      mode: mode ?? "light",
      color: color ?? "primary",
      direction: direction ?? "horizontal",
      onSelect: (idx: string) => {
        setActive(idx);
        onSelect && onSelect(idx);
      },
    };

    return (
      <MenuContext.Provider value={initialMenuContext}>
        <MenuRoot
          className={clsx(className)}
          direction={direction ?? "horizontal"}
          mode={mode ?? "light"}
          style={sx}
          ref={ref}
        >
          {children}
        </MenuRoot>
      </MenuContext.Provider>
    );
  }
);
