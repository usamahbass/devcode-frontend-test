import { useEffect, useState } from "react";
import {
  Box,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  chakra,
} from "@chakra-ui/react";
import { TODO_INDICATOR } from "@app/utils/constants";
import SortSelectionSelectedIcon from "@app/icons/SortSelectionSelectedIcon";
import ChevronDownIcon from "@app/icons/ChevronDownIcon";

const MenuSelect = ({ options, value, onChange, ...rest }) => {
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
    <Menu {...rest}>
      <MenuButton
        h="52px"
        py="19px"
        px="17px"
        borderRadius="6px"
        border="1px solid #E5E5E5"
        w={["full", "full", "full", "205px"]}
      >
        <Box justifyContent="space-between" display="flex" alignItems="center">
          <Box
            data-cy={`modal-add-priority-${getIsIndicator?.value}`}
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

          <chakra.button data-cy="modal-add-priority-dropdown">
            <ChevronDownIcon />
          </chakra.button>
        </Box>
      </MenuButton>

      <MenuList p="0" borderRadius="6px">
        {options.map((option, i) => (
          <MenuItem
            p="11px"
            key={i}
            h="50px"
            icon={option.icon}
            data-cy={`modal-add-priority-${option.value}`}
            onClick={() => {
              setSortPicked(option.value);
              onChange(option.value);
            }}
            command={
              option?.value === sortPicked ? <SortSelectionSelectedIcon /> : ""
            }
          >
            <Text data-cy="sort-selection-title">{option.label}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default MenuSelect;
