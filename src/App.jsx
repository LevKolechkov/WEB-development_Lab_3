import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.scss";
import TodoList from "./components/Todos/TodoList";
import NoTasks from "./components/NoTasks/NoTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    // TODO:
    // Работа с localStorage

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    // TODO:
    // Работа с localStorage

    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTodoHandler = ({ title, about }) => {
    const newTask = {
      id: uuidv4(),
      title,
      about,
      isMenuOpened: false,
    };
    addNewTask(newTask);
  };

  const deleteTodoHandler = (id) => {
    deleteTask(id);
  };

  const toggleTodoHandler = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, isMenuOpened: !task.isMenuOpened }
          : { ...task, isMenuOpened: false }
      )
    );
  };

  return (
    <div className="App">
      <div className="list">
        <TodoForm addTask={addTodoHandler} />
        {/* {tasks.length === 0 ? <NoTasks /> : <TodoList />} */}
        <TodoList
          tasks={tasks}
          deleteTask={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
