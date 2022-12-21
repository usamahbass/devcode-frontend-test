import { Box, Image } from "@chakra-ui/react";
import TodoEmptyImage from "@app/assets/images/png/todo-empty-state.png";

const Empty = () => (
  <Box
    w="full"
    display="flex"
    justifyContent="center"
    alt="todo-empty-state"
    position="relative"
    top={["50px", "50px", "50px", "0"]}
    right={["30px", "30px", "30px", "0"]}
  >
    <Image
      src={TodoEmptyImage}
      data-cy="todo-empty-state"
      w={["320px", "320px", "320px", "541px"]}
      h={["245px", "245px", "245px", "413px"]}
    />
  </Box>
);

export default Empty;
