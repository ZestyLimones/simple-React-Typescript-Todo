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

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssign: assigned,
    };
    setTodos((todos) => [...todos, newTodo]);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
