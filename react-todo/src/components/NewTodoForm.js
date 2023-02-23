import React, { useState } from 'react';

function NewTodoForm(props) {
  const [description, setDescription] = useState('');
  const [assigned, setAssigned] = useState('');

  const submitTodo = () => {
    if (description !== '' && assigned !== '') {
      props.addTodo(description, assigned);
      setAssigned('');
      setDescription('');
    }
  };

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">Assigned</label>
          <input
            onChange={(e) => setAssigned(e.target.value)}
            value={assigned}
            type="text"
            className="form-control"
            required
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-description">Description</label>
          <textarea
            className="form-control"
            rows={3}
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={submitTodo}
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default NewTodoForm;
