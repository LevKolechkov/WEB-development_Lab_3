import { useState } from "react";
import "./TodoList.scss";
import shareIcon from "../../assets/images/menu/share.svg";
import infoIcon from "../../assets/images/menu/info.svg";
import editIcon from "../../assets/images/menu/edit.svg";
import ConfirmDelete from "../Confirm/ConfirmDelete";

function Todo({ task, deleteTask, toggleTodo }) {
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmDelete(true);
  };

  const handleConfirmDelete = () => {
    deleteTask(task.id);
    setShowConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setShowConfirmDelete(false);
  };

  return (
    <li className="task">
      <div className="container" onClick={() => toggleTodo(task.id)}>
        <div className="container__text">
          <h1>{task.title}</h1>
          <h2>{task.about}</h2>
        </div>
        <button
          onClick={(event) => {
            event.stopPropagation();
            handleDeleteClick();
          }}
        >
          x
        </button>
      </div>
      <div className={`menu${task.isMenuOpened ? " visible" : ""}`}>
        <button>
          <img src={shareIcon} alt="share" />
        </button>
        <button>
          <img src={infoIcon} alt="info" />
        </button>
        <button>
          <img src={editIcon} alt="edit" />
        </button>
      </div>
      <ConfirmDelete
        show={showConfirmDelete}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </li>
  );
}

export default Todo;
