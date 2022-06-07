import styled from "@emotion/styled";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import clsx from "clsx";

export interface ContainerProps {
  horizontal?: boolean;
  className?: string;
  sx?: CSSProperties;
}

const ContainerRoot = styled.div<Pick<ContainerProps, "horizontal">>(
  ({ theme, horizontal }) => {
    return {
      ...(horizontal && {
        display: "flex",
        flexDirection: "row",
      }),
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      padding: "0rem",
      margin: "0rem",
      minHeight: "1px,",
    };
  }
);

export const Container = forwardRef(
  (
    {
      horizontal = false,
      className,
      sx,
      children,
    }: PropsWithChildren<ContainerProps>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <ContainerRoot
        ref={ref}
        horizontal={horizontal}
        className={clsx(className)}
        style={sx}
      >
        {children}
      </ContainerRoot>
    );
  }
);
