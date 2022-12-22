import { Box } from "@chakra-ui/react";

const EditIcon = ({ w = "24px", h = "24px" }) => (
  <Box
    w={w}
    h={h}
    viewBox="0 0 24 24"
    fill="none"
    as="svg"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 19.9998H9L19.5 9.49981C20.0304 8.96938 20.3284 8.24996 20.3284 7.49981C20.3284 6.74967 20.0304 6.03025 19.5 5.49981C18.9696 4.96938 18.2501 4.67139 17.5 4.67139C16.7499 4.67139 16.0304 4.96938 15.5 5.49981L5 15.9998V19.9998Z"
      stroke="#A4A4A4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.5 6.49982L18.5 10.4998"
      stroke="#A4A4A4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Box>
);

export default EditIcon;
