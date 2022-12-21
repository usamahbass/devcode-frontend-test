import { useState } from "react";
import {
  chakra,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
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
      <MenuButton>
        <chakra.button
          w={["34px", "34px", "34px", "54px"]}
          h={["34px", "34px", "34px", "54px"]}
          border="1px solid #E5E5E5"
          borderRadius="45px"
          bg="transparent"
          display="flex"
          alignItems="center"
          justifyContent="center"
          data-cy="todo-sort-button"
        >
          <ArrowsSort />
        </chakra.button>
      </MenuButton>

      <MenuList p="0" borderRadius="6px">
        {sortedItems.map((sortItem, i) => (
          <MenuItem
            p="11px"
            key={i}
            h="50px"
            icon={sortItem.icon}
            onClick={() => {
              setSortPicked(sortItem.keyName);
              onChange(sortItem);
            }}
            command={
              sortItem?.keyName === sortPicked ? (
                <SortSelectionSelectedIcon />
              ) : (
                ""
              )
            }
          >
            <Text data-cy="sort-selection-title">{sortItem.name}</Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortPopover;
