import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    outline: ({ colorScheme }) => ({
      _hover: {
        color: "white",
        backgroundColor: `${colorScheme}.500`,
      },
    }),
    rounded: () => ({
      width: "159px",
      height: "54px",
      fontSize: "1rem",
      fontStyle: "normal",
      borderRadius: "50px",
      letterSpacing: "0.01em",
      bg: "primary.500",
      color: "white",
      padding: "14px 28px 14px 28px",
    }),
  },
});
