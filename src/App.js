import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    "clean home",
    "do homework",
    "write code",
  ]);
  const addTodo = () => {
    setTodoList((prevState) => [...prevState, todo]);
    setTodo("");
  };
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
          <Button onClick={addTodo}>Add Todo</Button>
        </div>

        <div className="d-flex mt-3 flex-column w-75">
          {todoList.map((todo, index) => (
            <div key={index}>{todo}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
