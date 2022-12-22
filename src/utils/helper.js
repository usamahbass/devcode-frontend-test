import { SORT_TYPE } from "./constants";

const capitalizeFirstLetter = (s) =>
  (s && s[0].toUpperCase() + s.slice(1)) || "";

const handleSortTodoItem = (sortType, data) => {
  let results;

  if (data?.length > 0) {
    switch (sortType) {
      case SORT_TYPE.NEW:
        results = data.sort((a, b) => Number(a.id) - Number(b.id));
        break;
      case SORT_TYPE.OLD:
        results = data.sort((a, b) => Number(b.id) - Number(a.id));
        break;
      case SORT_TYPE.AZ:
        results = data.sort((a, b) =>
          b.title?.toLowerCase().localeCompare(a.title?.toLowerCase())
        );
        break;
      case SORT_TYPE.ZA:
        results = data.sort((a, b) =>
          a.title?.toLowerCase().localeCompare(b.title?.toLowerCase())
        );
        break;
      case SORT_TYPE.UNFINISH:
        results = data.sort(
          (a, b) => Number(a.is_active) - Number(b.is_active)
        );
        break;
      default:
        results = data;
    }
  }

  return results;
};

export { capitalizeFirstLetter, handleSortTodoItem };
