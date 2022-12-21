import { Box } from "@chakra-ui/react";

const ArrowsSort = () => (
  <Box
    as="svg"
    height={["18px", "18px", "18px", "16px"]}
    width={["16px", "16px", "16px", "22px"]}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6L6 2M6 2L10 6M6 2V16"
      stroke="#888888"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
    <path
      d="M20 12L16 16M16 16L12 12M16 16V2"
      stroke="#888888"
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Box>
);

export default ArrowsSort;
