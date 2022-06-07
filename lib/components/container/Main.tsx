import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";

export interface MainProps {
  className?: string;
  sx?: CSSProperties;
}

const MainRoot = styled.div(({ theme }) => {
  return css`
    box-sizing: border-box;
    width: 100%;
    height: available;
    padding: 0.5rem;
    min-height: 1px;
  `;
});

export const Main = forwardRef(
  (
    { className, sx, children }: PropsWithChildren<MainProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <MainRoot ref={ref} className={clsx(className)} style={sx}>
        {children}
      </MainRoot>
    );
  }
);
