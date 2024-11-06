import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.scss";
import TodoList from "./components/Todos/TodoList";
import NoTasks from "./components/NoTasks/NoTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    const tasksWithDeletedTask = tasks.filter((task) => task.id !== id);
    setTasks(tasksWithDeletedTask);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach((task) => (task.isMenuOpened = false));
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  const updateTodoHandler = (id, changedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, title: changedTask.title, about: changedTask.about }
          : { ...task }
      )
    );
  };

  return (
    <div className="App">
      <div className="list">
        <TodoForm addTask={addTodoHandler} />
        {tasks.length === 0 ? (
          <NoTasks />
        ) : (
          <TodoList
            tasks={tasks}
            deleteTask={deleteTodoHandler}
            toggleTodo={toggleTodoHandler}
            updateTask={updateTodoHandler}
          />
        )}
      </div>
    </div>
  );
}

export default App;
