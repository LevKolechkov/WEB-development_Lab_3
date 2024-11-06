import Todo from "./Todo";
import "./TodoList.scss";

function TodoList() {
  return (
    <ul id="taskList">
      <Todo id={1} title={`Title`} about={`About`} />
    </ul>
  );
}

export default TodoList;
