import styled from "@emotion/styled";

export interface GridProps {
  rows?: number;
  cols?: number;
  gap?: string;
}

export const Grid = styled.div<GridProps>(({ theme, rows, cols, gap }) => {
  return {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gap: `${gap ?? "0px"}`,
    ...(cols && {
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
    }),
    ...(rows && {
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    }),
  };
});
