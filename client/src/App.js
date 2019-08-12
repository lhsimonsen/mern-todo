import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoEdit from './components/TodoEdit';
import TodoCreate from './components/TodoCreate';

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Todos</Link>
        <Link to="/create">Create todo</Link>
      </div>

      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" component={TodoEdit} />
      <Route path="/create" component={TodoCreate} />
    </Router>
  );
}

export default App;
