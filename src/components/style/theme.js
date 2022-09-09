import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.100",
          bgColor: "brand.blue",
          ringColor: "#245b53",
          ring: 1,
        },
        bgColor: "brand.blue",
        borderColor: "#245b53",
        border: "1px",
        _hover: "transparent",
      },
    },
  },
  sizes: {
    lg: {
      field: {
        borderRadius: "md",
      },
    },
  },
};
const brandRing = {
  _focus: {
    ring: 1,
    ringColor: "#245b53",
  },
};

const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};
export const theme = extendTheme(
  {
    breakpoints,
    colors: {
      brand: {
        light: "#BEBEBE",
        blue: "#1b2131",
        100: "#00ffb3",
        200: "#4bffc9",
      },
    },
    components: {
      Input: { ...inputSelectStyles },
      Select: { ...inputSelectStyles },
      Checkbox: {
        baseStyle: {
          control: {
            borderRadius: "3px",
            borderColor: "brand.100",
            border: "1px",

            ...brandRing,
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);
