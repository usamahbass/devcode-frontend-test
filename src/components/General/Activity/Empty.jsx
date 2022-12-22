import { Box, Image } from "@chakra-ui/react";
import ActivityEmptyImage from "@app/assets/images/png/activity-empty-state.png";

const Empty = () => (
  <Box
    w="full"
    display="flex"
    justifyContent="center"
    alt="activity-empty-state"
    position="relative"
    top={["50px", "50px", "50px", "0"]}
    right={["30px", "30px", "30px", "0"]}
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
