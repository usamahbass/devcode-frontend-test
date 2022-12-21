import { Box, Image } from "@chakra-ui/react";
import ActivityEmptyImage from "@app/assets/images/png/activity-empty-state.png";

const Empty = () => (
  <Box
    mt={["140px", "140px", "140px", "59px"]}
    w="full"
    display="flex"
    justifyContent="center"
    alt="activity-empty-state"
  >
    <Image
      src={ActivityEmptyImage}
      data-cy="activity-empty-state"
      w={["319px", "319px", "319px", "767px"]}
      h={["204px", "204px", "204px", "490px"]}
    />
  </Box>
);

export default Empty;
