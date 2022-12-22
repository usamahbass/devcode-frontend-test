import { useState } from "react";
import {
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuIcon,
  MenuCommand,
  Text,
  Box,
} from "@chakra-ui/react";
import ArrowsSort from "@app/icons/ArrowsSort";
import SortLatestIcon from "@app/icons/SortLatestIcon";
import SortUnfinished from "@app/icons/SortUnfinished";
import SortZAIcon from "@app/icons/SortZAIcon";
import SortAZIcon from "@app/icons/SortAZIcon";
import SortOldestIcon from "@app/icons/SortOldestIcon";
import SortSelectionSelectedIcon from "@app/icons/SortSelectionSelectedIcon";

const sortedItems = [
  {
    keyName: "new",
    name: "Terbaru",
    icon: <SortLatestIcon />,
  },
  {
    keyName: "old",
    name: "Terlama",
    icon: <SortOldestIcon />,
  },
  {
    keyName: "az",
    name: "A-Z",
    icon: <SortAZIcon />,
  },
  {
    keyName: "za",
    name: "Z-A",
    icon: <SortZAIcon />,
  },
  {
    keyName: "unfinish",
    name: "Belum Selesai",
    icon: <SortUnfinished />,
  },
];

const SortPopover = ({ onChange }) => {
  const [sortPicked, setSortPicked] = useState("new");

  return (
    <Menu>
      <MenuButton data-cy="todo-sort-button">
        <chakra.button
          w={["34px", "34px", "34px", "54px"]}
          h={["34px", "34px", "34px", "54px"]}
          border="1px solid #E5E5E5"
          borderRadius="45px"
          bg="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ArrowsSort />
        </chakra.button>
      </MenuButton>

      <MenuList p="0" borderRadius="6px">
        {sortedItems.map((sortItem, i) =>
          sortItem.keyName === sortPicked ? (
            <MenuItem
              p="11px"
              key={i}
              h="50px"
              gap="13px"
              data-cy="sort-selection"
              onClick={() => {
                onChange(sortItem);
                setSortPicked(sortItem.keyName);
              }}
            >
              <Box
                display="flex"
                w="full"
                alignItems="center"
                data-cy="sort-selection-selected"
              >
                <MenuIcon>{sortItem.icon}</MenuIcon>
                <Text ml="12px" data-cy="sort-selection-title">
                  {sortItem.name}
                </Text>
                <MenuCommand ml="auto">
                  <SortSelectionSelectedIcon />
                </MenuCommand>
              </Box>
            </MenuItem>
          ) : (
            <MenuItem
              p="11px"
              key={i}
              h="50px"
              data-cy="sort-selection"
              onClick={() => {
                onChange(sortItem);
                setSortPicked(sortItem.keyName);
              }}
            >
              <Box
                display="flex"
                w="full"
                alignItems="center"
                data-cy="sort-selection-selected"
              >
                <MenuIcon>{sortItem.icon}</MenuIcon>
                <Text ml="12px" data-cy="sort-selection-title">
                  {sortItem.name}
                </Text>
              </Box>
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
};

export default SortPopover;
