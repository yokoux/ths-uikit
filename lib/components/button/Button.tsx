import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import clsx from "clsx";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { DefaultTheme, OwnerState } from "../../theme";
import { capitalize, darken, lighten } from "../../utils";

export interface ButtonProps {
  variant: "text" | "outlined" | "contained";
  color?: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  sx?: CSSProperties;
}

type ButtonOwnerState = Required<
  Pick<ButtonProps, "variant" | "color" | "size" | "disabled">
>;

const ButtonRoot = styled.button<OwnerState<ButtonOwnerState>>(
  ({ theme, ownerState }) => {
    const currentTheme = theme as DefaultTheme;
    return css`
      --color: inherit;
      --bg-color: inherit;
      --border-color: inherit;
      --hover-color: inherit;
      --hover-bg-color: inherit;
      --hover-border-color: inherit;
      --disabled-color: inherit;
      --disabled-bg-color: inherit;
      --disabled-border-color: inherit;
      --padding: 0.5rem 0.75rem;
      --font-size: 1rem;

      display: flex;
      position: relative;
      overflow: hidden;
      align-items: center;
      line-height: 1;
      color: var(--color);
      background-color: var(--bg-color);
      border: 1px solid var(--border-color);
      padding: var(--padding);
      font-size: var(--font-size);
      transform: perspective(1px) translateZ(0);
      transition: color ${currentTheme.transitions.duration.short}ms
        ${currentTheme.transitions.easing.easeInOut};
      cursor: pointer;
      border-radius: ${currentTheme.shape.borderRadius};

      & > *:nth-child(n + 2) {
        margin-left: 0.25rem;
      }

      &:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--hover-bg-color);
        border-radius: 50%;
        transform: scale(0);
        transition: transform ${currentTheme.transitions.duration.short}ms
          ${currentTheme.transitions.easing.easeOut};
      }

      &:hover {
        color: var(--hover-color);
        border-color: var(--hover-border-color);

        & svg {
          fill: var(--hover-color);
        }

        &:before {
          transform: scale(1.5, 3);
        }
      }

      &.disabled {
        cursor: default;
        color: var(--disabled-color);
        background-color: var(--disabled-bg-color);
        border-color: var(--disabled-border-color);
      }

      // Size
      &.sizeSmall {
        --padding: 0.25rem 0.5rem;
        --font-size: 0.875rem;
      }

      &.sizeMedium {
        --padding: 0.5rem 0.75rem;
        --font-size: 1rem;
      }

      &.sizeLarge {
        --padding: 0.6rem 1rem;
        --font-size: 1.125rem;
      }

      // Variant + Color
      &.text${capitalize(ownerState.color)} {
        --color: ${currentTheme.palette[ownerState.color].main};
        --bg-color: transparent;
        --border-color: transparent;
        --hover-color: ${darken(
          currentTheme.palette[ownerState.color].main,
          0.2
        )};
        --hover-bg-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.8
        )};
        --hover-border-color: transparent;
        --disabled-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.6
        )};
        --disabled-bg-color: transparent;
        --disabled-border-color: transparent;
      }

      &.outlined${capitalize(ownerState.color)} {
        --color: ${currentTheme.palette[ownerState.color].main};
        --bg-color: transparent;
        --border-color: ${currentTheme.palette[ownerState.color].main};
        --hover-color: ${darken(
          currentTheme.palette[ownerState.color].main,
          0.2
        )};
        --hover-bg-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.8
        )};
        --hover-border-color: ${darken(
          currentTheme.palette[ownerState.color].main,
          0.2
        )};
        --disabled-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.6
        )};
        --disabled-bg-color: transparent;
        --disabled-border-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.6
        )};
      }

      &.contained${capitalize(ownerState.color)} {
        --color: ${currentTheme.palette[ownerState.color].contrastText};
        --bg-color: ${currentTheme.palette[ownerState.color].main};
        --border-color: ${currentTheme.palette[ownerState.color].main};
        --hover-color: ${currentTheme.palette[ownerState.color].contrastText};
        --hover-bg-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.6
        )};
        --hover-border-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.6
        )};
        --disabled-color: ${lighten(
          currentTheme.palette[ownerState.color].contrastText,
          0.6
        )};
        --disabled-bg-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.6
        )};
        --disabled-border-color: ${lighten(
          currentTheme.palette[ownerState.color].main,
          0.6
        )};
      }

      & svg {
        transition: fill ${currentTheme.transitions.duration.short}ms
          ${currentTheme.transitions.easing.easeInOut};
        fill: ${ownerState.variant === "contained"
          ? currentTheme.palette[ownerState.color].contrastText
          : ownerState.disabled
          ? lighten(currentTheme.palette[ownerState.color].main, 0.6)
          : currentTheme.palette[ownerState.color].main};
      }
    `;
  }
);

const ButtonStartIcon = styled.div<OwnerState<ButtonOwnerState>>(
  ({ theme, ownerState }) => {
    return css`
      margin-right: 0.125rem;

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
      }
    `;
  }
);

const ButtonEndIcon = styled.div<OwnerState<ButtonOwnerState>>(
  ({ theme, ownerState }) => {
    return css`
      margin-left: 0.125rem;

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
      }
    `;
  }
);

export const Button = forwardRef(
  (
    props: PropsWithChildren<ButtonProps>,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const {
      variant,
      color,
      size,
      disabled,
      className,
      sx,
      startIcon,
      endIcon,
      children,
    } = props;
    const ownerState = {
      variant,
      disabled: disabled ?? false,
      color: color ?? "info",
      size: size ?? "medium",
    };
    const classes = {
      [`disabled`]: ownerState.disabled,
      [`${variant}${capitalize(ownerState.color)}`]: true,
      [`size${capitalize(ownerState.size)}`]: true,
    };

    return (
      <ButtonRoot
        className={clsx(classes, className)}
        style={sx}
        ref={ref}
        ownerState={ownerState}
      >
        {startIcon && (
          <ButtonStartIcon ownerState={ownerState}>{startIcon}</ButtonStartIcon>
        )}
        <div>{children}</div>
        {endIcon && (
          <ButtonEndIcon ownerState={ownerState}>{endIcon}</ButtonEndIcon>
        )}
      </ButtonRoot>
    );
  }
);
