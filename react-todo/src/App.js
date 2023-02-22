import './App.css';
import TodoTable from './compnents/TodoTable';

function App() {
  const todos = [
    { rowNumber: 1, rowDescription: 'feed puppy', rowAssign: 'user 1' },
    { rowNumber: 2, rowDescription: 'water plants', rowAssign: 'user 2' },
    { rowNumber: 3, rowDescription: 'make dinner', rowAssign: 'user 1' },
  ];

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
