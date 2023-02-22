import TodoRowItem from './TodoRowItem';

function TodoTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Assigned</th>
        </tr>
      </thead>
      <tbody>
        {props.todos.map((todo) => (
          <TodoRowItem
            rowNumber={todo.rowNumber}
            rowDescription={todo.rowDescription}
            rowAssign={todo.rowAssign}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TodoTable;
