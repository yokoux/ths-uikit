import styled from "@emotion/styled";
import { css } from "@emotion/react";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";

export interface AsideProps {
  width?: string;
  className?: string;
  sx?: CSSProperties;
}

type AsideOwnerState = Required<Pick<AsideProps, "width">>;

const AsideRoot = styled.div<AsideOwnerState>(({ theme, width }) => {
  return css`
    width: ${width};
    height: available;
    box-sizing: border-box;
    padding: 0;
    min-height: 1px;
  `;
});

export const Aside = forwardRef(
  (
    {
      width = "fit-content",
      className,
      sx,
      children,
    }: PropsWithChildren<AsideProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <AsideRoot width={width} ref={ref} className={clsx(className)} style={sx}>
        {children}
      </AsideRoot>
    );
  }
);
