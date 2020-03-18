import ApolloClient from "apollo-boost";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ALL_TODOS, DELETE_TODO} from "../src/constants/queries";
import {MutationUpdaterFn} from "apollo-client";

const client = new ApolloClient({
  uri: "http://localhost:6543/graphql",
  cache: new InMemoryCache(),
});
client.writeData({
  data: {
    visibilityFilter: "all",
  },
});
export default client;

export const updateTodos: MutationUpdaterFn<any> = (cache, info) => {
  const {todos} = cache.readQuery({query: ALL_TODOS});

  cache.writeQuery({
    query: ALL_TODOS,
    data: {todos: [info.data.createTodo.todo, ...todos]},
  });
};

export const updatedDeletedTodo: MutationUpdaterFn<{deleteTodo: {todo: Todo}}> = (
  cache,
  {data}
) => {
  const {todos} = cache.readQuery({query: ALL_TODOS});
  const {deleteTodo} = data;
  const filteredTodos = todos.filter((t: Todo) => t.id !== deleteTodo.todo.id);

  cache.writeQuery({
    query: ALL_TODOS,
    data: {todos: filteredTodos},
  });
};
