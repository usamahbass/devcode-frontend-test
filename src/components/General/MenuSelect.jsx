import { useEffect, useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { TODO_INDICATOR } from "@app/utils/constants";
import SortSelectionSelectedIcon from "@app/icons/SortSelectionSelectedIcon";
import ChevronDownIcon from "@app/icons/ChevronDownIcon";

const MenuSelect = ({ options, value, onChange }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [sortPicked, setSortPicked] = useState(null);

  useEffect(() => {
    if (value) {
      setSortPicked(value);
    }
  }, [value]);

  const getIsIndicator = TODO_INDICATOR.find(
    (todo) => todo.value === sortPicked
  );

  return (
    <Menu onClose={onClose} isOpen={isOpen}>
      <MenuButton
        h="52px"
        onClick={onOpen}
        py="19px"
        type="button"
        px="17px"
        borderRadius="6px"
        transition="none !important"
        border="1px solid #E5E5E5"
        data-cy="modal-add-priority-dropdown"
        w={["full", "full", "full", "205px"]}
      >
        <Box justifyContent="space-between" display="flex" alignItems="center">
          <Box
            data-cy={"modal-add-priority-item"}
            gap="19px"
            display="flex"
            alignItems="center"
          >
            <Box
              w={["9px", "9px", "9px", "14px"]}
              h={["9px", "9px", "9px", "14px"]}
              borderRadius="50px"
              bg={getIsIndicator?.color}
            />
            <Text>{getIsIndicator?.name ?? "Pilih Priority"}</Text>
          </Box>

          <ChevronDownIcon />
        </Box>
      </MenuButton>

      <MenuList transition="none !important" p="0" id="hekl" borderRadius="6px">
        {options.map((option, i) => (
          <Box
            py="19px"
            px="17px"
            h="52px"
            key={i}
            id={i + 1}
            display="flex"
            alignItems="center"
            _hover={{
              bg: "#F4F4F4",
              cursor: "pointer",
            }}
            justifyContent="space-between"
            data-cy={"modal-add-priority-item"}
            onClick={() => {
              setSortPicked(option.value);
              onChange(option.value);
              onClose();
            }}
          >
            <Box display="flex" alignItems="center" gap="19px">
              {option.icon}

              <Text data-cy="sort-selection-title">{option.label}</Text>
            </Box>

            {option?.value === sortPicked ? <SortSelectionSelectedIcon /> : ""}
          </Box>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuSelect;
