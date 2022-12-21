import { Box } from "@chakra-ui/react";

const BackIcon = ({ w = "16px", h = "24px" }) => (
  <Box
    width={w}
    height={h}
    viewBox="0 0 16 24"
    fill="none"
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.66675 12L11.6667 20"
      stroke="#111111"
      strokeWidth={5}
      strokeLinecap="square"
    />
    <path
      d="M3.66675 12L11.6667 4"
      stroke="#111111"
      strokeWidth={5}
      strokeLinecap="square"
    />
  </Box>
);

export default BackIcon;
