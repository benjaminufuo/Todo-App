import notebook from "../public/notebook-svgrepo-com (2).svg";
import { CgCheck } from "react-icons/cg";
import { FiCircle } from "react-icons/fi";
import { SlOptions } from "react-icons/sl";
import { RiEditFill } from "react-icons/ri";
import { MdDeleteSweep } from "react-icons/md";
import { useState } from "react";

const Todo = ({ addToDos, todo, deleteToDos, editToDos, toggleComplete }) => {
  const [showIndex, setShowIndex] = useState(null);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editInput, setEditInput] = useState("");
  const handleAdd = () => {
    if (input.trim() !== "") {
      addToDos(input.trim());
      setInput("");
    }
  };
  return (
    <section className="todomain">
      <div className="todoheader">
        <h1>To-Do List</h1>
        <img className="notebook" src={notebook} />
      </div>
      <div className="inputsection">
        <input
          type="text"
          placeholder="add your task here"
          value={input}
          onChange={(e) => {
            setInput(e.target.value), console.log(input);
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="todolistitem">
        {todo.map((item, index) => (
          <div className="todolist" key={index}>
            <div className="firstpart">
              {item.completed ? (
                <CgCheck
                  size={30}
                  style={{
                    backgroundColor: "#fc5744",
                    color: "white",
                    borderRadius: "50%",
                  }}
                  onClick={() => toggleComplete(index)}
                />
              ) : (
                <FiCircle
                  size={30}
                  color="grey"
                  onClick={() => toggleComplete(index)}
                />
              )}
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editInput}
                    onChange={(e) => setEditInput(e.target.value)}
                  />
                  <button
                    className="savebtn"
                    onClick={() => {
                      if (editInput.trim() !== "") {
                        editToDos(index, {
                          ...todo[index],
                          text: editInput.trim(),
                        });
                        setEditingIndex(null);
                      }
                    }}
                  >
                    save
                  </button>
                </>
              ) : (
                <span
                  style={{
                    textDecorationLine: item.completed
                      ? "line-through"
                      : "none",
                    color: item.completed ? "grey" : "inherit",
                    fontSize: "18px",
                  }}
                >
                  {item.text}
                </span>
              )}
            </div>
            <div className="delete" />
            {showIndex === index ? (
              <div
                className="deleteEditIcons"
                onMouseLeave={() => setShowIndex(null)}
              >
                <RiEditFill
                  size={20}
                  color="#06d6a0"
                  onClick={() => {
                    setEditingIndex(index);
                    setEditInput(item.text);
                  }}
                  style={{ cursor: "pointer" }}
                />
                <MdDeleteSweep
                  onClick={() => deleteToDos(index)}
                  style={{ cursor: "pointer" }}
                  size={20}
                  color="red"
                />
              </div>
            ) : (
              <SlOptions
                onMouseEnter={() => setShowIndex(index)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Todo;
