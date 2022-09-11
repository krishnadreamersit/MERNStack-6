import React, { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    name: "Raj Rai",
    complete: false,
  },
  {
    id: 2,
    name: "Keshor Thapa",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Hook81() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.name}
          </label>
        </div>
      ))}
    </>
  );
}

export default Hook81;