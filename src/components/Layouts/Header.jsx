import { Box, Container, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      bg="primary.500"
      data-cy="header-background"
      h={["64px", "64px", "64px", "105px"]}
    >
      <Container h="full" display="flex" alignItems="center" maxW="6xl">
        <Text
          color="white"
          fontWeight={700}
          textTransform="uppercase"
          data-cy="header-title"
          fontSize={["18px", "18px", "18px", "24px"]}
          lineHeight={["27px", "27px", "27px", "36px"]}
        >
          Todo List App
        </Text>
      </Container>
    </Box>
  );
};

export default Header;
