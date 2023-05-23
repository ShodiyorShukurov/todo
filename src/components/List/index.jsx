import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import PropTypes from "prop-types";
import { Context as FormContext } from "../../context/Form";
import { Context as EditContext } from "../../context/Edit";
// import { Context as ControlledContext } from "../../context/Controlled";
import { MdModeEditOutline } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const List = ({ todos }) => {
  // const { controlled, setControlled } = React.useContext(ControlledContext);

  const { setTodos } = React.useContext(FormContext);
  const [modal, setModal] = React.useState(false);

  const checkRef = React.useRef();

  const toggle = () => {
    setModal(!modal);
  };

  const toggleComplete = (id) => {
    const checkedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos([...checkedTodos]);
  };

  const { setSelectedIndex, selectedIndex } = React.useContext(EditContext);

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...filteredTodos]);
    setModal(false);
    console.log(selectedIndex);
  };

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
                  <strong className={
                    todo.completed ? "line" : " "
                  }>{todo.text}</strong>
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
                    onClick={() => handleDelete(todo.id)}
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
          <Button color="danger" onClick={handleDelete}>
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
