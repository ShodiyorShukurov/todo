import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import { Context as FormContext } from "../../context/Form";
import { Context as EditContext } from "../../context/Edit";
import { Context as ModalContext } from "../../context/Modal";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const List = ({ todos }) => {
  const { setSelectedIndex, selectedIndex } = React.useContext(EditContext);
  const { setTodos } = React.useContext(FormContext);
  const { modal, setModal } = React.useContext(ModalContext);

  const checkRef = React.useRef();

  
  const toggle = (index) => {
    setSelectedIndex(index);
    setModal(!modal);
  };

  //COMPLETED FUNCTION
  const toggleComplete = (id) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...checkedTodos]);
  };

  // DELETE FUNCTION
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodos]);
    setModal(false);
    console.log(selectedIndex);
  };

  //EDIT FUNCTION
  const handleEdit = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <table className="table mt-5 table-bordered">
        <thead>
          <tr>
            <th scope="col">№</th>
            <th scope="col">Value</th>
            <th scope="col">Buttons</th>
          </tr>
        </thead>

        <tbody>
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <input
                    className="form-check-input me-3"
                    ref={checkRef}
                    type="checkbox"
                    name="todo_check"
                    onChange={() => toggleComplete(todo.id)}
                    checked={todo.completed}
                  />
                  <strong className={todo.completed ? "line" : " "}>
                    {todo.text}
                  </strong>
                </td>
                <td>
                  <button
                    className="btn btn-success me-3"
                    onClick={() => handleEdit(index)}
                  >
                    <MdModeEditOutline />
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => toggle(index)}
                  >
                    <RiDeleteBin6Line />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody>Haqiqatdan ham o'chirmoqchimisiz?</ModalBody>
        <ModalFooter>
          <Button
            color="danger"
            onClick={() => handleDelete(todos[selectedIndex]?.id)}
          >
            Ha
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Yo'q
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

List.propTypes = {
  todos: PropTypes.array,
  handleDelete: PropTypes.func,
};
export default List;
