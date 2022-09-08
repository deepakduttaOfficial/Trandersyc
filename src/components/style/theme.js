import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
export const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      light: "#BEBEBE",
      100: "#00ffb3",
      200: "#4bffc9",
    },
  },
});
