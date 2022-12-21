import { Button as ChakraButton } from "@chakra-ui/react";

const Button = ({ children, ...rest }) => {
  return (
    <ChakraButton
      {...rest}
      borderRadius="50px"
      h={["37px", "37px", "37px", "54px"]}
      w={["100px", "100px", "100px", "159px"]}
      p={[
        "13px 14px 13px 14px",
        "13px 14px 13px 14px",
        "13px 14px 13px 14px",
        "13px 21px 13px 14px",
      ]}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
