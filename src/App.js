import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoList, setTodoList] = useState([]);

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
        <TodoInput setTodoList={setTodoList} />

        <div className="d-flex mt-3 flex-column w-75 gap-3">
          {todoList.map((todoItem) => (
            <TodoItem
              key={todoItem.id}
              todoItem={todoItem}
              setTodoList={setTodoList}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
