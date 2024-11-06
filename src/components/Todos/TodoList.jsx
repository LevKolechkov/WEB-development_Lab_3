import Todo from "./Todo";

function TodoList() {
  return (
    <ul id="taskList">
      <Todo id={1} title={`Title`} about={`About`} />
    </ul>
  );
}

export default TodoList;
