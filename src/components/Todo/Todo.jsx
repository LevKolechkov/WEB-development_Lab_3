import "./Todo.scss";

function Todo() {
  return (
    <div className="set-task">
      <div className="set-task__input">
        <input type="text" id="titleInput" placeholder="Title..." />
        <input type="text" id="aboutInput" placeholder="About..." />
      </div>
      <button id="addTask">+</button>
    </div>
  );
}

export default Todo;
