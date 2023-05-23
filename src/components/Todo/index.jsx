import React from "react";
import { Context as FormContext } from "../../context/Form";
import { Context as FilterContext } from "../../context/Filter";
import { Context as EditContext } from "../../context/Edit";
import List from "../List";

const TodoApp = () => {
  const { todos, setTodos } = React.useContext(FormContext);
  const { filter, setFilter } = React.useContext(FilterContext);
  const { selectedIndex, setSelectedIndex } = React.useContext(EditContext);

  const todoRef = React.useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todoRef.current.value.trim(),
      completed: false,
    };

    if (selectedIndex !== null) {
      todos[selectedIndex] = newTodo;
      setSelectedIndex(null);
    } else {
      setTodos([...todos, newTodo]);
    }

    todoRef.current.value = "";
  };

  const handleCompleted = () => {
    setFilter("Completed");
  };

  const handleUncompleted = () => {
    setFilter("Incomplete");
  };

  const filteredTodos =
    filter === "All"
      ? todos
      : todos.filter((todo) =>
          filter === "Completed" ? todo.completed : !todo.completed
        );

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
                <form className="d-flex" onSubmit={handleSubmit}>
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
                  <button
                    className="btn btn-primary"
                    onClick={() => setFilter("All")}
                  >
                    All
                  </button>
                  <button
                    className="btn btn-primary mx-3"
                    onClick={handleCompleted}
                  >
                    Completed
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleUncompleted}
                  >
                    Incomplete
                  </button>
                </div>
              </div>
            </div>
            {<List todos={filteredTodos} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoApp;
