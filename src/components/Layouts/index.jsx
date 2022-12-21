import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";

const Layouts = ({ children, ...rest }) => {
  return (
    <Box bg="#F5F5F4" {...rest}>
      <Header />
      <Container maxW="6xl" mt={["34px", "34px", "34px", "43px"]}>
        {children}
      </Container>
    </Box>
  );
};

export default Layouts;
