import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Fonts } from "./collects/font";
import { overrides } from "./overrides";

const theme = extendTheme(overrides);

export const Theme = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  );
};
