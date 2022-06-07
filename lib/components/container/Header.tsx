import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";

export interface HeaderProps {
  fixed?: boolean;
  className?: string;
  sx?: CSSProperties;
}

type HeaderOwnerState = Required<Pick<HeaderProps, "fixed">>;

const HeaderRoot = styled.div<HeaderOwnerState>(({ theme, fixed }) => {
  return css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 1rem 0.5rem;
    min-height: 1px;
  `;
});

export const Header = forwardRef(
  (
    { fixed = false, className, sx, children }: PropsWithChildren<HeaderProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <HeaderRoot
        fixed={fixed}
        ref={ref}
        className={clsx(className)}
        style={sx}
      >
        {children}
      </HeaderRoot>
    );
  }
);
