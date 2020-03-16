import {gql} from "apollo-boost";

export const ALL_TODOS = gql`
  {
    todos {
      id
      complete
      body
    }
  }
`;

export const ADD_TODO = gql`
  mutation TodoMutation($body: String!, $complete: Boolean) {
    createTodo(body: $body, complete: $complete) {
      todo {
        id
        complete
        body
      }
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation TodoMutation($id: ID!) {
    toggleTodo(id: $id) {
      todo {
        complete
        body
        id
      }
    }
  }
`;
