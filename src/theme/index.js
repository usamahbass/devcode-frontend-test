import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { overrides } from "./overrides";

const theme = extendTheme(overrides);

export const Theme = ({ children }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
