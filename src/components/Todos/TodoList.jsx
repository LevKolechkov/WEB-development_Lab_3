import Todo from "./Todo";

function TodoList({ tasks, deleteTask, toggleTodo }) {
  return (
    <ul id="taskList">
      {tasks.map((task) => (
        <Todo
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
