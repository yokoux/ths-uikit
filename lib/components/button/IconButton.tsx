import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import clsx from "clsx";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import { DefaultTheme, OwnerState } from "../../theme";
import { darken, lighten } from "../../utils";

export interface IconButtonProps {
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  sx?: CSSProperties;
}

type IconButtonOwnerState = Required<
  Pick<IconButtonProps, "color" | "size" | "disabled">
>;

const IconButtonRoot = styled.button<OwnerState<IconButtonOwnerState>>(
  ({ theme, ownerState }) => {
    const currentTheme = theme as DefaultTheme;
    return css`
      --color: ${currentTheme.palette[ownerState.color].main};

      position: relative;
      padding: 0.5em;
      overflow: hidden;
      border: 1px solid transparent;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      transform: perspective(1px) translateZ(0);
      transition: all ${currentTheme.transitions.duration.short}ms
        ${currentTheme.transitions.easing.easeInOut};

      & svg {
        width: ${ownerState.size === "small"
          ? "1.25rem"
          : ownerState.size === "large"
          ? "1.75rem"
          : "1.5rem"};
        height: ${ownerState.size === "small"
          ? "1.25rem"
          : ownerState.size === "large"
          ? "1.75rem"
          : "1.5rem"};
        fill: var(--color);
      }

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${lighten(currentTheme.palette.common.black, 0.9)};
        border-radius: 50%;
        transform: scale(0);
        transition: transform ${currentTheme.transitions.duration.short}ms
          ${currentTheme.transitions.easing.easeOut};
      }

      &:hover {
        --color: ${darken(currentTheme.palette[ownerState.color].main, 0.2)};

        &:before {
          transform: scale(2);
        }
      }

      &.disabled {
        cursor: default;
        --color: ${lighten(currentTheme.palette[ownerState.color].main, 0.6)};

        &:before {
          transform: scale(2);
        }
      }
    `;
  }
);

export const IconButton = forwardRef(
  (
    props: PropsWithChildren<IconButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const { color, size, disabled, className, sx, children } = props;
    const ownerState = {
      disabled: disabled ?? false,
      color: color ?? "info",
      size: size ?? "medium",
    };
    const classes = {
      [`disabled`]: ownerState.disabled,
    };

    return (
      <IconButtonRoot
        className={clsx(classes, className)}
        ownerState={ownerState}
        ref={ref}
        style={sx}
      >
        {children}
      </IconButtonRoot>
    );
  }
);
