import { ICategoryTodo } from "./interfaces/interfaces";
export const fetchCategories = (): Promise<ICategoryTodo[]> =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          {
            id: "1",
            name: "Family list 1",
          },
          {
            id: "2",
            name: "Family list 2",
          },
          {
            id: "3",
            name: "Family list 3",
          },
        ]),
      500
    )
  );
