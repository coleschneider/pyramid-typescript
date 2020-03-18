import {gql} from "apollo-boost";

export const ALL_TODOS = gql`
  {
    todos {
      complete
      body
      id
      createdAt
      updatedAt
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
        createdAt
        updatedAt
      }
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation TodoMutation($id: UUID!) {
    toggleTodo(id: $id) {
      todo {
        complete
        body
        id
        createdAt
        updatedAt
      }
    }
  }
`;
export const DELETE_TODO = gql`
  mutation TodoMutation($id: UUID!) {
    deleteTodo(id: $id) {
      todo {
        id
      }
    }
  }
`;
