import { Box } from "@chakra-ui/react";

const PlusIcon = () => (
  <Box
    width={["12px", "12px", "12px", "16px"]}
    height={["12px", "12px", "12px", "16px"]}
    viewBox="0 0 16 16"
    fill="none"
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 0.999878V14.9999"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M1 8H15"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </Box>
);

export default PlusIcon;
