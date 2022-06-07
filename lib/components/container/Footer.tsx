import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";

export interface FooterProps {
  fixed?: boolean;
  className?: string;
  sx?: CSSProperties;
}

type FooterOwnerState = Required<Pick<FooterProps, "fixed">>;

const FooterRoot = styled.div<FooterOwnerState>(({ theme, fixed }) => {
  return css`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 1rem 0.5rem;
    min-height: 1px;
  `;
});

export const Footer = forwardRef(
  (
    { fixed = false, className, sx, children }: PropsWithChildren<FooterProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <FooterRoot
        fixed={fixed}
        ref={ref}
        className={clsx(className)}
        style={sx}
      >
        {children}
      </FooterRoot>
    );
  }
);
