import { useEffect, useState } from "react";
import Todo from "./components/Todo/Todo";
import "./App.scss";
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
        <Todo />
        {tasks.length === 0 ? <NoTasks /> : {}}
      </div>
    </div>
  );
}

export default App;
