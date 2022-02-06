import { useState } from "react";
import { Form } from "react-bootstrap";
import { ReactComponent as EditIcon } from "../assets/edit-solid.svg";
import { ReactComponent as DeleteIcon } from "../assets/trash-solid.svg";
import { ReactComponent as SaveIcon } from "../assets/save-solid.svg";

function TodoItem({ todoItem, setTodoList }) {
  const [newTodo, setNewTodo] = useState("");

  const setTodoCompleted = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isCompleted: !todoItem.isCompleted }
          : todoItem
      )
    );
  };
  const deleteTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todoItem) => todoItem.id !== id)
    );
  };
  const editTodo = (id, todo) => {
    setNewTodo(todo);
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isEdit: !todoItem.isEdit }
          : todoItem
      )
    );
  };
  const saveTodo = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, isEdit: !todoItem.isEdit, todo: newTodo }
          : todoItem
      )
    );
  };
  return (
    <div className="d-flex justify-content-between align-items-center ">
      <div
        className="d-flex  justify-content-center align-items-center "
        style={{ cursor: "pointer" }}
      >
        <Form.Check
          type="checkbox"
          value={todoItem.isCompleted}
          label=""
          id={todoItem.id}
          onChange={() => setTodoCompleted(todoItem.id)}
          style={{ cursor: "pointer" }}
        />
        {todoItem.isEdit ? (
          <Form.Control
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        ) : (
          <label
            style={{ cursor: "pointer" }}
            htmlFor={todoItem.id}
            className={`h5 ${
              todoItem.isCompleted ? "text-decoration-line-through" : ""
            }`}
          >
            {todoItem.todo}
          </label>
        )}
      </div>
      <div className="d-flex gap-3  justify-content-center align-items-center ">
        {todoItem.isEdit ? (
          <SaveIcon
            width={25}
            height={25}
            onClick={() => saveTodo(todoItem.id)}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <EditIcon
            width={25}
            height={25}
            onClick={() => editTodo(todoItem.id, todoItem.todo)}
            style={{ cursor: "pointer" }}
          />
        )}

        <DeleteIcon
          width={25}
          height={25}
          onClick={() => deleteTodo(todoItem.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default TodoItem;
