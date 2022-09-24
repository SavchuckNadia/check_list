import { ICategoryTodo } from "../redux/interfaces/interfaces";
import { useMemo } from "react";

export const useCategories = (categories: ICategoryTodo[], query: string) => {
  const searchedCategories = useMemo(() => {
    const filteredCategories =
      query === ""
        ? categories
        : categories.filter((category) =>
            category.name.toLowerCase().includes(query.toLowerCase())
          );
    return filteredCategories;
  }, [query, categories]);

  return searchedCategories;
};
