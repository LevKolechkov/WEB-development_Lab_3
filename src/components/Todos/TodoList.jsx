import Todo from "./Todo";

function TodoList({ tasks, deleteTask, toggleTodo, updateTask }) {
  return (
    <ul id="taskList">
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTodo={toggleTodo}
          updateTask={updateTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;
