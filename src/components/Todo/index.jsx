import React from "react";
import { NavLink } from "react-router-dom";
import { Context as FormContext } from "../../context/Form";
import { Context as EditContext } from "../../context/Edit";
import List from "../List";

const TodoApp = () => {
  const { todos, setTodos } = React.useContext(FormContext);
  const { selectedIndex, setSelectedIndex } = React.useContext(EditContext);

  const todoRef = React.useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newTodos = {
      id: new Date().getTime(),
      text: todoRef.current.value.trim(),
      completed: false,
    };

    if (selectedIndex !== null) {
      todos[selectedIndex] = newTodos;
      setSelectedIndex(null);
    } else {
      setTodos([...todos, newTodos]);
    }

    todoRef.current.value = "";
  };

  const handleComplited = () => {
    const completedTodos = todos.filter((todo) => todo.completed);

    setTodos([...completedTodos]);
  };

  const handleUncomplited = () => {
    const unComplited = todos.filter((todo) => !todo.completed);
    localStorage.setItem("unComplited", unComplited);
    setTodos([...unComplited]);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3">
            <div className="card mt-3">
              <div className="card-header">
                <h1 className="text-center">Todo App</h1>
              </div>
              <div className="card-body">
                <form className="d-flex" onSubmit={(evt) => handleSubmit(evt)}>
                  <input
                    className="form-control me-2"
                    type="text"
                    name="text"
                    ref={todoRef}
                    placeholder="Todo add..."
                    defaultValue={todos[selectedIndex]?.text}
                  />
                  <button className="btn btn-primary" type="submit">
                    Add
                  </button>
                </form>
                <div className="mt-3 d-flex justify-content-center">
                  <button className="btn btn-primary">All</button>
                  <button
                    className="btn btn-primary mx-3"
                    type="button"
                    onClick={() => handleComplited(todos, "completed")}
                  >
                    Completed
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => handleUncomplited(todos, "uncomplited")}
                  >
                    Uncomplited
                  </button>
                </div>
              </div>
            </div>
            {<List todos={todos} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
