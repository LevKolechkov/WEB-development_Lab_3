import "./TodoList.scss";
import shareIcon from "../../assets/images/menu/share.svg";
import infoIcon from "../../assets/images/menu/info.svg";
import editIcon from "../../assets/images/menu/edit.svg";

function Todo(props) {
  const { id, title, about } = props;

  return (
    <li className="task">
      <div className="container">
        <div className="container__text">
          <h1>{title}</h1>
          <h2>{about}</h2>
        </div>
        <button>x</button>
      </div>
      <div className="menu visible">
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
    </li>
  );
}

export default Todo;
