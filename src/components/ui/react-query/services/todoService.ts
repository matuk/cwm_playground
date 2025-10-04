import APIClient from "./apiClient";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}
export type { Todo };

export default new APIClient<Todo>("/todos");
