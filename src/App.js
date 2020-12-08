import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/">
            <h1>Welcome to my dashboard</h1>
          </Route>
          <Route exact path="/weather"></Route>
          <Route exact path="/todolist">
            <TodoApp />
          </Route>
          <Route exact path="/movies"></Route>
          <Route exact path="/about"></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
