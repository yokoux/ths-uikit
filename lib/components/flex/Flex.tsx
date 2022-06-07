import styled from "@emotion/styled";
import {
  CSSProperties,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import { OwnerState } from "@/theme";
import clsx from "clsx";
import { Property } from "csstype";

export interface FlexProps {
  inline?: boolean;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  direction?: Property.FlexDirection;
  className?: string;
  sx?: CSSProperties;
}

type FlexOwnerState = Omit<FlexProps, "className" | "sx">;

const FlexRoot = styled.div<OwnerState<FlexOwnerState>>(
  ({ theme, ownerState }) => {
    return {
      boxSizing: "border-box",
      width: "100%",
      display: ownerState.inline ? "inline-flex" : "flex",
      flexDirection: ownerState.direction ?? "row",
      ...(ownerState.justifyContent && {
        justifyContent: ownerState.justifyContent,
      }),
      ...(ownerState.alignItems && {
        alignItems: ownerState.alignItems,
      }),
    };
  }
);

export const Flex = forwardRef(
  (props: PropsWithChildren<FlexProps>, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      inline,
      justifyContent,
      alignItems,
      direction,
      className,
      sx,
      children,
    } = props;
    const ownerState = {
      inline,
      justifyContent,
      alignItems,
      direction: direction,
    };

    return (
      <FlexRoot
        ownerState={ownerState}
        ref={ref}
        className={clsx(className)}
        style={sx}
      >
        {children}
      </FlexRoot>
    );
  }
);
