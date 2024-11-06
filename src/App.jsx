import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.scss";
import TodoList from "./components/Todos/TodoList";
import NoTasks from "./components/NoTasks/NoTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  return (
    <div className="App">
      <div className="list">
        <TodoForm />
        {/* {tasks.length === 0 ? <NoTasks /> : {}} */}
        <TodoList />
      </div>
    </div>
  );
}

export default App;
