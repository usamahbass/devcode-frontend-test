import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ children, ...rest }) => {
  return (
    <ChakraButton
      {...rest}
      borderRadius="45px"
      h={["37px", "37px", "37px", "54px"]}
      w={["100px", "100px", "100px", "159px"]}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
