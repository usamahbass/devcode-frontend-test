import { Box, Checkbox, Stack, Text, chakra } from "@chakra-ui/react";
import { TODO_INDICATOR } from "@app/utils/constants";
import EditIcon from "@app/icons/EditIcon";
import TrashIcon from "@app/icons/TrashIcon";

const Card = ({
  priority,
  title,
  handleEditAction,
  handleDeleteAction,
  i,
  isActive,
  handleCompleted,
}) => {
  const isTodoIndicator = TODO_INDICATOR.find(
    (todoIndicator) => todoIndicator.value === priority
  );

  return (
    <Box
      bg="white"
      data-cy={`todo-item`}
      display="flex"
      alignItems="center"
      borderRadius="12px"
      transition=".3s all"
      justifyContent="space-between"
      px={["19px", "19px", "19px", "28px"]}
      py={["18px", "18px", "18px", "26px"]}
      h={["56px", "56px", "56px", "80px"]}
      boxShadow="0px 6px 10px rgba(0, 0, 0, 0.1)"
    >
      <Box display="flex" alignItems="center">
        <Checkbox
          data-cy="todo-item-checkbox"
          mr="22px"
          colorScheme="primary"
          size="lg"
          isChecked={isActive}
          onChange={handleCompleted}
        />

        <Stack direction="row" align="center" spacing="16px">
          <Box
            data-cy="todo-item-priority-indicator"
            w="9px"
            h="9px"
            borderRadius="50px"
            bg={isTodoIndicator.color}
          />

          <Text
            data-cy="todo-item-title"
            fontWeight={500}
            fontSize={["14px", "14px", "14px", "18px"]}
            color={isActive ? "#888888" : "#111111"}
            textDecor={isActive ? "line-through" : "none"}
          >
            {title}
          </Text>

          <chakra.button
            data-cy="todo-item-edit-button"
            onClick={handleEditAction}
          >
            <EditIcon w={["12px", "12px", "12px", "24px"]} />
          </chakra.button>
        </Stack>
      </Box>

      <chakra.button
        data-cy="todo-item-delete-button"
        onClick={handleDeleteAction}
      >
        <TrashIcon />
      </chakra.button>
    </Box>
  );
};

export default Card;
