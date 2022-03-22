import { useState } from "react";

export const Checklist = () => {
  const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo("");
  };

  const handleCheck = (e) => {
    setCompleted([...todos]);
  };

  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>

      <h3>in-progress</h3>
      {todos.map((todo, index) => (
        <ul key={index}>
          <input onChange={handleCheck} id={index} type="checkbox" />
          {todo}
        </ul>
      ))}

      <h3>completed</h3>
      {completed.map((complete, index) => (
        <ul key={index}>{complete}</ul>
      ))}
    </>
  );
};
