import React, { useState } from "react";
import Todo from "./assets/components/Todo";

const App = () => {
  const [todo, setTodo] = useState([]);
  const addToDos = (newTodo) => {
    setTodo([...todo, { text: newTodo, completed: false }]);
  };
  const deleteToDos = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };
  const editToDos = (index, newValue) => {
    setTodo(todo.map((item, i) => (i === index ? newValue : item)));
  };

  const toggleComplete = (index) => {
    setTodo(
      todo.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };
  return (
    <div className="App">
      <Todo
        addToDos={addToDos}
        todo={todo}
        deleteToDos={deleteToDos}
        editToDos={editToDos}
        toggleComplete={toggleComplete}
      />
    </div>
  );
};

export default App;
