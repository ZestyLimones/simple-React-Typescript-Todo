import React, { useState } from 'react';
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'feed puppy', rowAssign: 'user 1' },
    { rowNumber: 2, rowDescription: 'water plants', rowAssign: 'user 2' },
    { rowNumber: 3, rowDescription: 'make dinner', rowAssign: 'user 1' },
    { rowNumber: 4, rowDescription: 'charge phone', rowAssign: 'user 2' },
  ]);

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'new Todo',
        rowAssign: 'user 3',
      };
      setTodos((todos) => [...todos, newTodo]);
    }
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
