import {css} from "styled-components";

export const levels = {
  one: css`
    box-shadow: 0 9px 7px 2px rgba(0, 0, 0, 0.03);
  `,
};

export const animations = {
  ease: (path: string | string[]) => css`
    transition: ${typeof path === "string" ? path : path.join(",")} 0.2s ease;
  `,
  quadBezier: (path: string | string[]) => css`
    transition: ${typeof path === "string" ? path : path.join(",")} 0.2s
      cubic-bezier(0.165, 0.84, 0.44, 1);
  `,
};

export const colors = {
  primary: "#4bc9d0",
  alert: "#d0021b",
  white: "#FFF",
};
