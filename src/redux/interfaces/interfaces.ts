export interface ITodo {
  id: string;
  name: string;
  category: string;
  completed: boolean;
}

export interface ICategoryTodo {
  id: string;
  name: string;
}
export interface ICurrentCategory {
  name: string;
}

export interface IFilter {
  query: string;
}

export interface IStore {
  categories: ICategoryTodo[];
  todos: ITodo[];
  currentCategory: ICurrentCategory;
  filter: IFilter;
}