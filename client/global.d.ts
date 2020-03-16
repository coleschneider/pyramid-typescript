interface Todo {
  complete: boolean;
  body: string;
  id: number;
}

interface TodoResponse {
  todos: Todo[];
}
