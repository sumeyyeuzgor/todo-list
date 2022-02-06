import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { ReactComponent as EditIcon } from "./assets/edit-solid.svg";
import { ReactComponent as DeleteIcon } from "./assets/trash-solid.svg";
import { ReactComponent as PlusIcon } from "./assets/plus-square-regular.svg";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const addTodo = () => {
    setTodoList((prevState) => [...prevState, { id: uuid(), todo }]);
    setTodo("");
  };
  useEffect(() => {
    console.log(todoList);
  }, [todoList]);
  return (
    <div
      className="d-flex justify-content-center w-100"
      style={{ paddingTop: "15vh" }}
    >
      <div className="d-flex align-items-center flex-column w-75">
        <h1>Todo List</h1>
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

        <div className="d-flex mt-3 flex-column w-75 gap-3">
          {todoList.map((todoItem) => (
            <div
              key={todoItem.id}
              className="d-flex justify-content-between align-items-center "
            >
              <div className="d-flex  justify-content-center align-items-center ">
                <Form.Check type="checkbox" label="" />
                <div>{todoItem.todo}</div>
              </div>
              <div className="d-flex gap-3  justify-content-center align-items-center ">
                <EditIcon width={25} height={25} />
                <DeleteIcon width={25} height={25} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
