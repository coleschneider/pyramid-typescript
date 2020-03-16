import * as React from "react";
import {ApolloProvider} from "@apollo/react-hooks";
import {BrowserRouter as Router, Route} from "react-router-dom";

import ApolloClient from "apollo-boost";
import TodoList from "./TodoList/TodoList";

const client = new ApolloClient({
  uri: "http://localhost:6543/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" component={TodoList} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
