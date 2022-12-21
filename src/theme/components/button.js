import { defineStyleConfig } from "@chakra-ui/react";

export const Button = defineStyleConfig({
  variants: {
    rounded: ({ colorScheme }) => ({
      colorScheme,
      width: "159px",
      height: "54px",
      fontSize: "1rem",
      fontStyle: "normal",
      borderRadius: "50px",
      letterSpacing: "0.01em",
      padding: "14px 28px 14px 28px",
    }),
  },
});
