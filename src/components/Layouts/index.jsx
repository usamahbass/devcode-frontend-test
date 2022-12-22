import { Box, Container } from "@chakra-ui/react";
import Helmet from "react-helmet";
import Header from "./Header";

const Layouts = ({ children, title, ...rest }) => {
  return (
    <Box {...rest}>
      <Helmet title={`To Do List - ${title}`} />
      <Header />
      <Container maxW="1000px" mt={["34px", "34px", "34px", "43px"]}>
        {children}

        <Box data-cy="modal-delete" />
      </Container>
    </Box>
  );
};

export default Layouts;
