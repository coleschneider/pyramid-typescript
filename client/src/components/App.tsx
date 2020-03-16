import * as React from "react";
import {ApolloProvider} from "@apollo/react-hooks";
import {BrowserRouter as Router, Route} from "react-router-dom";

import Todos from "./Todos/Todos";

import client from "../../service/todos";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route path="/" component={Todos} />
      </Router>
    </ApolloProvider>
  );
}

export default App;
