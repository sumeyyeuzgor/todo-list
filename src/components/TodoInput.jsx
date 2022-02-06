import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { ReactComponent as PlusIcon } from "../assets/plus-square-regular.svg";

function TodoInput({ setTodoList }) {
  const [todo, setTodo] = useState("");
  const addTodo = () => {
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      { id: uuid(), todo, isCompleted: false, isEdit: false },
    ]);
    setTodo("");
  };
  return (
    <div className="d-flex justify-content-center mt-3 w-100">
      <Form.Control
        type="text"
        placeholder="Todo"
        className="w-50 me-5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button
        onClick={addTodo}
        className="d-flex justify-content-center align-items-center gap-2"
      >
        <PlusIcon width={15} height={15} />
        <span>Add Todo</span>
      </Button>
    </div>
  );
}

export default TodoInput;
