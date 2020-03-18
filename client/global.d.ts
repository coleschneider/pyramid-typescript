interface Todo {
  complete: boolean;
  body: string;
  id: string;
}

interface TodoResponse {
  todos: Todo[];
}

type Filters = "all" | "active" | "completed";
