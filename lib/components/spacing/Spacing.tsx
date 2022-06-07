import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface SpacingProps {
  x?: string;
  y?: string;
}

export const Spacing = styled.div<SpacingProps>(({ theme, x, y }) => {
  return css`
    & > *:nth-child(n + 2) > :not([hidden]) ~ :not([hidden]) {
      margin-left: ${x ?? "0"};
      margin-top: ${y ?? "0"};
    }
  `;
});
