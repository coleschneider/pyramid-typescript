interface Todo {
  complete: boolean;
  body: string;
  id: string;
}

interface TodoResponse {
  todos: Todo[];
}
