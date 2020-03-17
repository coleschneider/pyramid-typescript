import ApolloClient from "apollo-boost";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ALL_TODOS} from "../src/constants/queries";
import {MutationUpdaterFn} from "apollo-client";

const client = new ApolloClient({
  uri: "http://localhost:6543/graphql",
  cache: new InMemoryCache(),
});
export default client;

export const updateTodos: MutationUpdaterFn<any> = (cache, info) => {
  const {todos} = cache.readQuery({query: ALL_TODOS});
  cache.writeQuery({
    query: ALL_TODOS,
    data: {todos: [info.data.createTodo.todo, ...todos]},
  });
};
