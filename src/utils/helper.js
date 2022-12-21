import { SORT_TYPE } from "./constants";

const capitalizeFirstLetter = (s) =>
  (s && s[0].toUpperCase() + s.slice(1)) || "";

const handleSortTodoItem = (sortType, data) => {
  if (data?.length > 0) {
    switch (sortType) {
      case SORT_TYPE.NEW:
        return data.sort((a, b) => Number(a.id) - Number(b.id));
      case SORT_TYPE.OLD:
        return data.sort((a, b) => Number(b.id) - Number(a.id));
      case SORT_TYPE.AZ:
        return data.sort((a, b) =>
          b.title?.toLowerCase().localeCompare(a.title?.toLowerCase())
        );
      case SORT_TYPE.ZA:
        return data.sort((a, b) =>
          a.title?.toLowerCase().localeCompare(b.title?.toLowerCase())
        );
      case SORT_TYPE.UNFINISH:
        return data.sort((a, b) => Number(b.is_active) - Number(a.is_active));
      default:
        data;
    }
  }
};

export { capitalizeFirstLetter, handleSortTodoItem };
